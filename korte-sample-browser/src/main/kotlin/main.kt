import com.soywiz.korio.async.asyncImmediately
import com.soywiz.korio.file.std.MemoryVfsMix
import com.soywiz.korte.*
import org.w3c.dom.*
import kotlin.browser.*
import kotlin.coroutines.*
import kotlin.js.*

fun ready(coroutineContext: CoroutineContext) {
    println("READY")

    document.getElementById("version")?.textContent = Korte.VERSION

    val sourcesEditor = ace.edit("sources").apply {
        setTheme("ace/theme/monokai")
        setOptions(
            json(
                "enableBasicAutocompletion" to true
                //"enableLiveAutocompletion" to true
            )
        )
        session.setMode("ace/mode/twig")
    }

    val compiledEditor = ace.edit("compiled").apply {
        setTheme("ace/theme/monokai")
        setOptions(
            json(
                //"enableBasicAutocompletion" to true,
                //"enableLiveAutocompletion" to true
            )
        )
        setReadOnly(true)
        session.setMode("ace/mode/twig")
    }

    sourcesEditor.setValue("""
        ### _base.html
        <html>
        <body>
            {% block content %}default{% endblock %}
        </body>
        </html>

        ### index.html
        ---
        name: Korte
        list: [This,is,a,test]
        ---
        {% extends "_base.html" %}
        {% block content %}
        Hello from {{ name|upper }}:
        <ul>
            {% for item in list|sort -%}
                {% if item|length % 2 == 0 %}<li>{{ loop.index0 }}: {{ item }} : {{ item|length }}</li>{% endif %}
            {% end %}
        </ul>
        {% end %}
    """.trimIndent(), -1)

    fun updateRendererd() {
        asyncImmediately(coroutineContext) {
            val template = "### default.html\n" + sourcesEditor.getValue()

            val parts = template.split("###").drop(1)

            val files = LinkedHashMap<String, String>()

            for (part in parts) {
                val items = part.split("\n", limit = 2)
                val name = items.getOrNull(0)?.trim() ?: ""
                val content = items.getOrNull(1)?.trim() ?: ""
                files[name] = content
                //println("[$name] :: $content")
            }

            val vfs = MemoryVfsMix(files)
            val templates = Templates(vfs)

            val result = try {
                templates.render(when {
                    "index.html" in files -> "index.html"
                    else -> "default.html"
                }, mapOf("name" to "User"))
            } catch (e: dynamic) {
                "$e"
            }
            compiledEditor.setValue(result, -1)
        }
    }

    sourcesEditor.selection.onChangeCursor { event, selection ->
        updateRendererd()
    }
    updateRendererd()
}

suspend fun main(args: Array<String>) {
    //println(Template("hello {{ name }}").invoke(mapOf("name" to "world")))

    val context = coroutineContext

    if (document.readyState == DocumentReadyState.COMPLETE) {
        ready(context)
    } else {
        document.addEventListener("DOMContentLoaded", { e: dynamic ->
            ready(context)
        })
    }
}
