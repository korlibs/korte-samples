(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'korte'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('korte'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korte-sample-browser'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korte-sample-browser'.");
    }
    if (typeof korte === 'undefined') {
      throw new Error("Error loading module 'korte-sample-browser'. Its dependency 'korte' was not found. Please, check whether 'korte' is loaded prior to 'korte-sample-browser'.");
    }
    root['korte-sample-browser'] = factory(typeof this['korte-sample-browser'] === 'undefined' ? {} : this['korte-sample-browser'], kotlin, korte);
  }
}(this, function (_, Kotlin, $module$korte) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var korte = $module$korte.com.soywiz.korte;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  var Unit = Kotlin.kotlin.Unit;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var TemplateProvider = $module$korte.com.soywiz.korte.TemplateProvider_y0zsll$;
  var Templates = $module$korte.com.soywiz.korte.Templates;
  var mapOf = Kotlin.kotlin.collections.mapOf_x2b85n$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var Continuation = Kotlin.kotlin.coroutines.Continuation;
  var startCoroutine = Kotlin.kotlin.coroutines.startCoroutine_x18nsh$;
  var equals = Kotlin.equals;
  var internal = Kotlin.kotlin.coroutines.js.internal;
  function AceCompletion(caption, value, meta, score) {
    this.caption = caption;
    this.value = value;
    this.meta = meta;
    this.score = score;
  }
  AceCompletion.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AceCompletion',
    interfaces: []
  };
  AceCompletion.prototype.component1 = function () {
    return this.caption;
  };
  AceCompletion.prototype.component2 = function () {
    return this.value;
  };
  AceCompletion.prototype.component3 = function () {
    return this.meta;
  };
  AceCompletion.prototype.component4 = function () {
    return this.score;
  };
  AceCompletion.prototype.copy_ibifho$ = function (caption, value, meta, score) {
    return new AceCompletion(caption === void 0 ? this.caption : caption, value === void 0 ? this.value : value, meta === void 0 ? this.meta : meta, score === void 0 ? this.score : score);
  };
  AceCompletion.prototype.toString = function () {
    return 'AceCompletion(caption=' + Kotlin.toString(this.caption) + (', value=' + Kotlin.toString(this.value)) + (', meta=' + Kotlin.toString(this.meta)) + (', score=' + Kotlin.toString(this.score)) + ')';
  };
  AceCompletion.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.caption) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    result = result * 31 + Kotlin.hashCode(this.meta) | 0;
    result = result * 31 + Kotlin.hashCode(this.score) | 0;
    return result;
  };
  AceCompletion.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.caption, other.caption) && Kotlin.equals(this.value, other.value) && Kotlin.equals(this.meta, other.meta) && Kotlin.equals(this.score, other.score)))));
  };
  function Pos(row, column) {
    this.row = row;
    this.column = column;
  }
  Pos.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Pos',
    interfaces: []
  };
  Pos.prototype.component1 = function () {
    return this.row;
  };
  Pos.prototype.component2 = function () {
    return this.column;
  };
  Pos.prototype.copy_vux9f0$ = function (row, column) {
    return new Pos(row === void 0 ? this.row : row, column === void 0 ? this.column : column);
  };
  Pos.prototype.toString = function () {
    return 'Pos(row=' + Kotlin.toString(this.row) + (', column=' + Kotlin.toString(this.column)) + ')';
  };
  Pos.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.row) | 0;
    result = result * 31 + Kotlin.hashCode(this.column) | 0;
    return result;
  };
  Pos.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.row, other.row) && Kotlin.equals(this.column, other.column)))));
  };
  function get_row0($receiver) {
    return $receiver.row;
  }
  function get_row1($receiver) {
    return $receiver.row + 1 | 0;
  }
  function AceAnnotation(text, row, column, type) {
    if (row === void 0)
      row = 1;
    if (column === void 0)
      column = 0;
    if (type === void 0)
      type = 'error';
    this.text = text;
    this.row = row;
    this.column = column;
    this.type = type;
  }
  AceAnnotation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AceAnnotation',
    interfaces: []
  };
  AceAnnotation.prototype.component1 = function () {
    return this.text;
  };
  AceAnnotation.prototype.component2 = function () {
    return this.row;
  };
  AceAnnotation.prototype.component3 = function () {
    return this.column;
  };
  AceAnnotation.prototype.component4 = function () {
    return this.type;
  };
  AceAnnotation.prototype.copy_6qfks0$ = function (text, row, column, type) {
    return new AceAnnotation(text === void 0 ? this.text : text, row === void 0 ? this.row : row, column === void 0 ? this.column : column, type === void 0 ? this.type : type);
  };
  AceAnnotation.prototype.toString = function () {
    return 'AceAnnotation(text=' + Kotlin.toString(this.text) + (', row=' + Kotlin.toString(this.row)) + (', column=' + Kotlin.toString(this.column)) + (', type=' + Kotlin.toString(this.type)) + ')';
  };
  AceAnnotation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    result = result * 31 + Kotlin.hashCode(this.row) | 0;
    result = result * 31 + Kotlin.hashCode(this.column) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  AceAnnotation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.text, other.text) && Kotlin.equals(this.row, other.row) && Kotlin.equals(this.column, other.column) && Kotlin.equals(this.type, other.type)))));
  };
  function onChangeCursor($receiver, callback) {
    $receiver.on('changeCursor', callback);
  }
  function setValue($receiver, content) {
    $receiver.setValue(content, 0);
  }
  function utf8Encode(str) {
    return new Int8Array((new TextEncoder('utf-8')).encode(str).buffer);
  }
  var throwCCE = Kotlin.throwCCE;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var Map = Kotlin.kotlin.collections.Map;
  function Coroutine$ready$updateRendererd$lambda(closure$sourcesEditor_0, closure$compiledEditor_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.local$closure$sourcesEditor = closure$sourcesEditor_0;
    this.local$closure$compiledEditor = closure$compiledEditor_0;
    this.local$tmp$_4 = void 0;
  }
  Coroutine$ready$updateRendererd$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ready$updateRendererd$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ready$updateRendererd$lambda.prototype.constructor = Coroutine$ready$updateRendererd$lambda;
  Coroutine$ready$updateRendererd$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
            var template = '### default.html\n' + this.local$closure$sourcesEditor.getValue();
            var parts = drop(split(template, ['###']), 1);
            var files = LinkedHashMap_init();
            tmp$ = parts.iterator();
            while (tmp$.hasNext()) {
              var part = tmp$.next();
              var items = split(part, ['\n'], void 0, 2);
              var tmp$_4;
              if ((tmp$_0 = getOrNull(items, 0)) != null) {
                var tmp$_5;
                tmp$_4 = trim(Kotlin.isCharSequence(tmp$_5 = tmp$_0) ? tmp$_5 : throwCCE()).toString();
              }
               else
                tmp$_4 = null;
              var name = (tmp$_1 = tmp$_4) != null ? tmp$_1 : '';
              var content = (tmp$_2 = getOrNull(items, 1)) != null ? tmp$_2 : '';
              files.put_xwzc9p$(name, content);
            }

            var vfs = TemplateProvider(files);
            var templates = new Templates(vfs);
            this.exceptionState_0 = 2;
            var key = 'index.html';
            var tmp$_6;
            if ((Kotlin.isType(tmp$_6 = files, Map) ? tmp$_6 : throwCCE()).containsKey_11rb$(key))
              tmp$_3 = 'index.html';
            else
              tmp$_3 = 'default.html';
            this.state_0 = 1;
            this.result_0 = templates.render_4w9ihe$(tmp$_3, mapOf(to('name', 'User')), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$tmp$_4 = this.result_0;
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e = this.exception_0;
            this.local$tmp$_4 = e.toString();
            this.state_0 = 3;
            continue;
          case 3:
            var result = this.local$tmp$_4;
            return this.local$closure$compiledEditor.setValue(result, -1), Unit;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function ready$updateRendererd$lambda(closure$sourcesEditor_0, closure$compiledEditor_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ready$updateRendererd$lambda(closure$sourcesEditor_0, closure$compiledEditor_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ready$updateRendererd$ObjectLiteral(closure$coroutineContext) {
    this.context_hb9jg1$_0 = closure$coroutineContext;
  }
  Object.defineProperty(ready$updateRendererd$ObjectLiteral.prototype, 'context', {
    get: function () {
      return this.context_hb9jg1$_0;
    }
  });
  ready$updateRendererd$ObjectLiteral.prototype.resumeWith_tl1gpc$ = function (result) {
    var tmp$;
    tmp$ = result.exceptionOrNull();
    if (tmp$ == null) {
      return;
    }
    println(tmp$);
  };
  ready$updateRendererd$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Continuation]
  };
  function ready$updateRendererd(closure$sourcesEditor, closure$compiledEditor, closure$coroutineContext) {
    return function () {
      var func = ready$updateRendererd$lambda(closure$sourcesEditor, closure$compiledEditor);
      startCoroutine(func, new ready$updateRendererd$ObjectLiteral(closure$coroutineContext));
    };
  }
  function ready$lambda(closure$updateRendererd) {
    return function (it) {
      closure$updateRendererd();
      return Unit;
    };
  }
  function ready(coroutineContext) {
    var tmp$;
    println('READY');
    (tmp$ = document.getElementById('version')) != null ? (tmp$.textContent = korte.Korte.VERSION) : null;
    var $receiver = ace.edit('sources');
    $receiver.setTheme('ace/theme/monokai');
    $receiver.setOptions(json([to('enableBasicAutocompletion', true)]));
    $receiver.session.setMode('ace/mode/twig');
    var sourcesEditor = $receiver;
    var $receiver_0 = ace.edit('compiled');
    $receiver_0.setTheme('ace/theme/monokai');
    $receiver_0.setOptions(json([]));
    $receiver_0.setReadOnly(true);
    $receiver_0.session.setMode('ace/mode/twig');
    var compiledEditor = $receiver_0;
    sourcesEditor.setValue(trimIndent('\n        ### _base.html\n        <html>\n        <body>\n            {% block content %}default{% endblock %}\n        <\/body>\n        <\/html>\n\n        ### index.html\n        ---\n        name: Korte\n        list: [This,is,a,test]\n        ---\n        {% extends "_base.html" %}\n        {% block content %}\n        Hello from {{ name|upper }}:\n        <ul>\n            {% for item in list|sort -%}\n                {% if item|length % 2 == 0 %}<li>{{ loop.index0 }}: {{ item }} : {{ item|length }}<\/li>{% endif %}\n            {% end %}\n        <\/ul>\n        {% end %}\n    '), -1);
    var updateRendererd = ready$updateRendererd(sourcesEditor, compiledEditor, coroutineContext);
    sourcesEditor.container.addEventListener('keyup', ready$lambda(updateRendererd), true);
    updateRendererd();
  }
  function main$lambda(closure$context) {
    return function (e) {
      ready(closure$context);
      return Unit;
    };
  }
  function main(args, continuation) {
    var context = continuation.context;
    if (equals(document.readyState, 'complete')) {
      ready(context);
    }
     else {
      document.addEventListener('DOMContentLoaded', main$lambda(context));
    }
  }
  _.AceCompletion = AceCompletion;
  _.Pos = Pos;
  _.get_row0_1hg1n$ = get_row0;
  _.get_row1_1hg1n$ = get_row1;
  _.AceAnnotation = AceAnnotation;
  _.onChangeCursor_wtcm2c$ = onChangeCursor;
  _.setValue_mlvikc$ = setValue;
  _.utf8Encode_61zpoe$ = utf8Encode;
  _.ready_1fupul$ = ready;
  _.main_kand9s$ = main;
  main([], internal.EmptyContinuation, false);
  Kotlin.defineModule('korte-sample-browser', _);
  return _;
}));

//# sourceMappingURL=korte-sample-browser.js.map
