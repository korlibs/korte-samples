(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'korio', 'kds', 'kmem', 'kotlinx-coroutines-core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('korio'), require('kds'), require('kmem'), require('kotlinx-coroutines-core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korte'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korte'.");
    }
    if (typeof korio === 'undefined') {
      throw new Error("Error loading module 'korte'. Its dependency 'korio' was not found. Please, check whether 'korio' is loaded prior to 'korte'.");
    }
    if (typeof kds === 'undefined') {
      throw new Error("Error loading module 'korte'. Its dependency 'kds' was not found. Please, check whether 'kds' is loaded prior to 'korte'.");
    }
    if (typeof kmem === 'undefined') {
      throw new Error("Error loading module 'korte'. Its dependency 'kmem' was not found. Please, check whether 'kmem' is loaded prior to 'korte'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'korte'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'korte'.");
    }
    root.korte = factory(typeof korte === 'undefined' ? {} : korte, kotlin, korio, kds, kmem, this['kotlinx-coroutines-core']);
  }
}(this, function (_, Kotlin, $module$korio, $module$kds, $module$kmem, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var split = Kotlin.kotlin.text.split_o64adg$;
  var equals = Kotlin.equals;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var slice = Kotlin.kotlin.collections.slice_6bjbi1$;
  var yaml = $module$korio.com.soywiz.korio.serialization.yaml;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var Map = Kotlin.kotlin.collections.Map;
  var throwCCE = Kotlin.throwCCE;
  var invalidOp = $module$korio.com.soywiz.korio.lang.invalidOp_61zpoe$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var ListReader = $module$kds.com.soywiz.kds.ListReader;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Unit = Kotlin.kotlin.Unit;
  var extraProperty = $module$kds.com.soywiz.kds.extraProperty;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var Pair = Kotlin.kotlin.Pair;
  var toString = Kotlin.toString;
  var capitalize = Kotlin.kotlin.text.capitalize_pdl1vz$;
  var quote = $module$korio.com.soywiz.korio.util.quote_5cw0du$;
  var reversed = Kotlin.kotlin.collections.reversed_7wnvza$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var clamp = $module$kmem.com.soywiz.kmem.clamp_e4yvb3$;
  var slice_0 = Kotlin.kotlin.text.slice_fc3b62$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var json = $module$korio.com.soywiz.korio.serialization.json;
  var format = $module$korio.com.soywiz.korio.lang.format_e33kwl$;
  var chunked = Kotlin.kotlin.collections.chunked_ba2ldo$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var umod = $module$kmem.com.soywiz.kmem.umod_dqglrj$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var step = Kotlin.kotlin.ranges.step_xsgg7u$;
  var setOf = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var setOf_0 = Kotlin.kotlin.collections.setOf_mh5how$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var takeLast = Kotlin.kotlin.collections.takeLast_yzln2o$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var Throwable = Error;
  var contains = Kotlin.kotlin.collections.contains_mjy6jw$;
  var joinToString_0 = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var toLongOrNull = Kotlin.kotlin.text.toLongOrNull_pdl1vz$;
  var L0 = Kotlin.Long.ZERO;
  var toLong = Kotlin.kotlin.text.toLong_pdl1vz$;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var withIndex = Kotlin.kotlin.collections.withIndex_7wnvza$;
  var StrReader = $module$korio.com.soywiz.korio.util.StrReader;
  var unboxChar = Kotlin.unboxChar;
  var isLetterDigitOrUnderscore = $module$korio.com.soywiz.korio.util.isLetterDigitOrUnderscore_myv2d0$;
  var isDigit = $module$korio.com.soywiz.korio.util.isDigit_myv2d0$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var unescape = $module$korio.com.soywiz.korio.util.unescape_pdl1vz$;
  var throwUPAE = Kotlin.throwUPAE;
  var htmlspecialchars = $module$korio.com.soywiz.korio.util.htmlspecialchars_pdl1vz$;
  var zip = Kotlin.kotlin.collections.zip_45mdf7$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var hashMapOf = Kotlin.kotlin.collections.hashMapOf_qfcya0$;
  var Exception_init = Kotlin.kotlin.Exception_init;
  var Exception = Kotlin.kotlin.Exception;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Pool_init = $module$kds.com.soywiz.kds.Pool_init_rz0iom$;
  var toMap_0 = Kotlin.kotlin.collections.toMap_v2dak7$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_73mtqc$;
  var Extra = $module$kds.com.soywiz.kds.Extra;
  var Extra$Mixin = $module$kds.com.soywiz.kds.Extra.Mixin;
  var toByteArray = $module$korio.com.soywiz.korio.lang.toByteArray_7jlb4b$;
  var openAsync = $module$korio.com.soywiz.korio.stream.openAsync_m1iwyb$;
  var mapOf = Kotlin.kotlin.collections.mapOf_x2b85n$;
  var MemoryVfs = $module$korio.com.soywiz.korio.file.std.MemoryVfs_r2g07k$;
  var lang = $module$korio.com.soywiz.korio.lang;
  var asyncImmediately = $module$korio.com.soywiz.korio.async.asyncImmediately_nt96rv$;
  var Deferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.Deferred;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var substring = Kotlin.kotlin.text.substring_fc3b62$;
  var indexOf = Kotlin.kotlin.text.indexOf_l5u8uk$;
  var plus_0 = Kotlin.kotlin.collections.plus_q4559j$;
  var Iterable = Kotlin.kotlin.collections.Iterable;
  var numberToDouble = Kotlin.numberToDouble;
  var noImpl = $module$korio.com.soywiz.korio.lang.noImpl_61zpoe$;
  var Set = Kotlin.kotlin.collections.Set;
  var kotlin_js_internal_DoubleCompanionObject = Kotlin.kotlin.js.internal.DoubleCompanionObject;
  var numberToInt = Kotlin.numberToInt;
  var numberToLong = Kotlin.numberToLong;
  var List = Kotlin.kotlin.collections.List;
  var count = Kotlin.kotlin.collections.count_7wnvza$;
  var toList_0 = Kotlin.kotlin.text.toList_gw00vp$;
  var toList_1 = Kotlin.kotlin.collections.toList_abgq59$;
  var KClass = Kotlin.kotlin.reflect.KClass;
  var Any = Object;
  var MutableMap = Kotlin.kotlin.collections.MutableMap;
  var MutableList = Kotlin.kotlin.collections.MutableList;
  var toList_2 = Kotlin.kotlin.collections.toList_us0mfu$;
  var KProperty1 = Kotlin.kotlin.reflect.KProperty1;
  var KMutableProperty1 = Kotlin.kotlin.reflect.KMutableProperty1;
  Template$StopEvaluatingException.prototype = Object.create(Exception.prototype);
  Template$StopEvaluatingException.prototype.constructor = Template$StopEvaluatingException;
  Token$TLiteral.prototype = Object.create(Token.prototype);
  Token$TLiteral.prototype.constructor = Token$TLiteral;
  Token$TExpr.prototype = Object.create(Token.prototype);
  Token$TExpr.prototype.constructor = Token$TExpr;
  Token$TTag.prototype = Object.create(Token.prototype);
  Token$TTag.prototype.constructor = Token$TTag;
  JsObjectMapper2.prototype = Object.create(ObjectMapper2.prototype);
  JsObjectMapper2.prototype.constructor = JsObjectMapper2;
  function Block() {
    Block$Companion_getInstance();
  }
  function Block$Companion() {
    Block$Companion_instance = this;
  }
  Block$Companion.prototype.group_j18gkd$ = function (children) {
    return children.size === 1 ? children.get_za3lpa$(0) : new DefaultBlocks$BlockGroup(children);
  };
  function Block$Companion$Parse(tokens, parseContext) {
    this.tokens = tokens;
    this.parseContext = parseContext;
    this.tr = new ListReader(this.tokens);
  }
  function Block$Companion$Parse$handle$emitPart(closure$parts, closure$currentToken, closure$children) {
    return function () {
      var $receiver = closure$parts;
      var element = new Tag$Part(closure$currentToken.v, Block$Companion_getInstance().group_j18gkd$(toList(closure$children)));
      $receiver.add_11rb$(element);
    };
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  function Coroutine$handle_hdirg7$($this, tag_0, token_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$parts = void 0;
    this.local$currentToken = void 0;
    this.local$children = void 0;
    this.local$emitPart = void 0;
    this.local$tmp$ = void 0;
    this.local$tag = tag_0;
    this.local$token = token_0;
  }
  Coroutine$handle_hdirg7$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$handle_hdirg7$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$handle_hdirg7$.prototype.constructor = Coroutine$handle_hdirg7$;
  Coroutine$handle_hdirg7$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1;
            this.local$parts = ArrayList_init();
            this.local$currentToken = {v: this.local$token};
            this.local$children = ArrayList_init();
            this.local$emitPart = Block$Companion$Parse$handle$emitPart(this.local$parts, this.local$currentToken, this.local$children);
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.$this.tr.eof) {
              this.state_0 = 11;
              continue;
            }

            var it = this.$this.tr.read();
            if (Kotlin.isType(it, Token$TLiteral)) {
              var text = it.content;
              if (this.local$children.isEmpty() && startsWith(it.content, '---')) {
                var lines = split(it.content, Kotlin.charArrayOf(10));
                if (equals(lines.get_za3lpa$(0), '---')) {
                  var slines = drop(lines, 1);
                  var index = slines.indexOf_11rb$('---');
                  if (index >= 0) {
                    var yamlLines = slice(slines, until(0, index));
                    var outside = slice(slines, until(index + 1 | 0, slines.size));
                    var yaml_0 = yaml.Yaml.read_61zpoe$(joinToString(yamlLines, '\n'));
                    if (Kotlin.isType(yaml_0, Map)) {
                      this.$this.parseContext.template.frontMatter = Kotlin.isType(tmp$ = yaml_0, Map) ? tmp$ : throwCCE();
                    }
                    text = joinToString(outside, '\n');
                  }
                }
              }
              var element = new DefaultBlocks$BlockText(text);
              this.local$children.add_11rb$(element);
              this.state_0 = 10;
              continue;
            }
             else {
              if (Kotlin.isType(it, Token$TExpr)) {
                var element_0 = new DefaultBlocks$BlockExpr(ExprNode$Companion_getInstance().parse_61zpoe$(it.content));
                this.local$children.add_11rb$(element_0);
                this.state_0 = 9;
                continue;
              }
               else {
                if (Kotlin.isType(it, Token$TTag)) {
                  tmp$_0 = it.name;
                  var tmp$_2;
                  if (((tmp$_2 = this.local$tag.end) != null ? tmp$_2 : emptySet()).contains_11rb$(tmp$_0)) {
                    this.state_0 = 11;
                    continue;
                  }
                   else {
                    if (this.local$tag.nextList.contains_11rb$(tmp$_0)) {
                      this.local$emitPart();
                      this.local$currentToken.v = it;
                      this.local$children.clear();
                      this.state_0 = 6;
                      continue;
                    }
                     else {
                      var newtag = (tmp$_1 = this.$this.parseContext.config.tags.get_11rb$(it.name)) != null ? tmp$_1 : invalidOp("Can't find tag " + it.name + ' with content ' + it.content);
                      if (newtag.end != null) {
                        this.state_0 = 4;
                        this.result_0 = this.$this.handle_hdirg7$(newtag, it, this);
                        if (this.result_0 === COROUTINE_SUSPENDED)
                          return COROUTINE_SUSPENDED;
                        continue;
                      }
                       else {
                        this.state_0 = 3;
                        this.result_0 = newtag.buildNode(new Tag$BuildContext(this.$this.parseContext, listOf(new Tag$Part(it, new DefaultBlocks$BlockText('')))), this);
                        if (this.result_0 === COROUTINE_SUSPENDED)
                          return COROUTINE_SUSPENDED;
                        continue;
                      }
                    }
                  }
                }
                 else {
                  this.state_0 = 11;
                  continue;
                }
              }
            }

          case 3:
            this.local$tmp$ = this.result_0;
            this.state_0 = 5;
            continue;
          case 4:
            this.local$tmp$ = this.result_0;
            this.state_0 = 5;
            continue;
          case 5:
            var element_1 = this.local$tmp$;
            this.local$children.add_11rb$(element_1);
            this.state_0 = 6;
            continue;
          case 6:
            this.state_0 = 7;
            continue;
          case 7:
            this.state_0 = 8;
            continue;
          case 8:
            this.state_0 = 9;
            continue;
          case 9:
            this.state_0 = 10;
            continue;
          case 10:
            this.state_0 = 2;
            continue;
          case 11:
            this.local$emitPart();
            this.state_0 = 12;
            this.result_0 = this.local$tag.buildNode(new Tag$BuildContext(this.$this.parseContext, this.local$parts), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 12:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  Block$Companion$Parse.prototype.handle_hdirg7$ = function (tag_0, token_0, continuation_0, suspended) {
    var instance = new Coroutine$handle_hdirg7$(this, tag_0, token_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  Block$Companion$Parse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Parse',
    interfaces: []
  };
  Block$Companion.prototype.parse_mfia1s$ = function (tokens, parseContext, continuation) {
    return (new Block$Companion$Parse(tokens, parseContext)).handle_hdirg7$(DefaultTags_getInstance().Empty, new Token$TTag('', ''), continuation);
  };
  Block$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Block$Companion_instance = null;
  function Block$Companion_getInstance() {
    if (Block$Companion_instance === null) {
      new Block$Companion();
    }
    return Block$Companion_instance;
  }
  Block.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Block',
    interfaces: [DynamicContext]
  };
  function debugPrintln$lambda$lambda(v) {
    println(v);
    return Unit;
  }
  function debugPrintln$lambda() {
    return debugPrintln$lambda$lambda;
  }
  var debugPrintln;
  var debugPrintln_metadata = new PropertyMetadata('debugPrintln');
  function get_debugPrintln($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    tmp$_1 = $receiver.extra;
    tmp$_0 = (tmp$ = debugPrintln.name) != null ? tmp$ : debugPrintln_metadata.callableName;
    return (tmp$_3 = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE()) != null ? tmp$_3 : debugPrintln.default();
  }
  function set_debugPrintln($receiver, debugPrintln_0) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if ($receiver.extra == null)
      $receiver.extra = LinkedHashMap_init();
    tmp$_3 = $receiver.extra;
    tmp$_0 = (tmp$ = debugPrintln.name) != null ? tmp$ : debugPrintln_metadata.callableName;
    tmp$_2 = (tmp$_1 = debugPrintln_0) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
    if (tmp$_3 != null) {
      tmp$_3.put_xwzc9p$(tmp$_0, tmp$_2);
    }
  }
  function DefaultBlocks() {
    DefaultBlocks_instance = this;
  }
  function DefaultBlocks$BlockBlock(name) {
    this.name = name;
  }
  function Coroutine$eval_ojpytg$($this, context_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$context = context_0;
  }
  Coroutine$eval_ojpytg$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$eval_ojpytg$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$eval_ojpytg$.prototype.constructor = Coroutine$eval_ojpytg$;
  Coroutine$eval_ojpytg$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$context.leafTemplate.getBlock_61zpoe$(this.$this.name).eval_ojpytg$(this.local$context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  DefaultBlocks$BlockBlock.prototype.eval_ojpytg$ = function (context_0, continuation_0, suspended) {
    var instance = new Coroutine$eval_ojpytg$(this, context_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  DefaultBlocks$BlockBlock.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlockBlock',
    interfaces: [Block]
  };
  DefaultBlocks$BlockBlock.prototype.component1 = function () {
    return this.name;
  };
  DefaultBlocks$BlockBlock.prototype.copy_61zpoe$ = function (name) {
    return new DefaultBlocks$BlockBlock(name === void 0 ? this.name : name);
  };
  DefaultBlocks$BlockBlock.prototype.toString = function () {
    return 'BlockBlock(name=' + Kotlin.toString(this.name) + ')';
  };
  DefaultBlocks$BlockBlock.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  DefaultBlocks$BlockBlock.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
  };
  function DefaultBlocks$BlockCapture(varname, content) {
    this.varname = varname;
    this.content = content;
  }
  function Coroutine$Template$EvalContext$capture$lambda$lambda(closure$out_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$out = closure$out_0;
    this.local$it = it_0;
  }
  Coroutine$Template$EvalContext$capture$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Template$EvalContext$capture$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Template$EvalContext$capture$lambda$lambda.prototype.constructor = Coroutine$Template$EvalContext$capture$lambda$lambda;
  Coroutine$Template$EvalContext$capture$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$out.v += this.local$it;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function Template$EvalContext$capture$lambda$lambda(closure$out_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$Template$EvalContext$capture$lambda$lambda(closure$out_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$eval_ojpytg$_0($this, context_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.$this = $this;
    this.local$out = void 0;
    this.local$old = void 0;
    this.local$context = context_0;
  }
  Coroutine$eval_ojpytg$_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$eval_ojpytg$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$eval_ojpytg$_0.prototype.constructor = Coroutine$eval_ojpytg$_0;
  Coroutine$eval_ojpytg$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$out = {v: ''};
            this.local$old = this.local$context.write;
            this.exceptionState_0 = 4;
            this.local$context.write = Template$EvalContext$capture$lambda$lambda(this.local$out);
            this.state_0 = 1;
            this.result_0 = this.$this.content.eval_ojpytg$(this.local$context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 6;
            this.finallyPath_0 = [2];
            this.state_0 = 5;
            continue;
          case 2:
            var result = this.local$out.v;
            this.state_0 = 3;
            this.result_0 = this.local$context.scope.set_oaftn8$(this.$this.varname, new RawString(result), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return;
          case 4:
            this.finallyPath_0 = [6];
            this.state_0 = 5;
            continue;
          case 5:
            this.exceptionState_0 = 6;
            this.local$context.write = this.local$old;
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 6:
            throw this.exception_0;
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 6) {
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
  DefaultBlocks$BlockCapture.prototype.eval_ojpytg$ = function (context_0, continuation_0, suspended) {
    var instance = new Coroutine$eval_ojpytg$_0(this, context_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  DefaultBlocks$BlockCapture.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlockCapture',
    interfaces: [Block]
  };
  DefaultBlocks$BlockCapture.prototype.component1 = function () {
    return this.varname;
  };
  DefaultBlocks$BlockCapture.prototype.component2 = function () {
    return this.content;
  };
  DefaultBlocks$BlockCapture.prototype.copy_x5ctsa$ = function (varname, content) {
    return new DefaultBlocks$BlockCapture(varname === void 0 ? this.varname : varname, content === void 0 ? this.content : content);
  };
  DefaultBlocks$BlockCapture.prototype.toString = function () {
    return 'BlockCapture(varname=' + Kotlin.toString(this.varname) + (', content=' + Kotlin.toString(this.content)) + ')';
  };
  DefaultBlocks$BlockCapture.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.varname) | 0;
    result = result * 31 + Kotlin.hashCode(this.content) | 0;
    return result;
  };
  DefaultBlocks$BlockCapture.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.varname, other.varname) && Kotlin.equals(this.content, other.content)))));
  };
  function DefaultBlocks$BlockDebug(expr) {
    this.expr = expr;
  }
  function Coroutine$eval_ojpytg$_1($this, context_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$context = context_0;
  }
  Coroutine$eval_ojpytg$_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$eval_ojpytg$_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$eval_ojpytg$_1.prototype.constructor = Coroutine$eval_ojpytg$_1;
  Coroutine$eval_ojpytg$_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = get_debugPrintln(this.local$context.config);
            this.state_0 = 2;
            this.result_0 = this.$this.expr.eval_ojpytg$(this.local$context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$(this.result_0);
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  DefaultBlocks$BlockDebug.prototype.eval_ojpytg$ = function (context_0, continuation_0, suspended) {
    var instance = new Coroutine$eval_ojpytg$_1(this, context_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  DefaultBlocks$BlockDebug.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlockDebug',
    interfaces: [Block]
  };
  DefaultBlocks$BlockDebug.prototype.component1 = function () {
    return this.expr;
  };
  DefaultBlocks$BlockDebug.prototype.copy_9zf2h0$ = function (expr) {
    return new DefaultBlocks$BlockDebug(expr === void 0 ? this.expr : expr);
  };
  DefaultBlocks$BlockDebug.prototype.toString = function () {
    return 'BlockDebug(expr=' + Kotlin.toString(this.expr) + ')';
  };
  DefaultBlocks$BlockDebug.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.expr) | 0;
    return result;
  };
  DefaultBlocks$BlockDebug.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.expr, other.expr))));
  };
  function DefaultBlocks$BlockExpr(expr) {
    this.expr = expr;
  }
  function Coroutine$eval_ojpytg$_2($this, context_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$context = context_0;
  }
  Coroutine$eval_ojpytg$_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$eval_ojpytg$_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$eval_ojpytg$_2.prototype.constructor = Coroutine$eval_ojpytg$_2;
  Coroutine$eval_ojpytg$_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$context.write;
            this.state_0 = 2;
            this.result_0 = this.$this.expr.eval_ojpytg$(this.local$context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$tmp$(toEscapedString(this.result_0), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  DefaultBlocks$BlockExpr.prototype.eval_ojpytg$ = function (context_0, continuation_0, suspended) {
    var instance = new Coroutine$eval_ojpytg$_2(this, context_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  DefaultBlocks$BlockExpr.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlockExpr',
    interfaces: [Block]
  };
  DefaultBlocks$BlockExpr.prototype.component1 = function () {
    return this.expr;
  };
  DefaultBlocks$BlockExpr.prototype.copy_9zf2h0$ = function (expr) {
    return new DefaultBlocks$BlockExpr(expr === void 0 ? this.expr : expr);
  };
  DefaultBlocks$BlockExpr.prototype.toString = function () {
    return 'BlockExpr(expr=' + Kotlin.toString(this.expr) + ')';
  };
  DefaultBlocks$BlockExpr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.expr) | 0;
    return result;
  };
  DefaultBlocks$BlockExpr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.expr, other.expr))));
  };
  function DefaultBlocks$BlockExtends(expr) {
    this.expr = expr;
  }
  function Coroutine$eval_ojpytg$_3($this, context_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$context = context_0;
  }
  Coroutine$eval_ojpytg$_3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$eval_ojpytg$_3.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$eval_ojpytg$_3.prototype.constructor = Coroutine$eval_ojpytg$_3;
  Coroutine$eval_ojpytg$_3.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.expr.eval_ojpytg$(this.local$context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var result = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$context.templates.getLayout_61zpoe$(this.$this.toDynamicString_mzud1t$(result), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var parentTemplate = new Template$TemplateEvalContext(this.result_0);
            this.local$context.currentTemplate.parent = parentTemplate;
            this.state_0 = 4;
            this.result_0 = parentTemplate.eval_ojpytg$(this.local$context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            throw new Template$StopEvaluatingException();
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  DefaultBlocks$BlockExtends.prototype.eval_ojpytg$ = function (context_0, continuation_0, suspended) {
    var instance = new Coroutine$eval_ojpytg$_3(this, context_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  DefaultBlocks$BlockExtends.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlockExtends',
    interfaces: [Block]
  };
  DefaultBlocks$BlockExtends.prototype.component1 = function () {
    return this.expr;
  };
  DefaultBlocks$BlockExtends.prototype.copy_9zf2h0$ = function (expr) {
    return new DefaultBlocks$BlockExtends(expr === void 0 ? this.expr : expr);
  };
  DefaultBlocks$BlockExtends.prototype.toString = function () {
    return 'BlockExtends(expr=' + Kotlin.toString(this.expr) + ')';
  };
  DefaultBlocks$BlockExtends.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.expr) | 0;
    return result;
  };
  DefaultBlocks$BlockExtends.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.expr, other.expr))));
  };
  function DefaultBlocks$BlockFor(varnames, expr, loop, elseNode) {
    this.varnames = varnames;
    this.expr = expr;
    this.loop = loop;
    this.elseNode = elseNode;
  }
  var HashMap_init_0 = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  function Coroutine$eval_ojpytg$_4($this, context_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 16;
    this.$this = $this;
    this.local$old = void 0;
    this.local$tmp$ = void 0;
    this.local$index = void 0;
    this.local$items = void 0;
    this.local$loopValue = void 0;
    this.local$v = void 0;
    this.local$context = context_0;
  }
  Coroutine$eval_ojpytg$_4.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$eval_ojpytg$_4.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$eval_ojpytg$_4.prototype.constructor = Coroutine$eval_ojpytg$_4;
  Coroutine$eval_ojpytg$_4.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$old = this.local$context.scope;
            this.exceptionState_0 = 14;
            this.local$context.scope = new Template$Scope(HashMap_init_0(), this.local$context.mapper, this.local$old);
            var tmp$;
            this.local$index = 0;
            this.state_0 = 1;
            this.result_0 = this.$this.expr.eval_ojpytg$(this.local$context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$items = this.$this.toDynamicList_mzud1t$(this.result_0);
            this.local$loopValue = HashMap_init_0();
            this.state_0 = 2;
            this.result_0 = this.local$context.scope.set_oaftn8$('loop', this.local$loopValue, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            var value = this.local$items.size;
            this.local$loopValue.put_xwzc9p$('length', value);
            this.local$tmp$ = this.local$items.iterator();
            this.state_0 = 3;
            continue;
          case 3:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 9;
              continue;
            }

            this.local$v = this.local$tmp$.next();
            if (Kotlin.isType(this.local$v, Pair) && this.$this.varnames.size >= 2) {
              this.state_0 = 5;
              this.result_0 = this.local$context.scope.set_oaftn8$(this.$this.varnames.get_za3lpa$(0), this.local$v.first, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 4;
              this.result_0 = this.local$context.scope.set_oaftn8$(this.$this.varnames.get_za3lpa$(0), this.local$v, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 4:
            this.state_0 = 7;
            continue;
          case 5:
            this.state_0 = 6;
            this.result_0 = this.local$context.scope.set_oaftn8$(this.$this.varnames.get_za3lpa$(1), this.local$v.second, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.state_0 = 7;
            continue;
          case 7:
            var value_0 = this.local$index + 1 | 0;
            this.local$loopValue.put_xwzc9p$('index', value_0);
            var value_1 = this.local$index;
            this.local$loopValue.put_xwzc9p$('index0', value_1);
            var key = 'revindex';
            var value_2 = this.local$items.size - this.local$index - 1 | 0;
            this.local$loopValue.put_xwzc9p$(key, value_2);
            var key_0 = 'revindex0';
            var value_3 = this.local$items.size - this.local$index | 0;
            this.local$loopValue.put_xwzc9p$(key_0, value_3);
            var value_4 = this.local$index === 0;
            this.local$loopValue.put_xwzc9p$('first', value_4);
            var value_5 = this.local$index === (this.local$items.size - 1 | 0);
            this.local$loopValue.put_xwzc9p$('last', value_5);
            this.state_0 = 8;
            this.result_0 = this.$this.loop.eval_ojpytg$(this.local$context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            this.local$index = this.local$index + 1 | 0;
            this.state_0 = 3;
            continue;
          case 9:
            if (this.local$index === 0) {
              if ((tmp$ = this.$this.elseNode) != null) {
                this.state_0 = 10;
                this.result_0 = tmp$.eval_ojpytg$(this.local$context, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
               else {
                this.result_0 = null;
                this.state_0 = 11;
                continue;
              }
            }
             else {
              this.state_0 = 12;
              continue;
            }

          case 10:
            this.result_0 = Unit;
            this.state_0 = 11;
            continue;
          case 11:
            this.state_0 = 12;
            continue;
          case 12:
            this.exceptionState_0 = 16;
            this.finallyPath_0 = [13];
            this.state_0 = 15;
            continue;
          case 13:
            return;
          case 14:
            this.finallyPath_0 = [16];
            this.state_0 = 15;
            continue;
          case 15:
            this.exceptionState_0 = 16;
            this.local$context.scope = this.local$old;
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 16:
            throw this.exception_0;
          default:this.state_0 = 16;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 16) {
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
  DefaultBlocks$BlockFor.prototype.eval_ojpytg$ = function (context_0, continuation_0, suspended) {
    var instance = new Coroutine$eval_ojpytg$_4(this, context_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  DefaultBlocks$BlockFor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlockFor',
    interfaces: [Block]
  };
  DefaultBlocks$BlockFor.prototype.component1 = function () {
    return this.varnames;
  };
  DefaultBlocks$BlockFor.prototype.component2 = function () {
    return this.expr;
  };
  DefaultBlocks$BlockFor.prototype.component3 = function () {
    return this.loop;
  };
  DefaultBlocks$BlockFor.prototype.component4 = function () {
    return this.elseNode;
  };
  DefaultBlocks$BlockFor.prototype.copy_4wadp8$ = function (varnames, expr, loop, elseNode) {
    return new DefaultBlocks$BlockFor(varnames === void 0 ? this.varnames : varnames, expr === void 0 ? this.expr : expr, loop === void 0 ? this.loop : loop, elseNode === void 0 ? this.elseNode : elseNode);
  };
  DefaultBlocks$BlockFor.prototype.toString = function () {
    return 'BlockFor(varnames=' + Kotlin.toString(this.varnames) + (', expr=' + Kotlin.toString(this.expr)) + (', loop=' + Kotlin.toString(this.loop)) + (', elseNode=' + Kotlin.toString(this.elseNode)) + ')';
  };
  DefaultBlocks$BlockFor.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.varnames) | 0;
    result = result * 31 + Kotlin.hashCode(this.expr) | 0;
    result = result * 31 + Kotlin.hashCode(this.loop) | 0;
    result = result * 31 + Kotlin.hashCode(this.elseNode) | 0;
    return result;
  };
  DefaultBlocks$BlockFor.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.varnames, other.varnames) && Kotlin.equals(this.expr, other.expr) && Kotlin.equals(this.loop, other.loop) && Kotlin.equals(this.elseNode, other.elseNode)))));
  };
  function DefaultBlocks$BlockGroup(children) {
    this.children = children;
  }
  function Coroutine$eval_ojpytg$_5($this, context_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$context = context_0;
  }
  Coroutine$eval_ojpytg$_5.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$eval_ojpytg$_5.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$eval_ojpytg$_5.prototype.constructor = Coroutine$eval_ojpytg$_5;
  Coroutine$eval_ojpytg$_5.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.$this.children.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 4;
              continue;
            }

            var n = this.local$tmp$.next();
            this.state_0 = 3;
            this.result_0 = n.eval_ojpytg$(this.local$context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 2;
            continue;
          case 4:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  DefaultBlocks$BlockGroup.prototype.eval_ojpytg$ = function (context_0, continuation_0, suspended) {
    var instance = new Coroutine$eval_ojpytg$_5(this, context_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  DefaultBlocks$BlockGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlockGroup',
    interfaces: [Block]
  };
  DefaultBlocks$BlockGroup.prototype.component1 = function () {
    return this.children;
  };
  DefaultBlocks$BlockGroup.prototype.copy_j18gkd$ = function (children) {
    return new DefaultBlocks$BlockGroup(children === void 0 ? this.children : children);
  };
  DefaultBlocks$BlockGroup.prototype.toString = function () {
    return 'BlockGroup(children=' + Kotlin.toString(this.children) + ')';
  };
  DefaultBlocks$BlockGroup.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.children) | 0;
    return result;
  };
  DefaultBlocks$BlockGroup.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.children, other.children))));
  };
  function DefaultBlocks$BlockIf(cond, trueContent, falseContent) {
    this.cond = cond;
    this.trueContent = trueContent;
    this.falseContent = falseContent;
  }
  function Coroutine$eval_ojpytg$_6($this, context_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$context = context_0;
  }
  Coroutine$eval_ojpytg$_6.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$eval_ojpytg$_6.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$eval_ojpytg$_6.prototype.constructor = Coroutine$eval_ojpytg$_6;
  Coroutine$eval_ojpytg$_6.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.$this.cond.eval_ojpytg$(this.local$context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.$this.toDynamicBool_mzud1t$(this.result_0)) {
              this.state_0 = 5;
              this.result_0 = this.$this.trueContent.eval_ojpytg$(this.local$context, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              if ((tmp$ = this.$this.falseContent) != null) {
                this.state_0 = 3;
                this.result_0 = tmp$.eval_ojpytg$(this.local$context, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
               else {
                this.result_0 = null;
                this.state_0 = 4;
                continue;
              }
            }

          case 3:
            this.result_0 = Unit;
            this.state_0 = 4;
            continue;
          case 4:
            this.state_0 = 6;
            continue;
          case 5:
            this.state_0 = 6;
            continue;
          case 6:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  DefaultBlocks$BlockIf.prototype.eval_ojpytg$ = function (context_0, continuation_0, suspended) {
    var instance = new Coroutine$eval_ojpytg$_6(this, context_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  DefaultBlocks$BlockIf.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlockIf',
    interfaces: [Block]
  };
  DefaultBlocks$BlockIf.prototype.component1 = function () {
    return this.cond;
  };
  DefaultBlocks$BlockIf.prototype.component2 = function () {
    return this.trueContent;
  };
  DefaultBlocks$BlockIf.prototype.component3 = function () {
    return this.falseContent;
  };
  DefaultBlocks$BlockIf.prototype.copy_fbtytf$ = function (cond, trueContent, falseContent) {
    return new DefaultBlocks$BlockIf(cond === void 0 ? this.cond : cond, trueContent === void 0 ? this.trueContent : trueContent, falseContent === void 0 ? this.falseContent : falseContent);
  };
  DefaultBlocks$BlockIf.prototype.toString = function () {
    return 'BlockIf(cond=' + Kotlin.toString(this.cond) + (', trueContent=' + Kotlin.toString(this.trueContent)) + (', falseContent=' + Kotlin.toString(this.falseContent)) + ')';
  };
  DefaultBlocks$BlockIf.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.cond) | 0;
    result = result * 31 + Kotlin.hashCode(this.trueContent) | 0;
    result = result * 31 + Kotlin.hashCode(this.falseContent) | 0;
    return result;
  };
  DefaultBlocks$BlockIf.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.cond, other.cond) && Kotlin.equals(this.trueContent, other.trueContent) && Kotlin.equals(this.falseContent, other.falseContent)))));
  };
  function DefaultBlocks$BlockImport(fileExpr, exportName) {
    this.fileExpr = fileExpr;
    this.exportName = exportName;
  }
  function Coroutine$eval_ojpytg$_7($this, context_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$context = context_0;
  }
  Coroutine$eval_ojpytg$_7.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$eval_ojpytg$_7.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$eval_ojpytg$_7.prototype.constructor = Coroutine$eval_ojpytg$_7;
  Coroutine$eval_ojpytg$_7.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$context.templates;
            this.state_0 = 2;
            this.result_0 = this.$this.fileExpr.eval_ojpytg$(this.local$context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$tmp$.getInclude_61zpoe$(toString(this.result_0), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = (new Template$TemplateEvalContext(this.result_0)).exec_6fip12$([], void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            var ctx = this.result_0.context;
            this.state_0 = 5;
            this.result_0 = this.local$context.scope.set_oaftn8$(this.$this.exportName, ctx.macros, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  DefaultBlocks$BlockImport.prototype.eval_ojpytg$ = function (context_0, continuation_0, suspended) {
    var instance = new Coroutine$eval_ojpytg$_7(this, context_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  DefaultBlocks$BlockImport.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlockImport',
    interfaces: [Block]
  };
  DefaultBlocks$BlockImport.prototype.component1 = function () {
    return this.fileExpr;
  };
  DefaultBlocks$BlockImport.prototype.component2 = function () {
    return this.exportName;
  };
  DefaultBlocks$BlockImport.prototype.copy_sypn0u$ = function (fileExpr, exportName) {
    return new DefaultBlocks$BlockImport(fileExpr === void 0 ? this.fileExpr : fileExpr, exportName === void 0 ? this.exportName : exportName);
  };
  DefaultBlocks$BlockImport.prototype.toString = function () {
    return 'BlockImport(fileExpr=' + Kotlin.toString(this.fileExpr) + (', exportName=' + Kotlin.toString(this.exportName)) + ')';
  };
  DefaultBlocks$BlockImport.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.fileExpr) | 0;
    result = result * 31 + Kotlin.hashCode(this.exportName) | 0;
    return result;
  };
  DefaultBlocks$BlockImport.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.fileExpr, other.fileExpr) && Kotlin.equals(this.exportName, other.exportName)))));
  };
  function DefaultBlocks$BlockInclude(fileNameExpr) {
    this.fileNameExpr = fileNameExpr;
  }
  function Coroutine$eval_ojpytg$_8($this, context_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$context = context_0;
  }
  Coroutine$eval_ojpytg$_8.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$eval_ojpytg$_8.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$eval_ojpytg$_8.prototype.constructor = Coroutine$eval_ojpytg$_8;
  Coroutine$eval_ojpytg$_8.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.fileNameExpr.eval_ojpytg$(this.local$context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var fileName = this.$this.toDynamicString_mzud1t$(this.result_0);
            this.state_0 = 3;
            this.result_0 = this.local$context.templates.getInclude_61zpoe$(fileName, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = (new Template$TemplateEvalContext(this.result_0)).eval_ojpytg$(this.local$context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  DefaultBlocks$BlockInclude.prototype.eval_ojpytg$ = function (context_0, continuation_0, suspended) {
    var instance = new Coroutine$eval_ojpytg$_8(this, context_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  DefaultBlocks$BlockInclude.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlockInclude',
    interfaces: [Block]
  };
  DefaultBlocks$BlockInclude.prototype.component1 = function () {
    return this.fileNameExpr;
  };
  DefaultBlocks$BlockInclude.prototype.copy_9zf2h0$ = function (fileNameExpr) {
    return new DefaultBlocks$BlockInclude(fileNameExpr === void 0 ? this.fileNameExpr : fileNameExpr);
  };
  DefaultBlocks$BlockInclude.prototype.toString = function () {
    return 'BlockInclude(fileNameExpr=' + Kotlin.toString(this.fileNameExpr) + ')';
  };
  DefaultBlocks$BlockInclude.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.fileNameExpr) | 0;
    return result;
  };
  DefaultBlocks$BlockInclude.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.fileNameExpr, other.fileNameExpr))));
  };
  function DefaultBlocks$BlockMacro(funcname, args, body) {
    this.funcname = funcname;
    this.args = args;
    this.body = body;
  }
  DefaultBlocks$BlockMacro.prototype.eval_ojpytg$ = function (context, continuation) {
    var $receiver = context.macros;
    var key = this.funcname;
    var value = new Template$Macro(this.funcname, this.args, this.body);
    $receiver.put_xwzc9p$(key, value);
  };
  DefaultBlocks$BlockMacro.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlockMacro',
    interfaces: [Block]
  };
  DefaultBlocks$BlockMacro.prototype.component1 = function () {
    return this.funcname;
  };
  DefaultBlocks$BlockMacro.prototype.component2 = function () {
    return this.args;
  };
  DefaultBlocks$BlockMacro.prototype.component3 = function () {
    return this.body;
  };
  DefaultBlocks$BlockMacro.prototype.copy_jqr4f$ = function (funcname, args, body) {
    return new DefaultBlocks$BlockMacro(funcname === void 0 ? this.funcname : funcname, args === void 0 ? this.args : args, body === void 0 ? this.body : body);
  };
  DefaultBlocks$BlockMacro.prototype.toString = function () {
    return 'BlockMacro(funcname=' + Kotlin.toString(this.funcname) + (', args=' + Kotlin.toString(this.args)) + (', body=' + Kotlin.toString(this.body)) + ')';
  };
  DefaultBlocks$BlockMacro.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.funcname) | 0;
    result = result * 31 + Kotlin.hashCode(this.args) | 0;
    result = result * 31 + Kotlin.hashCode(this.body) | 0;
    return result;
  };
  DefaultBlocks$BlockMacro.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.funcname, other.funcname) && Kotlin.equals(this.args, other.args) && Kotlin.equals(this.body, other.body)))));
  };
  function DefaultBlocks$BlockSet(varname, expr) {
    this.varname = varname;
    this.expr = expr;
  }
  function Coroutine$eval_ojpytg$_9($this, context_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$context = context_0;
  }
  Coroutine$eval_ojpytg$_9.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$eval_ojpytg$_9.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$eval_ojpytg$_9.prototype.constructor = Coroutine$eval_ojpytg$_9;
  Coroutine$eval_ojpytg$_9.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$_0 = this.local$context.scope;
            this.local$tmp$ = this.$this.varname;
            this.state_0 = 2;
            this.result_0 = this.$this.expr.eval_ojpytg$(this.local$context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$tmp$_0.set_oaftn8$(this.local$tmp$, this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  DefaultBlocks$BlockSet.prototype.eval_ojpytg$ = function (context_0, continuation_0, suspended) {
    var instance = new Coroutine$eval_ojpytg$_9(this, context_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  DefaultBlocks$BlockSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlockSet',
    interfaces: [Block]
  };
  DefaultBlocks$BlockSet.prototype.component1 = function () {
    return this.varname;
  };
  DefaultBlocks$BlockSet.prototype.component2 = function () {
    return this.expr;
  };
  DefaultBlocks$BlockSet.prototype.copy_dn0hiq$ = function (varname, expr) {
    return new DefaultBlocks$BlockSet(varname === void 0 ? this.varname : varname, expr === void 0 ? this.expr : expr);
  };
  DefaultBlocks$BlockSet.prototype.toString = function () {
    return 'BlockSet(varname=' + Kotlin.toString(this.varname) + (', expr=' + Kotlin.toString(this.expr)) + ')';
  };
  DefaultBlocks$BlockSet.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.varname) | 0;
    result = result * 31 + Kotlin.hashCode(this.expr) | 0;
    return result;
  };
  DefaultBlocks$BlockSet.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.varname, other.varname) && Kotlin.equals(this.expr, other.expr)))));
  };
  function DefaultBlocks$BlockText(content) {
    this.content = content;
  }
  function Coroutine$eval_ojpytg$_10($this, context_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$context = context_0;
  }
  Coroutine$eval_ojpytg$_10.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$eval_ojpytg$_10.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$eval_ojpytg$_10.prototype.constructor = Coroutine$eval_ojpytg$_10;
  Coroutine$eval_ojpytg$_10.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$context.write(this.$this.content, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  DefaultBlocks$BlockText.prototype.eval_ojpytg$ = function (context_0, continuation_0, suspended) {
    var instance = new Coroutine$eval_ojpytg$_10(this, context_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  DefaultBlocks$BlockText.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlockText',
    interfaces: [Block]
  };
  DefaultBlocks$BlockText.prototype.component1 = function () {
    return this.content;
  };
  DefaultBlocks$BlockText.prototype.copy_61zpoe$ = function (content) {
    return new DefaultBlocks$BlockText(content === void 0 ? this.content : content);
  };
  DefaultBlocks$BlockText.prototype.toString = function () {
    return 'BlockText(content=' + Kotlin.toString(this.content) + ')';
  };
  DefaultBlocks$BlockText.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.content) | 0;
    return result;
  };
  DefaultBlocks$BlockText.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.content, other.content))));
  };
  DefaultBlocks.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DefaultBlocks',
    interfaces: []
  };
  var DefaultBlocks_instance = null;
  function DefaultBlocks_getInstance() {
    if (DefaultBlocks_instance === null) {
      new DefaultBlocks();
    }
    return DefaultBlocks_instance;
  }
  function DefaultFilters() {
    DefaultFilters_instance = this;
    this.Capitalize = new Filter('capitalize', DefaultFilters$Capitalize$lambda);
    this.Join = new Filter('join', DefaultFilters$Join$lambda);
    this.Length = new Filter('length', DefaultFilters$Length$lambda);
    this.Lower = new Filter('lower', DefaultFilters$Lower$lambda);
    this.Quote = new Filter('quote', DefaultFilters$Quote$lambda);
    this.Raw = new Filter('raw', DefaultFilters$Raw$lambda);
    this.Reverse = new Filter('reverse', DefaultFilters$Reverse$lambda);
    this.Slice = new Filter('slice', DefaultFilters$Slice$lambda);
    this.Sort = new Filter('sort', DefaultFilters$Sort$lambda);
    this.Trim = new Filter('trim', DefaultFilters$Trim$lambda);
    this.Upper = new Filter('upper', DefaultFilters$Upper$lambda);
    this.Merge = new Filter('merge', DefaultFilters$Merge$lambda);
    this.JsonEncode = new Filter('json_encode', DefaultFilters$JsonEncode$lambda);
    this.Format = new Filter('format', DefaultFilters$Format$lambda);
    this.Chunked = new Filter('chunked', DefaultFilters$Chunked$lambda);
    this.ALL = listOf_0([this.Capitalize, this.Join, this.Length, this.Lower, this.Quote, this.Raw, this.Reverse, this.Slice, this.Sort, this.Trim, this.Upper, this.Merge, this.JsonEncode, this.Format, this.Chunked]);
  }
  function Coroutine$DefaultFilters$Capitalize$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DefaultFilters$Capitalize$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DefaultFilters$Capitalize$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DefaultFilters$Capitalize$lambda.prototype.constructor = Coroutine$DefaultFilters$Capitalize$lambda;
  Coroutine$DefaultFilters$Capitalize$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return capitalize(this.local$$receiver.toDynamicString_mzud1t$(this.local$$receiver.subject).toLowerCase());
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function DefaultFilters$Capitalize$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$DefaultFilters$Capitalize$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function DefaultFilters$Join$lambda$lambda(this$) {
    return function (it) {
      return this$.toDynamicString_mzud1t$(it);
    };
  }
  function Coroutine$DefaultFilters$Join$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DefaultFilters$Join$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DefaultFilters$Join$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DefaultFilters$Join$lambda.prototype.constructor = Coroutine$DefaultFilters$Join$lambda;
  Coroutine$DefaultFilters$Join$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return joinToString(this.local$$receiver.toDynamicList_mzud1t$(this.local$$receiver.subject), this.local$$receiver.toDynamicString_mzud1t$(this.local$$receiver.args.get_za3lpa$(0)), void 0, void 0, void 0, void 0, DefaultFilters$Join$lambda$lambda(this.local$$receiver));
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function DefaultFilters$Join$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$DefaultFilters$Join$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$DefaultFilters$Length$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DefaultFilters$Length$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DefaultFilters$Length$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DefaultFilters$Length$lambda.prototype.constructor = Coroutine$DefaultFilters$Length$lambda;
  Coroutine$DefaultFilters$Length$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$$receiver.dynamicLength_mzud1t$(this.local$$receiver.subject);
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function DefaultFilters$Length$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$DefaultFilters$Length$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$DefaultFilters$Lower$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DefaultFilters$Lower$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DefaultFilters$Lower$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DefaultFilters$Lower$lambda.prototype.constructor = Coroutine$DefaultFilters$Lower$lambda;
  Coroutine$DefaultFilters$Lower$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$$receiver.toDynamicString_mzud1t$(this.local$$receiver.subject).toLowerCase();
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function DefaultFilters$Lower$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$DefaultFilters$Lower$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$DefaultFilters$Quote$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DefaultFilters$Quote$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DefaultFilters$Quote$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DefaultFilters$Quote$lambda.prototype.constructor = Coroutine$DefaultFilters$Quote$lambda;
  Coroutine$DefaultFilters$Quote$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return quote(this.local$$receiver.toDynamicString_mzud1t$(this.local$$receiver.subject));
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function DefaultFilters$Quote$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$DefaultFilters$Quote$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$DefaultFilters$Raw$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DefaultFilters$Raw$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DefaultFilters$Raw$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DefaultFilters$Raw$lambda.prototype.constructor = Coroutine$DefaultFilters$Raw$lambda;
  Coroutine$DefaultFilters$Raw$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new RawString(this.local$$receiver.toDynamicString_mzud1t$(this.local$$receiver.subject));
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function DefaultFilters$Raw$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$DefaultFilters$Raw$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  var reversed_0 = Kotlin.kotlin.text.reversed_gw00vp$;
  function Coroutine$DefaultFilters$Reverse$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DefaultFilters$Reverse$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DefaultFilters$Reverse$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DefaultFilters$Reverse$lambda.prototype.constructor = Coroutine$DefaultFilters$Reverse$lambda;
  Coroutine$DefaultFilters$Reverse$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1;
            var tmp$_2;
            if ((tmp$_0 = typeof (tmp$ = this.local$$receiver.subject) === 'string' ? tmp$ : null) != null) {
              var tmp$_3;
              tmp$_2 = reversed_0(Kotlin.isCharSequence(tmp$_3 = tmp$_0) ? tmp$_3 : throwCCE()).toString();
            }
             else
              tmp$_2 = null;
            return (tmp$_1 = tmp$_2) != null ? tmp$_1 : reversed(this.local$$receiver.toDynamicList_mzud1t$(this.local$$receiver.subject));
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function DefaultFilters$Reverse$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$DefaultFilters$Reverse$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$DefaultFilters$Slice$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DefaultFilters$Slice$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DefaultFilters$Slice$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DefaultFilters$Slice$lambda.prototype.constructor = Coroutine$DefaultFilters$Slice$lambda;
  Coroutine$DefaultFilters$Slice$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            var lengthArg = getOrNull(this.local$$receiver.args, 1);
            var start = this.local$$receiver.toDynamicInt_mzud1t$(getOrNull(this.local$$receiver.args, 0));
            var length = (tmp$ = lengthArg != null ? this.local$$receiver.toDynamicInt_mzud1t$(lengthArg) : null) != null ? tmp$ : this.local$$receiver.dynamicLength_mzud1t$(this.local$$receiver.subject);
            if (typeof this.local$$receiver.subject === 'string') {
              var str = this.local$$receiver.toDynamicString_mzud1t$(this.local$$receiver.subject);
              return slice_0(str, until(clamp(start, 0, str.length), clamp(start + length | 0, 0, str.length)));
            }
             else {
              var list = this.local$$receiver.toDynamicList_mzud1t$(this.local$$receiver.subject);
              return slice(list, until(clamp(start, 0, list.size), clamp(start + length | 0, 0, list.size)));
            }

          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function DefaultFilters$Slice$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$DefaultFilters$Slice$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function DefaultFilters$Sort$lambda$lambda(this$) {
    return function (it) {
      return this$.toDynamicString_mzud1t$(it);
    };
  }
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  var Comparator = Kotlin.kotlin.Comparator;
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  function Coroutine$DefaultFilters$Sort$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DefaultFilters$Sort$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DefaultFilters$Sort$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DefaultFilters$Sort$lambda.prototype.constructor = Coroutine$DefaultFilters$Sort$lambda;
  Coroutine$DefaultFilters$Sort$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return sortedWith(this.local$$receiver.toDynamicList_mzud1t$(this.local$$receiver.subject), new Comparator$ObjectLiteral(compareBy$lambda(DefaultFilters$Sort$lambda$lambda(this.local$$receiver))));
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function DefaultFilters$Sort$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$DefaultFilters$Sort$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  function Coroutine$DefaultFilters$Trim$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DefaultFilters$Trim$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DefaultFilters$Trim$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DefaultFilters$Trim$lambda.prototype.constructor = Coroutine$DefaultFilters$Trim$lambda;
  Coroutine$DefaultFilters$Trim$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = this.local$$receiver.toDynamicString_mzud1t$(this.local$$receiver.subject);
            var tmp$;
            return trim(Kotlin.isCharSequence(tmp$ = $receiver) ? tmp$ : throwCCE()).toString();
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function DefaultFilters$Trim$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$DefaultFilters$Trim$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$DefaultFilters$Upper$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DefaultFilters$Upper$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DefaultFilters$Upper$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DefaultFilters$Upper$lambda.prototype.constructor = Coroutine$DefaultFilters$Upper$lambda;
  Coroutine$DefaultFilters$Upper$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$$receiver.toDynamicString_mzud1t$(this.local$$receiver.subject).toUpperCase();
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function DefaultFilters$Upper$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$DefaultFilters$Upper$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$DefaultFilters$Merge$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DefaultFilters$Merge$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DefaultFilters$Merge$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DefaultFilters$Merge$lambda.prototype.constructor = Coroutine$DefaultFilters$Merge$lambda;
  Coroutine$DefaultFilters$Merge$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var arg = getOrNull(this.local$$receiver.args, 0);
            return plus(this.local$$receiver.toDynamicList_mzud1t$(this.local$$receiver.subject), this.local$$receiver.toDynamicList_mzud1t$(arg));
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function DefaultFilters$Merge$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$DefaultFilters$Merge$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$DefaultFilters$JsonEncode$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DefaultFilters$JsonEncode$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DefaultFilters$JsonEncode$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DefaultFilters$JsonEncode$lambda.prototype.constructor = Coroutine$DefaultFilters$JsonEncode$lambda;
  Coroutine$DefaultFilters$JsonEncode$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return json.Json.stringify_oud20p$(this.local$$receiver.subject);
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function DefaultFilters$JsonEncode$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$DefaultFilters$JsonEncode$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  function Coroutine$DefaultFilters$Format$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DefaultFilters$Format$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DefaultFilters$Format$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DefaultFilters$Format$lambda.prototype.constructor = Coroutine$DefaultFilters$Format$lambda;
  Coroutine$DefaultFilters$Format$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            return format(this.local$$receiver.toDynamicString_mzud1t$(this.local$$receiver.subject), (Kotlin.isArray(tmp$ = copyToArray(this.local$$receiver.args)) ? tmp$ : throwCCE()).slice());
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function DefaultFilters$Format$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$DefaultFilters$Format$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$DefaultFilters$Chunked$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DefaultFilters$Chunked$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DefaultFilters$Chunked$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DefaultFilters$Chunked$lambda.prototype.constructor = Coroutine$DefaultFilters$Chunked$lambda;
  Coroutine$DefaultFilters$Chunked$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return chunked(this.local$$receiver.toDynamicList_mzud1t$(this.local$$receiver.subject), this.local$$receiver.toDynamicInt_mzud1t$(this.local$$receiver.args.get_za3lpa$(0)));
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function DefaultFilters$Chunked$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$DefaultFilters$Chunked$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  DefaultFilters.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DefaultFilters',
    interfaces: []
  };
  var DefaultFilters_instance = null;
  function DefaultFilters_getInstance() {
    if (DefaultFilters_instance === null) {
      new DefaultFilters();
    }
    return DefaultFilters_instance;
  }
  function DefaultFunctions() {
    DefaultFunctions_instance = this;
    this.Cycle = new TeFunction('cycle', DefaultFunctions$Cycle$lambda);
    this.Range = new TeFunction('range', DefaultFunctions$Range$lambda);
    this.Parent = new TeFunction('parent', DefaultFunctions$Parent$lambda);
    this.ALL = listOf_0([this.Cycle, this.Range, this.Parent]);
  }
  function Coroutine$DefaultFunctions$Cycle$lambda($receiver_0, args_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$args = args_0;
  }
  Coroutine$DefaultFunctions$Cycle$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DefaultFunctions$Cycle$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DefaultFunctions$Cycle$lambda.prototype.constructor = Coroutine$DefaultFunctions$Cycle$lambda;
  Coroutine$DefaultFunctions$Cycle$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var list = this.local$$receiver.toDynamicList_mzud1t$(getOrNull(this.local$args, 0));
            var index = this.local$$receiver.toDynamicInt_mzud1t$(getOrNull(this.local$args, 1));
            return list.get_za3lpa$(umod(index, list.size));
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function DefaultFunctions$Cycle$lambda($receiver_0, args_0, continuation_0, suspended) {
    var instance = new Coroutine$DefaultFunctions$Cycle$lambda($receiver_0, args_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  function Coroutine$DefaultFunctions$Range$lambda($receiver_0, args_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$args = args_0;
  }
  Coroutine$DefaultFunctions$Range$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DefaultFunctions$Range$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DefaultFunctions$Range$lambda.prototype.constructor = Coroutine$DefaultFunctions$Range$lambda;
  Coroutine$DefaultFunctions$Range$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            var left = getOrNull(this.local$args, 0);
            var right = getOrNull(this.local$args, 1);
            var step_0 = this.local$$receiver.toDynamicInt_mzud1t$((tmp$ = getOrNull(this.local$args, 2)) != null ? tmp$ : 1);
            if (Kotlin.isNumber(left) || Kotlin.isNumber(right)) {
              var l = this.local$$receiver.toDynamicInt_mzud1t$(left);
              var r = this.local$$receiver.toDynamicInt_mzud1t$(right);
              return toList(step(new IntRange(l, r), step_0));
            }
             else {
              throw new NotImplementedError_init('An operation is not implemented: ' + ("Unsupported '" + toString(left) + "'/'" + toString(right) + "' for ranges"));
            }

          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function DefaultFunctions$Range$lambda($receiver_0, args_0, continuation_0, suspended) {
    var instance = new Coroutine$DefaultFunctions$Range$lambda($receiver_0, args_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$Template$EvalContext$capture$lambda$lambda_0(closure$out_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$out = closure$out_0;
    this.local$it = it_0;
  }
  Coroutine$Template$EvalContext$capture$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Template$EvalContext$capture$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Template$EvalContext$capture$lambda$lambda_0.prototype.constructor = Coroutine$Template$EvalContext$capture$lambda$lambda_0;
  Coroutine$Template$EvalContext$capture$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$out.v += this.local$it;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function Template$EvalContext$capture$lambda$lambda_0(closure$out_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$Template$EvalContext$capture$lambda$lambda_0(closure$out_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$DefaultFunctions$Parent$lambda($receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 7;
    this.local$out = void 0;
    this.local$old = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DefaultFunctions$Parent$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DefaultFunctions$Parent$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DefaultFunctions$Parent$lambda.prototype.constructor = Coroutine$DefaultFunctions$Parent$lambda;
  Coroutine$DefaultFunctions$Parent$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            var blockName = (tmp$ = this.local$$receiver.currentBlock) != null ? tmp$.name : null;
            if (blockName != null) {
              this.local$out = {v: ''};
              this.local$old = this.local$$receiver.write;
              this.exceptionState_0 = 5;
              this.local$$receiver.write = Template$EvalContext$capture$lambda$lambda_0(this.local$out);
              var tmp$_0, tmp$_1;
              if ((tmp$_1 = (tmp$_0 = this.local$$receiver.currentBlock) != null ? tmp$_0.parent : null) != null) {
                this.state_0 = 1;
                this.result_0 = tmp$_1.eval_ojpytg$(this.local$$receiver, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
               else {
                this.result_0 = null;
                this.state_0 = 2;
                continue;
              }
            }
             else {
              return '';
            }

          case 1:
            this.result_0 = Unit;
            this.state_0 = 2;
            continue;
          case 2:
            this.exceptionState_0 = 7;
            this.finallyPath_0 = [3];
            this.state_0 = 6;
            continue;
          case 3:
            return new RawString(this.local$out.v);
          case 4:
            return;
          case 5:
            this.finallyPath_0 = [7];
            this.state_0 = 6;
            continue;
          case 6:
            this.exceptionState_0 = 7;
            this.local$$receiver.write = this.local$old;
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 7:
            throw this.exception_0;
          default:this.state_0 = 7;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 7) {
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
  function DefaultFunctions$Parent$lambda($receiver_0, it_0, continuation_0, suspended) {
    var instance = new Coroutine$DefaultFunctions$Parent$lambda($receiver_0, it_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  DefaultFunctions.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DefaultFunctions',
    interfaces: []
  };
  var DefaultFunctions_instance = null;
  function DefaultFunctions_getInstance() {
    if (DefaultFunctions_instance === null) {
      new DefaultFunctions();
    }
    return DefaultFunctions_instance;
  }
  function DefaultTags() {
    DefaultTags_instance = this;
    this.BlockTag = new Tag('block', emptySet(), setOf(['end', 'endblock']), void 0, DefaultTags$BlockTag$lambda);
    this.Capture = new Tag('capture', emptySet(), null, void 0, DefaultTags$Capture$lambda);
    this.Debug = new Tag('debug', emptySet(), null, void 0, DefaultTags$Debug$lambda);
    this.Empty = new Tag('', setOf_0(''), null, void 0, DefaultTags$Empty$lambda);
    this.Extends = new Tag('extends', emptySet(), null, void 0, DefaultTags$Extends$lambda);
    this.For = new Tag('for', setOf_0('else'), setOf(['end', 'endfor']), void 0, DefaultTags$For$lambda);
    this.If = new Tag('if', setOf(['else', 'elseif']), setOf(['end', 'endif']), void 0, DefaultTags$If$lambda);
    this.Import = new Tag('import', emptySet(), null, void 0, DefaultTags$Import$lambda);
    this.Include = new Tag('include', emptySet(), null, void 0, DefaultTags$Include$lambda);
    this.Macro = new Tag('macro', emptySet(), setOf(['end', 'endmacro']), void 0, DefaultTags$Macro$lambda);
    this.Set = new Tag('set', emptySet(), null, void 0, DefaultTags$Set$lambda);
    this.Switch = new Tag('switch', setOf(['case', 'default']), setOf_0('endswitch'), void 0, DefaultTags$Switch$lambda);
    this.ALL = listOf_0([this.BlockTag, this.Capture, this.Debug, this.Empty, this.Extends, this.For, this.If, this.Switch, this.Import, this.Include, this.Macro, this.Set]);
  }
  function Coroutine$DefaultTags$BlockTag$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DefaultTags$BlockTag$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DefaultTags$BlockTag$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DefaultTags$BlockTag$lambda.prototype.constructor = Coroutine$DefaultTags$BlockTag$lambda;
  Coroutine$DefaultTags$BlockTag$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var part = first(this.local$$receiver.chunks);
            var tokens = ExprNode$Token$Companion_getInstance().tokenize_61zpoe$(part.tag.content);
            var name = ExprNode$Companion_getInstance().parseId_lbidoo$(tokens);
            if (name.length === 0)
              throw IllegalArgumentException_init('block without name');
            this.local$$receiver.context.template.addBlock_x5ctsa$(name, part.body);
            return new DefaultBlocks$BlockBlock(name);
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function DefaultTags$BlockTag$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$DefaultTags$BlockTag$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$DefaultTags$Capture$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DefaultTags$Capture$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DefaultTags$Capture$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DefaultTags$Capture$lambda.prototype.constructor = Coroutine$DefaultTags$Capture$lambda;
  Coroutine$DefaultTags$Capture$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var main = this.local$$receiver.chunks.get_za3lpa$(0);
            var tr = ExprNode$Token$Companion_getInstance().tokenize_61zpoe$(main.tag.content);
            var varname = ExprNode$Companion_getInstance().parseId_lbidoo$(tr);
            return new DefaultBlocks$BlockCapture(varname, main.body);
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function DefaultTags$Capture$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$DefaultTags$Capture$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$DefaultTags$Debug$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DefaultTags$Debug$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DefaultTags$Debug$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DefaultTags$Debug$lambda.prototype.constructor = Coroutine$DefaultTags$Debug$lambda;
  Coroutine$DefaultTags$Debug$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new DefaultBlocks$BlockDebug(ExprNode$Companion_getInstance().parse_61zpoe$(this.local$$receiver.chunks.get_za3lpa$(0).tag.content));
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function DefaultTags$Debug$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$DefaultTags$Debug$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function Coroutine$DefaultTags$Empty$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DefaultTags$Empty$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DefaultTags$Empty$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DefaultTags$Empty$lambda.prototype.constructor = Coroutine$DefaultTags$Empty$lambda;
  Coroutine$DefaultTags$Empty$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$ = Block$Companion_getInstance();
            var $receiver = this.local$$receiver.chunks;
            var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
            var tmp$_0;
            tmp$_0 = $receiver.iterator();
            while (tmp$_0.hasNext()) {
              var item = tmp$_0.next();
              destination.add_11rb$(item.body);
            }

            return tmp$.group_j18gkd$(destination);
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function DefaultTags$Empty$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$DefaultTags$Empty$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$DefaultTags$Extends$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DefaultTags$Extends$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DefaultTags$Extends$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DefaultTags$Extends$lambda.prototype.constructor = Coroutine$DefaultTags$Extends$lambda;
  Coroutine$DefaultTags$Extends$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var part = first(this.local$$receiver.chunks);
            var parent = ExprNode$Companion_getInstance().parseExpr_lbidoo$(ExprNode$Token$Companion_getInstance().tokenize_61zpoe$(part.tag.content));
            return new DefaultBlocks$BlockExtends(parent);
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function DefaultTags$Extends$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$DefaultTags$Extends$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$DefaultTags$For$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DefaultTags$For$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DefaultTags$For$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DefaultTags$For$lambda.prototype.constructor = Coroutine$DefaultTags$For$lambda;
  Coroutine$DefaultTags$For$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            var main = this.local$$receiver.chunks.get_za3lpa$(0);
            var elseTag = (tmp$ = getOrNull(this.local$$receiver.chunks, 1)) != null ? tmp$.body : null;
            var tr = ExprNode$Token$Companion_getInstance().tokenize_61zpoe$(main.tag.content);
            var varnames = ArrayList_init();
            do {
              var element = ExprNode$Companion_getInstance().parseId_lbidoo$(tr);
              varnames.add_11rb$(element);
            }
             while (tryRead(tr, [',']) != null);
            ExprNode$Companion_getInstance().expect_59qugx$(tr, ['in']);
            var expr = ExprNode$Companion_getInstance().parseExpr_lbidoo$(tr);
            return new DefaultBlocks$BlockFor(varnames, expr, main.body, elseTag);
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function DefaultTags$For$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$DefaultTags$For$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$DefaultTags$If$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DefaultTags$If$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DefaultTags$If$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DefaultTags$If$lambda.prototype.constructor = Coroutine$DefaultTags$If$lambda;
  Coroutine$DefaultTags$If$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            var ifBranches = ArrayList_init();
            var elseBranch = null;
            tmp$ = this.local$$receiver.chunks.iterator();
            while (tmp$.hasNext()) {
              var part = tmp$.next();
              switch (part.tag.name) {
                case 'if':
                case 'elseif':
                  var element = to(ExprNode$Companion_getInstance().parse_61zpoe$(part.tag.content), part.body);
                  ifBranches.add_11rb$(element);
                  break;
                case 'else':
                  elseBranch = part.body;
                  break;
              }
            }

            var ifBranchesRev = reversed(ifBranches);
            var node = new DefaultBlocks$BlockIf(first(ifBranchesRev).first, first(ifBranchesRev).second, elseBranch);
            tmp$_0 = takeLast(ifBranchesRev, ifBranchesRev.size - 1 | 0).iterator();
            while (tmp$_0.hasNext()) {
              var branch = tmp$_0.next();
              node = new DefaultBlocks$BlockIf(branch.first, branch.second, node);
            }

            return node;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function DefaultTags$If$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$DefaultTags$If$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$DefaultTags$Import$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DefaultTags$Import$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DefaultTags$Import$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DefaultTags$Import$lambda.prototype.constructor = Coroutine$DefaultTags$Import$lambda;
  Coroutine$DefaultTags$Import$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var part = first(this.local$$receiver.chunks);
            var s = ExprNode$Token$Companion_getInstance().tokenize_61zpoe$(part.tag.content);
            var file = parseExpr(s);
            expect(s, ['as']);
            var name = s.read().text;
            return new DefaultBlocks$BlockImport(file, name);
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function DefaultTags$Import$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$DefaultTags$Import$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$DefaultTags$Include$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DefaultTags$Include$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DefaultTags$Include$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DefaultTags$Include$lambda.prototype.constructor = Coroutine$DefaultTags$Include$lambda;
  Coroutine$DefaultTags$Include$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var part = first(this.local$$receiver.chunks);
            var fileName = ExprNode$Companion_getInstance().parseExpr_lbidoo$(part.tag.tokens);
            return new DefaultBlocks$BlockInclude(fileName);
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function DefaultTags$Include$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$DefaultTags$Include$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$DefaultTags$Macro$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DefaultTags$Macro$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DefaultTags$Macro$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DefaultTags$Macro$lambda.prototype.constructor = Coroutine$DefaultTags$Macro$lambda;
  Coroutine$DefaultTags$Macro$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var part = this.local$$receiver.chunks.get_za3lpa$(0);
            var s = ExprNode$Token$Companion_getInstance().tokenize_61zpoe$(part.tag.content);
            var funcname = parseId(s);
            expect(s, ['(']);
            var params = parseIdList(s);
            expect(s, [')']);
            return new DefaultBlocks$BlockMacro(funcname, params, part.body);
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function DefaultTags$Macro$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$DefaultTags$Macro$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$DefaultTags$Set$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DefaultTags$Set$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DefaultTags$Set$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DefaultTags$Set$lambda.prototype.constructor = Coroutine$DefaultTags$Set$lambda;
  Coroutine$DefaultTags$Set$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var main = this.local$$receiver.chunks.get_za3lpa$(0);
            var tr = ExprNode$Token$Companion_getInstance().tokenize_61zpoe$(main.tag.content);
            var varname = ExprNode$Companion_getInstance().parseId_lbidoo$(tr);
            ExprNode$Companion_getInstance().expect_59qugx$(tr, ['=']);
            var expr = ExprNode$Companion_getInstance().parseExpr_lbidoo$(tr);
            return new DefaultBlocks$BlockSet(varname, expr);
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function DefaultTags$Set$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$DefaultTags$Set$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function DefaultTags$Switch$lambda$ObjectLiteral(closure$subject, closure$cases, closure$defaultCase) {
    this.closure$subject = closure$subject;
    this.closure$cases = closure$cases;
    this.closure$defaultCase = closure$defaultCase;
  }
  function Coroutine$eval_ojpytg$_11($this, context_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$subjectValue = void 0;
    this.local$block = void 0;
    this.local$context = context_0;
  }
  Coroutine$eval_ojpytg$_11.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$eval_ojpytg$_11.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$eval_ojpytg$_11.prototype.constructor = Coroutine$eval_ojpytg$_11;
  Coroutine$eval_ojpytg$_11.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.$this.closure$subject.v.eval_ojpytg$(this.local$context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$subjectValue = this.result_0;
            this.local$tmp$ = this.$this.closure$cases.iterator();
            this.state_0 = 3;
            continue;
          case 3:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 7;
              continue;
            }

            var tmp$_0 = this.local$tmp$.next();
            var case_0 = tmp$_0.component1();
            this.local$case = tmp$_0.component1(), this.local$block = tmp$_0.component2();
            this.state_0 = 4;
            this.result_0 = case_0.eval_ojpytg$(this.local$context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            if (equals(this.local$subjectValue, this.result_0)) {
              this.state_0 = 5;
              this.result_0 = this.local$block.eval_ojpytg$(this.local$context, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 6;
              continue;
            }

          case 5:
            return;
          case 6:
            this.state_0 = 3;
            continue;
          case 7:
            if ((tmp$ = this.$this.closure$defaultCase.v) != null) {
              this.state_0 = 8;
              this.result_0 = tmp$.eval_ojpytg$(this.local$context, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.result_0 = null;
              this.state_0 = 9;
              continue;
            }

          case 8:
            this.result_0 = Unit;
            this.state_0 = 9;
            continue;
          case 9:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  DefaultTags$Switch$lambda$ObjectLiteral.prototype.eval_ojpytg$ = function (context_0, continuation_0, suspended) {
    var instance = new Coroutine$eval_ojpytg$_11(this, context_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  DefaultTags$Switch$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Block]
  };
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  function Coroutine$DefaultTags$Switch$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$DefaultTags$Switch$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DefaultTags$Switch$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DefaultTags$Switch$lambda.prototype.constructor = Coroutine$DefaultTags$Switch$lambda;
  Coroutine$DefaultTags$Switch$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            var subject = {v: null};
            var cases = ArrayList_init();
            var defaultCase = {v: null};
            tmp$ = this.local$$receiver.chunks.iterator();
            while (tmp$.hasNext()) {
              var part = tmp$.next();
              var tagContent = part.tag.content;
              var body = part.body;
              switch (part.tag.name) {
                case 'switch':
                  subject.v = ExprNode$Companion_getInstance().parse_61zpoe$(tagContent);
                  break;
                case 'case':
                  var element = to(ExprNode$Companion_getInstance().parse_61zpoe$(tagContent), body);
                  cases.add_11rb$(element);
                  break;
                case 'default':
                  defaultCase.v = body;
                  break;
              }
            }

            if (subject.v == null) {
              throw IllegalStateException_init('No subject set in switch'.toString());
            }

            return new DefaultTags$Switch$lambda$ObjectLiteral(subject, cases, defaultCase);
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function DefaultTags$Switch$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$DefaultTags$Switch$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  DefaultTags.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DefaultTags',
    interfaces: []
  };
  var DefaultTags_instance = null;
  function DefaultTags_getInstance() {
    if (DefaultTags_instance === null) {
      new DefaultTags();
    }
    return DefaultTags_instance;
  }
  function ExprNode() {
    ExprNode$Companion_getInstance();
  }
  function ExprNode$VAR(name) {
    this.name = name;
  }
  ExprNode$VAR.prototype.eval_ojpytg$ = function (context, continuation) {
    return context.scope.get_s8jyv4$(this.name, continuation);
  };
  ExprNode$VAR.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VAR',
    interfaces: [ExprNode]
  };
  ExprNode$VAR.prototype.component1 = function () {
    return this.name;
  };
  ExprNode$VAR.prototype.copy_61zpoe$ = function (name) {
    return new ExprNode$VAR(name === void 0 ? this.name : name);
  };
  ExprNode$VAR.prototype.toString = function () {
    return 'VAR(name=' + Kotlin.toString(this.name) + ')';
  };
  ExprNode$VAR.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  ExprNode$VAR.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
  };
  function ExprNode$LIT(value) {
    this.value = value;
  }
  ExprNode$LIT.prototype.eval_ojpytg$ = function (context, continuation) {
    return this.value;
  };
  ExprNode$LIT.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LIT',
    interfaces: [ExprNode]
  };
  ExprNode$LIT.prototype.component1 = function () {
    return this.value;
  };
  ExprNode$LIT.prototype.copy_s8jyv4$ = function (value) {
    return new ExprNode$LIT(value === void 0 ? this.value : value);
  };
  ExprNode$LIT.prototype.toString = function () {
    return 'LIT(value=' + Kotlin.toString(this.value) + ')';
  };
  ExprNode$LIT.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  ExprNode$LIT.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function ExprNode$ARRAY_LIT(items) {
    this.items = items;
  }
  function Coroutine$eval_ojpytg$_12($this, context_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$destination = void 0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$context = context_0;
  }
  Coroutine$eval_ojpytg$_12.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$eval_ojpytg$_12.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$eval_ojpytg$_12.prototype.constructor = Coroutine$eval_ojpytg$_12;
  Coroutine$eval_ojpytg$_12.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = this.$this.items;
            this.local$destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
            this.local$tmp$ = $receiver.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 4;
              continue;
            }

            var item = this.local$tmp$.next();
            this.local$tmp$_0 = this.local$destination.add_11rb$;
            this.state_0 = 3;
            this.result_0 = item.eval_ojpytg$(this.local$context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$tmp$_0.call(this.local$destination, this.result_0);
            this.state_0 = 2;
            continue;
          case 4:
            return this.local$destination;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  ExprNode$ARRAY_LIT.prototype.eval_ojpytg$ = function (context_0, continuation_0, suspended) {
    var instance = new Coroutine$eval_ojpytg$_12(this, context_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  ExprNode$ARRAY_LIT.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ARRAY_LIT',
    interfaces: [ExprNode]
  };
  ExprNode$ARRAY_LIT.prototype.component1 = function () {
    return this.items;
  };
  ExprNode$ARRAY_LIT.prototype.copy_hu324r$ = function (items) {
    return new ExprNode$ARRAY_LIT(items === void 0 ? this.items : items);
  };
  ExprNode$ARRAY_LIT.prototype.toString = function () {
    return 'ARRAY_LIT(items=' + Kotlin.toString(this.items) + ')';
  };
  ExprNode$ARRAY_LIT.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.items) | 0;
    return result;
  };
  ExprNode$ARRAY_LIT.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.items, other.items))));
  };
  function ExprNode$OBJECT_LIT(items) {
    this.items = items;
  }
  function Coroutine$eval_ojpytg$_13($this, context_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$destination = void 0;
    this.local$tmp$ = void 0;
    this.local$item = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$context = context_0;
  }
  Coroutine$eval_ojpytg$_13.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$eval_ojpytg$_13.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$eval_ojpytg$_13.prototype.constructor = Coroutine$eval_ojpytg$_13;
  Coroutine$eval_ojpytg$_13.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = this.$this.items;
            this.local$destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
            this.local$tmp$ = $receiver.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 5;
              continue;
            }

            this.local$item = this.local$tmp$.next();
            this.local$tmp$_0 = this.local$destination.add_11rb$;
            this.state_0 = 3;
            this.result_0 = this.local$item.first.eval_ojpytg$(this.local$context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$tmp$_1 = this.result_0;
            this.state_0 = 4;
            this.result_0 = this.local$item.second.eval_ojpytg$(this.local$context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$tmp$_0.call(this.local$destination, to(this.local$tmp$_1, this.result_0));
            this.state_0 = 2;
            continue;
          case 5:
            return toMap(this.local$destination);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  ExprNode$OBJECT_LIT.prototype.eval_ojpytg$ = function (context_0, continuation_0, suspended) {
    var instance = new Coroutine$eval_ojpytg$_13(this, context_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  ExprNode$OBJECT_LIT.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OBJECT_LIT',
    interfaces: [ExprNode]
  };
  ExprNode$OBJECT_LIT.prototype.component1 = function () {
    return this.items;
  };
  ExprNode$OBJECT_LIT.prototype.copy_9vw8u4$ = function (items) {
    return new ExprNode$OBJECT_LIT(items === void 0 ? this.items : items);
  };
  ExprNode$OBJECT_LIT.prototype.toString = function () {
    return 'OBJECT_LIT(items=' + Kotlin.toString(this.items) + ')';
  };
  ExprNode$OBJECT_LIT.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.items) | 0;
    return result;
  };
  ExprNode$OBJECT_LIT.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.items, other.items))));
  };
  function ExprNode$FILTER(name, expr, params) {
    this.name = name;
    this.expr = expr;
    this.params = params;
  }
  function Coroutine$eval_ojpytg$_14($this, context_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 9;
    this.$this = $this;
    this.local$filter = void 0;
    this.local$$receiver = void 0;
    this.local$alloc2$result = void 0;
    this.local$temp = void 0;
    this.local$destination = void 0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$context = context_0;
  }
  Coroutine$eval_ojpytg$_14.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$eval_ojpytg$_14.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$eval_ojpytg$_14.prototype.constructor = Coroutine$eval_ojpytg$_14;
  Coroutine$eval_ojpytg$_14.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.local$filter = (tmp$ = this.local$context.config.filters.get_11rb$(this.$this.name)) != null ? tmp$ : invalidOp("Unknown filter '" + this.$this.name + "'");
            this.local$$receiver = this.local$context.filterCtxPool;
            this.local$temp = this.local$$receiver.alloc();
            this.exceptionState_0 = 7;
            this.local$temp.context = this.local$context;
            this.state_0 = 1;
            this.result_0 = this.$this.expr.eval_ojpytg$(this.local$context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$temp.subject = this.result_0;
            var $receiver = this.$this.params;
            this.local$destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
            this.local$tmp$ = $receiver.iterator();
            this.state_0 = 2;
            continue;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 4;
              continue;
            }

            var item = this.local$tmp$.next();
            this.local$tmp$_0 = this.local$destination.add_11rb$;
            this.state_0 = 3;
            this.result_0 = item.eval_ojpytg$(this.local$context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$tmp$_0.call(this.local$destination, this.result_0);
            this.state_0 = 2;
            continue;
          case 4:
            this.local$temp.args = this.local$destination;
            this.state_0 = 5;
            this.result_0 = this.local$filter.eval(this.local$temp, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.local$alloc2$result = this.result_0;
            this.exceptionState_0 = 9;
            this.finallyPath_0 = [6];
            this.state_0 = 8;
            continue;
          case 6:
            return this.local$alloc2$result;
          case 7:
            this.finallyPath_0 = [9];
            this.state_0 = 8;
            continue;
          case 8:
            this.exceptionState_0 = 9;
            this.local$$receiver.free_11rb$(this.local$temp);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 9:
            throw this.exception_0;
          default:this.state_0 = 9;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 9) {
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
  ExprNode$FILTER.prototype.eval_ojpytg$ = function (context_0, continuation_0, suspended) {
    var instance = new Coroutine$eval_ojpytg$_14(this, context_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  ExprNode$FILTER.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FILTER',
    interfaces: [ExprNode]
  };
  ExprNode$FILTER.prototype.component1 = function () {
    return this.name;
  };
  ExprNode$FILTER.prototype.component2 = function () {
    return this.expr;
  };
  ExprNode$FILTER.prototype.component3 = function () {
    return this.params;
  };
  ExprNode$FILTER.prototype.copy_1gt5nt$ = function (name, expr, params) {
    return new ExprNode$FILTER(name === void 0 ? this.name : name, expr === void 0 ? this.expr : expr, params === void 0 ? this.params : params);
  };
  ExprNode$FILTER.prototype.toString = function () {
    return 'FILTER(name=' + Kotlin.toString(this.name) + (', expr=' + Kotlin.toString(this.expr)) + (', params=' + Kotlin.toString(this.params)) + ')';
  };
  ExprNode$FILTER.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.expr) | 0;
    result = result * 31 + Kotlin.hashCode(this.params) | 0;
    return result;
  };
  ExprNode$FILTER.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.expr, other.expr) && Kotlin.equals(this.params, other.params)))));
  };
  function ExprNode$ACCESS(expr, name) {
    this.expr = expr;
    this.name = name;
  }
  function Coroutine$eval_ojpytg$_15($this, context_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 10;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$obj = void 0;
    this.local$key = void 0;
    this.local$context = context_0;
  }
  Coroutine$eval_ojpytg$_15.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$eval_ojpytg$_15.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$eval_ojpytg$_15.prototype.constructor = Coroutine$eval_ojpytg$_15;
  Coroutine$eval_ojpytg$_15.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 1;
            this.result_0 = this.$this.expr.eval_ojpytg$(this.local$context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$obj = this.result_0;
            this.state_0 = 2;
            this.result_0 = this.$this.name.eval_ojpytg$(this.local$context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.local$key = this.result_0;
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            this.result_0 = this.$this.dynamicGet_slmq2v$(this.local$obj, this.local$key, this.local$context.mapper, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$tmp$ = this.result_0;
            this.exceptionState_0 = 10;
            this.state_0 = 9;
            continue;
          case 4:
            this.exceptionState_0 = 10;
            var t = this.exception_0;
            if (Kotlin.isType(t, Throwable)) {
              this.exceptionState_0 = 6;
              this.state_0 = 5;
              this.result_0 = this.$this.dynamicCallMethod_w3s0wy$(this.local$obj, this.local$key, [], this.local$context.mapper, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              throw t;
            }

          case 5:
            this.local$tmp$ = this.result_0;
            this.exceptionState_0 = 10;
            this.state_0 = 7;
            continue;
          case 6:
            this.exceptionState_0 = 10;
            var t = this.exception_0;
            if (Kotlin.isType(t, Throwable)) {
              this.local$tmp$ = null;
            }
             else
              throw t;
            this.state_0 = 7;
            continue;
          case 7:
            this.state_0 = 8;
            continue;
          case 8:
            this.state_0 = 9;
            continue;
          case 9:
            return this.local$tmp$;
          case 10:
            throw this.exception_0;
          default:this.state_0 = 10;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 10) {
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
  ExprNode$ACCESS.prototype.eval_ojpytg$ = function (context_0, continuation_0, suspended) {
    var instance = new Coroutine$eval_ojpytg$_15(this, context_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  ExprNode$ACCESS.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ACCESS',
    interfaces: [ExprNode]
  };
  ExprNode$ACCESS.prototype.component1 = function () {
    return this.expr;
  };
  ExprNode$ACCESS.prototype.component2 = function () {
    return this.name;
  };
  ExprNode$ACCESS.prototype.copy_kkt230$ = function (expr, name) {
    return new ExprNode$ACCESS(expr === void 0 ? this.expr : expr, name === void 0 ? this.name : name);
  };
  ExprNode$ACCESS.prototype.toString = function () {
    return 'ACCESS(expr=' + Kotlin.toString(this.expr) + (', name=' + Kotlin.toString(this.name)) + ')';
  };
  ExprNode$ACCESS.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.expr) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  ExprNode$ACCESS.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.expr, other.expr) && Kotlin.equals(this.name, other.name)))));
  };
  function ExprNode$CALL(method, args) {
    this.method = method;
    this.args = args;
  }
  function Coroutine$eval_ojpytg$_16($this, context_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$destination = void 0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$processedArgs = void 0;
    this.local$obj = void 0;
    this.local$methodName = void 0;
    this.local$context = context_0;
  }
  Coroutine$eval_ojpytg$_16.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$eval_ojpytg$_16.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$eval_ojpytg$_16.prototype.constructor = Coroutine$eval_ojpytg$_16;
  Coroutine$eval_ojpytg$_16.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            var $receiver = this.$this.args;
            this.local$destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
            this.local$tmp$ = $receiver.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 4;
              continue;
            }

            var item = this.local$tmp$.next();
            this.local$tmp$_0 = this.local$destination.add_11rb$;
            this.state_0 = 3;
            this.result_0 = item.eval_ojpytg$(this.local$context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$tmp$_0.call(this.local$destination, this.result_0);
            this.state_0 = 2;
            continue;
          case 4:
            this.local$processedArgs = this.local$destination;
            tmp$ = this.$this.method;
            if (Kotlin.isType(tmp$, ExprNode$ACCESS)) {
              this.state_0 = 8;
              this.result_0 = this.$this.method.expr.eval_ojpytg$(this.local$context, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              if (Kotlin.isType(tmp$, ExprNode$VAR)) {
                var func = this.local$context.config.functions.get_11rb$(this.$this.method.name);
                if (func != null) {
                  this.state_0 = 5;
                  this.result_0 = func.eval_rly2ix$(this.local$processedArgs, this.local$context, this);
                  if (this.result_0 === COROUTINE_SUSPENDED)
                    return COROUTINE_SUSPENDED;
                  continue;
                }
                 else {
                  this.state_0 = 6;
                  continue;
                }
              }
               else {
                this.state_0 = 7;
                continue;
              }
            }

          case 5:
            return this.result_0;
          case 6:
            this.state_0 = 7;
            continue;
          case 7:
            this.state_0 = 14;
            continue;
          case 8:
            this.local$obj = this.result_0;
            this.state_0 = 9;
            this.result_0 = this.$this.method.name.eval_ojpytg$(this.local$context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 9:
            this.local$methodName = this.result_0;
            if (Kotlin.isType(this.local$obj, Map)) {
              var tmp$_0;
              var k = (Kotlin.isType(tmp$_0 = this.local$obj, Map) ? tmp$_0 : throwCCE()).get_11rb$(this.local$methodName);
              if (Kotlin.isType(k, Template$DynamicInvokable)) {
                this.state_0 = 10;
                this.result_0 = k.invoke_qggb1z$(this.local$context, this.local$processedArgs, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
               else {
                this.state_0 = 11;
                continue;
              }
            }
             else {
              this.state_0 = 12;
              continue;
            }

          case 10:
            return this.result_0;
          case 11:
            this.state_0 = 12;
            continue;
          case 12:
            this.state_0 = 13;
            this.result_0 = this.$this.dynamicCallMethod_w3s0wy$(this.local$obj, this.local$methodName, copyToArray(this.local$processedArgs).slice(), this.local$context.mapper, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 13:
            return this.result_0;
          case 14:
            this.state_0 = 15;
            this.result_0 = this.$this.method.eval_ojpytg$(this.local$context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 15:
            this.state_0 = 16;
            this.result_0 = this.$this.dynamicCall_ihivg6$(this.result_0, [copyToArray(this.local$processedArgs)], this.local$context.mapper, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 16:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  ExprNode$CALL.prototype.eval_ojpytg$ = function (context_0, continuation_0, suspended) {
    var instance = new Coroutine$eval_ojpytg$_16(this, context_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  ExprNode$CALL.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CALL',
    interfaces: [ExprNode]
  };
  ExprNode$CALL.prototype.component1 = function () {
    return this.method;
  };
  ExprNode$CALL.prototype.component2 = function () {
    return this.args;
  };
  ExprNode$CALL.prototype.copy_9lani3$ = function (method, args) {
    return new ExprNode$CALL(method === void 0 ? this.method : method, args === void 0 ? this.args : args);
  };
  ExprNode$CALL.prototype.toString = function () {
    return 'CALL(method=' + Kotlin.toString(this.method) + (', args=' + Kotlin.toString(this.args)) + ')';
  };
  ExprNode$CALL.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.method) | 0;
    result = result * 31 + Kotlin.hashCode(this.args) | 0;
    return result;
  };
  ExprNode$CALL.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.method, other.method) && Kotlin.equals(this.args, other.args)))));
  };
  function ExprNode$BINOP(l, r, op) {
    this.l = l;
    this.r = r;
    this.op = op;
  }
  function Coroutine$eval_ojpytg$_17($this, context_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$lr = void 0;
    this.local$context = context_0;
  }
  Coroutine$eval_ojpytg$_17.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$eval_ojpytg$_17.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$eval_ojpytg$_17.prototype.constructor = Coroutine$eval_ojpytg$_17;
  Coroutine$eval_ojpytg$_17.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.l.eval_ojpytg$(this.local$context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$lr = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.$this.r.eval_ojpytg$(this.local$context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var rr = this.result_0;
            switch (this.$this.op) {
              case '~':
                this.local$tmp$ = this.$this.toDynamicString_mzud1t$(this.local$lr) + this.$this.toDynamicString_mzud1t$(rr);
                this.state_0 = 5;
                continue;
              case '..':
                this.state_0 = 4;
                this.result_0 = DefaultFunctions_getInstance().Range.eval_rly2ix$(listOf_0([this.local$lr, rr]), this.local$context, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              default:this.local$tmp$ = Dynamic2_getInstance().binop_d0xna2$(this.local$lr, rr, this.$this.op);
                this.state_0 = 5;
                continue;
            }

          case 4:
            this.local$tmp$ = this.result_0;
            this.state_0 = 5;
            continue;
          case 5:
            return this.local$tmp$;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  ExprNode$BINOP.prototype.eval_ojpytg$ = function (context_0, continuation_0, suspended) {
    var instance = new Coroutine$eval_ojpytg$_17(this, context_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  ExprNode$BINOP.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BINOP',
    interfaces: [ExprNode]
  };
  ExprNode$BINOP.prototype.component1 = function () {
    return this.l;
  };
  ExprNode$BINOP.prototype.component2 = function () {
    return this.r;
  };
  ExprNode$BINOP.prototype.component3 = function () {
    return this.op;
  };
  ExprNode$BINOP.prototype.copy_17cna6$ = function (l, r, op) {
    return new ExprNode$BINOP(l === void 0 ? this.l : l, r === void 0 ? this.r : r, op === void 0 ? this.op : op);
  };
  ExprNode$BINOP.prototype.toString = function () {
    return 'BINOP(l=' + Kotlin.toString(this.l) + (', r=' + Kotlin.toString(this.r)) + (', op=' + Kotlin.toString(this.op)) + ')';
  };
  ExprNode$BINOP.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.l) | 0;
    result = result * 31 + Kotlin.hashCode(this.r) | 0;
    result = result * 31 + Kotlin.hashCode(this.op) | 0;
    return result;
  };
  ExprNode$BINOP.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.l, other.l) && Kotlin.equals(this.r, other.r) && Kotlin.equals(this.op, other.op)))));
  };
  function ExprNode$TERNARY(cond, etrue, efalse) {
    this.cond = cond;
    this.etrue = etrue;
    this.efalse = efalse;
  }
  function Coroutine$eval_ojpytg$_18($this, context_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$context = context_0;
  }
  Coroutine$eval_ojpytg$_18.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$eval_ojpytg$_18.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$eval_ojpytg$_18.prototype.constructor = Coroutine$eval_ojpytg$_18;
  Coroutine$eval_ojpytg$_18.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.cond.eval_ojpytg$(this.local$context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.$this.toDynamicBool_mzud1t$(this.result_0)) {
              this.state_0 = 4;
              this.result_0 = this.$this.etrue.eval_ojpytg$(this.local$context, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 3;
              this.result_0 = this.$this.efalse.eval_ojpytg$(this.local$context, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 3:
            this.local$tmp$ = this.result_0;
            this.state_0 = 5;
            continue;
          case 4:
            this.local$tmp$ = this.result_0;
            this.state_0 = 5;
            continue;
          case 5:
            return this.local$tmp$;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  ExprNode$TERNARY.prototype.eval_ojpytg$ = function (context_0, continuation_0, suspended) {
    var instance = new Coroutine$eval_ojpytg$_18(this, context_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  ExprNode$TERNARY.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TERNARY',
    interfaces: [ExprNode]
  };
  ExprNode$TERNARY.prototype.component1 = function () {
    return this.cond;
  };
  ExprNode$TERNARY.prototype.component2 = function () {
    return this.etrue;
  };
  ExprNode$TERNARY.prototype.component3 = function () {
    return this.efalse;
  };
  ExprNode$TERNARY.prototype.copy_stlgpo$ = function (cond, etrue, efalse) {
    return new ExprNode$TERNARY(cond === void 0 ? this.cond : cond, etrue === void 0 ? this.etrue : etrue, efalse === void 0 ? this.efalse : efalse);
  };
  ExprNode$TERNARY.prototype.toString = function () {
    return 'TERNARY(cond=' + Kotlin.toString(this.cond) + (', etrue=' + Kotlin.toString(this.etrue)) + (', efalse=' + Kotlin.toString(this.efalse)) + ')';
  };
  ExprNode$TERNARY.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.cond) | 0;
    result = result * 31 + Kotlin.hashCode(this.etrue) | 0;
    result = result * 31 + Kotlin.hashCode(this.efalse) | 0;
    return result;
  };
  ExprNode$TERNARY.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.cond, other.cond) && Kotlin.equals(this.etrue, other.etrue) && Kotlin.equals(this.efalse, other.efalse)))));
  };
  function ExprNode$UNOP(r, op) {
    this.r = r;
    this.op = op;
  }
  function Coroutine$eval_ojpytg$_19($this, context_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$context = context_0;
  }
  Coroutine$eval_ojpytg$_19.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$eval_ojpytg$_19.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$eval_ojpytg$_19.prototype.constructor = Coroutine$eval_ojpytg$_19;
  Coroutine$eval_ojpytg$_19.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            switch (this.$this.op) {
              case '':
              case '+':
                this.state_0 = 3;
                this.result_0 = this.$this.r.eval_ojpytg$(this.local$context, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              default:this.local$tmp$ = Dynamic2_getInstance();
                this.state_0 = 2;
                this.result_0 = this.$this.r.eval_ojpytg$(this.local$context, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$_0 = this.local$tmp$.unop_hvn9da$(this.result_0, this.$this.op);
            this.state_0 = 4;
            continue;
          case 3:
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 4;
            continue;
          case 4:
            return this.local$tmp$_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  ExprNode$UNOP.prototype.eval_ojpytg$ = function (context_0, continuation_0, suspended) {
    var instance = new Coroutine$eval_ojpytg$_19(this, context_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  ExprNode$UNOP.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UNOP',
    interfaces: [ExprNode]
  };
  ExprNode$UNOP.prototype.component1 = function () {
    return this.r;
  };
  ExprNode$UNOP.prototype.component2 = function () {
    return this.op;
  };
  ExprNode$UNOP.prototype.copy_sypn0u$ = function (r, op) {
    return new ExprNode$UNOP(r === void 0 ? this.r : r, op === void 0 ? this.op : op);
  };
  ExprNode$UNOP.prototype.toString = function () {
    return 'UNOP(r=' + Kotlin.toString(this.r) + (', op=' + Kotlin.toString(this.op)) + ')';
  };
  ExprNode$UNOP.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.r) | 0;
    result = result * 31 + Kotlin.hashCode(this.op) | 0;
    return result;
  };
  ExprNode$UNOP.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.r, other.r) && Kotlin.equals(this.op, other.op)))));
  };
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  function ExprNode$Companion() {
    ExprNode$Companion_instance = this;
    this.BINOPS_PRIORITIES_LIST_0 = listOf_0([listOf_0(['*', '/', '%']), listOf_0(['+', '-', '~']), listOf_0(['==', '!=', '<', '>', '<=', '>=', '<=>']), listOf('&&'), listOf('||'), listOf('in'), listOf('..'), listOf('?:')]);
    var $receiver = withIndex(this.BINOPS_PRIORITIES_LIST_0);
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var index = element.component1()
      , ops = element.component2();
      var destination_0 = ArrayList_init_0(collectionSizeOrDefault(ops, 10));
      var tmp$_0;
      tmp$_0 = ops.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination_0.add_11rb$(to(item, index));
      }
      var list = destination_0;
      addAll(destination, list);
    }
    this.BINOPS_0 = toMap(destination);
  }
  ExprNode$Companion.prototype.parse_61zpoe$ = function (str) {
    var tokens = ExprNode$Token$Companion_getInstance().tokenize_61zpoe$(str);
    return ExprNode$Companion_getInstance().parseFullExpr_lbidoo$(tokens);
  };
  ExprNode$Companion.prototype.parseId_lbidoo$ = function (r) {
    return r.read().text;
  };
  ExprNode$Companion.prototype.expect_59qugx$ = function (r, tokens) {
    var token = r.read();
    if (!contains(tokens, token.text))
      invalidOp('Expected ' + joinToString_0(tokens, ', ') + ' but found ' + token);
  };
  ExprNode$Companion.prototype.parseFullExpr_lbidoo$ = function (r) {
    var result = ExprNode$Companion_getInstance().parseExpr_lbidoo$(r);
    if (r.hasMore && !Kotlin.isType(r.peek(), ExprNode$Token$TEnd)) {
      var tmp$ = 'Expected expression at ' + toString(r.peek()) + ' :: ';
      var $receiver = r.list;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination.add_11rb$(item.text);
      }
      invalidOp(tmp$ + joinToString(destination, ''));
    }
    return result;
  };
  ExprNode$Companion.prototype.binopPr_61zpoe$ = function (str) {
    var tmp$;
    return (tmp$ = this.BINOPS_0.get_11rb$(str)) != null ? tmp$ : 0;
  };
  ExprNode$Companion.prototype.parseBinExpr_lbidoo$ = function (r) {
    var result = this.parseFinal_0(r);
    while (r.hasMore) {
      var $receiver = ExprNode$Companion_getInstance().BINOPS_0;
      var key = r.peek().text;
      var tmp$;
      if (!(Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(key))
        break;
      var operator = r.read().text;
      var right = this.parseFinal_0(r);
      if (Kotlin.isType(result, ExprNode$BINOP)) {
        var a = result.l;
        var lop = result.op;
        var b = result.r;
        var rop = operator;
        var c = right;
        var lopPr = this.binopPr_61zpoe$(lop);
        var ropPr = this.binopPr_61zpoe$(rop);
        if (lopPr > ropPr) {
          result = new ExprNode$BINOP(a, new ExprNode$BINOP(b, c, rop), lop);
          continue;
        }
      }
      result = new ExprNode$BINOP(result, right, operator);
    }
    return result;
  };
  ExprNode$Companion.prototype.parseTernaryExpr_lbidoo$ = function (r) {
    var left = this.parseBinExpr_lbidoo$(r);
    if (equals(r.peek().text, '?')) {
      r.skip_za3lpa$();
      var middle = this.parseExpr_lbidoo$(r);
      expect(r, [':']);
      var right = this.parseExpr_lbidoo$(r);
      left = new ExprNode$TERNARY(left, middle, right);
    }
    return left;
  };
  ExprNode$Companion.prototype.parseExpr_lbidoo$ = function (r) {
    return this.parseTernaryExpr_lbidoo$(r);
  };
  ExprNode$Companion.prototype.parseFinal_0 = function (r) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    var tok = r.peek().text.toUpperCase();
    switch (tok) {
      case '!':
      case '~':
      case '-':
      case '+':
      case 'NOT':
        var op = tok;
        r.skip_za3lpa$();
        tmp$ = this.parseFinal_0(r);
        if (equals(op, 'NOT'))
          tmp$_0 = '!';
        else
          tmp$_0 = op;
        tmp$_6 = new ExprNode$UNOP(tmp$, tmp$_0);
        break;
      case '(':
        r.read();
        var result = ExprNode$Companion_getInstance().parseExpr_lbidoo$(r);
        if (!equals(r.read().text, ')'))
          throw RuntimeException_init("Expected ')'");
        tmp$_6 = new ExprNode$UNOP(result, '');
        break;
      case '[':
        r.read();
        var items = ArrayList_init();
        loop: while (r.hasMore && !equals(r.peek().text, ']')) {
          var element = ExprNode$Companion_getInstance().parseExpr_lbidoo$(r);
          items.add_11rb$(element);
          switch (r.peek().text) {
            case ',':
              r.read();
              break;
            case ']':
              continue loop;
            default:invalidOp('Expected , or ]');
              break;
          }
        }

        expect(r, [']']);
        tmp$_6 = new ExprNode$ARRAY_LIT(items);
        break;
      case '{':
        r.read();
        var items_0 = ArrayList_init();
        loop: while (r.hasMore && !equals(r.peek().text, '}')) {
          var k = ExprNode$Companion_getInstance().parseFinal_0(r);
          expect(r, [':']);
          var v = ExprNode$Companion_getInstance().parseExpr_lbidoo$(r);
          var element_0 = to(k, v);
          items_0.add_11rb$(element_0);
          switch (r.peek().text) {
            case ',':
              r.read();
              break;
            case '}':
              continue loop;
            default:invalidOp('Expected , or }');
              break;
          }
        }

        expect(r, ['}']);
        tmp$_6 = new ExprNode$OBJECT_LIT(items_0);
        break;
      default:if (Kotlin.isType(r.peek(), ExprNode$Token$TNumber)) {
          var ntext = r.read().text;
          tmp$_1 = toDouble(ntext);
          if (tmp$_1 === toInt(ntext)) {
            tmp$_6 = new ExprNode$LIT((tmp$_2 = toIntOrNull(ntext)) != null ? tmp$_2 : 0);
          }
           else if (tmp$_1 === toLong(ntext).toNumber()) {
            tmp$_6 = new ExprNode$LIT((tmp$_3 = toLongOrNull(ntext)) != null ? tmp$_3 : L0);
          }
           else {
            tmp$_6 = new ExprNode$LIT((tmp$_4 = toDoubleOrNull(ntext)) != null ? tmp$_4 : 0.0);
          }
        }
         else if (Kotlin.isType(r.peek(), ExprNode$Token$TString)) {
          tmp$_6 = new ExprNode$LIT((Kotlin.isType(tmp$_5 = r.read(), ExprNode$Token$TString) ? tmp$_5 : throwCCE()).processedValue);
        }
         else {
          tmp$_6 = new ExprNode$VAR(r.read().text);
        }

        break;
    }
    var construct = tmp$_6;
    loop: while (r.hasMore) {
      switch (r.peek().text) {
        case '.':
          r.read();
          var id = r.read().text;
          construct = new ExprNode$ACCESS(construct, new ExprNode$LIT(id));
          continue loop;
        case '[':
          r.read();
          var expr = ExprNode$Companion_getInstance().parseExpr_lbidoo$(r);
          construct = new ExprNode$ACCESS(construct, expr);
          var end = r.read();
          if (!equals(end.text, ']'))
            throw RuntimeException_init("Expected ']' but found " + end);
          break;
        case '|':
          r.read();
          var name = r.read().text;
          var args = ArrayList_init();
          if (name.length === 0)
            invalidOp('Missing filter name');
          if (r.hasMore && equals(r.peek().text, '(')) {
            r.read();
            callargsloop: while (r.hasMore && !equals(r.peek().text, ')')) {
              var element_1 = ExprNode$Companion_getInstance().parseExpr_lbidoo$(r);
              args.add_11rb$(element_1);
              switch (expectPeek(r, [',', ')']).text) {
                case ',':
                  r.read();
                  break;
                case ')':
                  break callargsloop;
              }
            }
            expect(r, [')']);
          }

          construct = new ExprNode$FILTER(name, construct, args);
          break;
        case '(':
          r.read();
          var args_0 = ArrayList_init();
          callargsloop: while (r.hasMore && !equals(r.peek().text, ')')) {
            var element_2 = ExprNode$Companion_getInstance().parseExpr_lbidoo$(r);
            args_0.add_11rb$(element_2);
            switch (expectPeek(r, [',', ')']).text) {
              case ',':
                r.read();
                break;
              case ')':
                break callargsloop;
            }
          }

          expect(r, [')']);
          construct = new ExprNode$CALL(construct, args_0);
          break;
        default:break loop;
      }
    }
    return construct;
  };
  ExprNode$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ExprNode$Companion_instance = null;
  function ExprNode$Companion_getInstance() {
    if (ExprNode$Companion_instance === null) {
      new ExprNode$Companion();
    }
    return ExprNode$Companion_instance;
  }
  function ExprNode$Token() {
    ExprNode$Token$Companion_getInstance();
  }
  function ExprNode$Token$TId(text) {
    this.text_q4i2h$_0 = text;
  }
  Object.defineProperty(ExprNode$Token$TId.prototype, 'text', {
    get: function () {
      return this.text_q4i2h$_0;
    }
  });
  ExprNode$Token$TId.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TId',
    interfaces: [ExprNode$Token]
  };
  ExprNode$Token$TId.prototype.component1 = function () {
    return this.text;
  };
  ExprNode$Token$TId.prototype.copy_61zpoe$ = function (text) {
    return new ExprNode$Token$TId(text === void 0 ? this.text : text);
  };
  ExprNode$Token$TId.prototype.toString = function () {
    return 'TId(text=' + Kotlin.toString(this.text) + ')';
  };
  ExprNode$Token$TId.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    return result;
  };
  ExprNode$Token$TId.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.text, other.text))));
  };
  function ExprNode$Token$TNumber(text) {
    this.text_g6xtfv$_0 = text;
  }
  Object.defineProperty(ExprNode$Token$TNumber.prototype, 'text', {
    get: function () {
      return this.text_g6xtfv$_0;
    }
  });
  ExprNode$Token$TNumber.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TNumber',
    interfaces: [ExprNode$Token]
  };
  ExprNode$Token$TNumber.prototype.component1 = function () {
    return this.text;
  };
  ExprNode$Token$TNumber.prototype.copy_61zpoe$ = function (text) {
    return new ExprNode$Token$TNumber(text === void 0 ? this.text : text);
  };
  ExprNode$Token$TNumber.prototype.toString = function () {
    return 'TNumber(text=' + Kotlin.toString(this.text) + ')';
  };
  ExprNode$Token$TNumber.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    return result;
  };
  ExprNode$Token$TNumber.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.text, other.text))));
  };
  function ExprNode$Token$TString(text, processedValue) {
    this.text_wb88zn$_0 = text;
    this.processedValue = processedValue;
  }
  Object.defineProperty(ExprNode$Token$TString.prototype, 'text', {
    get: function () {
      return this.text_wb88zn$_0;
    }
  });
  ExprNode$Token$TString.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TString',
    interfaces: [ExprNode$Token]
  };
  ExprNode$Token$TString.prototype.component1 = function () {
    return this.text;
  };
  ExprNode$Token$TString.prototype.component2 = function () {
    return this.processedValue;
  };
  ExprNode$Token$TString.prototype.copy_puj7f4$ = function (text, processedValue) {
    return new ExprNode$Token$TString(text === void 0 ? this.text : text, processedValue === void 0 ? this.processedValue : processedValue);
  };
  ExprNode$Token$TString.prototype.toString = function () {
    return 'TString(text=' + Kotlin.toString(this.text) + (', processedValue=' + Kotlin.toString(this.processedValue)) + ')';
  };
  ExprNode$Token$TString.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    result = result * 31 + Kotlin.hashCode(this.processedValue) | 0;
    return result;
  };
  ExprNode$Token$TString.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.text, other.text) && Kotlin.equals(this.processedValue, other.processedValue)))));
  };
  function ExprNode$Token$TOperator(text) {
    this.text_ajexlc$_0 = text;
  }
  Object.defineProperty(ExprNode$Token$TOperator.prototype, 'text', {
    get: function () {
      return this.text_ajexlc$_0;
    }
  });
  ExprNode$Token$TOperator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TOperator',
    interfaces: [ExprNode$Token]
  };
  ExprNode$Token$TOperator.prototype.component1 = function () {
    return this.text;
  };
  ExprNode$Token$TOperator.prototype.copy_61zpoe$ = function (text) {
    return new ExprNode$Token$TOperator(text === void 0 ? this.text : text);
  };
  ExprNode$Token$TOperator.prototype.toString = function () {
    return 'TOperator(text=' + Kotlin.toString(this.text) + ')';
  };
  ExprNode$Token$TOperator.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    return result;
  };
  ExprNode$Token$TOperator.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.text, other.text))));
  };
  function ExprNode$Token$TEnd(text) {
    if (text === void 0)
      text = '';
    this.text_8h730t$_0 = text;
  }
  Object.defineProperty(ExprNode$Token$TEnd.prototype, 'text', {
    get: function () {
      return this.text_8h730t$_0;
    }
  });
  ExprNode$Token$TEnd.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TEnd',
    interfaces: [ExprNode$Token]
  };
  ExprNode$Token$TEnd.prototype.component1 = function () {
    return this.text;
  };
  ExprNode$Token$TEnd.prototype.copy_61zpoe$ = function (text) {
    return new ExprNode$Token$TEnd(text === void 0 ? this.text : text);
  };
  ExprNode$Token$TEnd.prototype.toString = function () {
    return 'TEnd(text=' + Kotlin.toString(this.text) + ')';
  };
  ExprNode$Token$TEnd.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    return result;
  };
  ExprNode$Token$TEnd.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.text, other.text))));
  };
  function ExprNode$Token$Companion() {
    ExprNode$Token$Companion_instance = this;
    this.OPERATORS_0 = setOf(['(', ')', '[', ']', '{', '}', '&&', '||', '&', '|', '^', '==', '!=', '<', '>', '<=', '>=', '<=>', '?:', '..', '+', '-', '*', '/', '%', '**', '!', '~', '.', ',', ';', ':', '?', '=']);
  }
  function ExprNode$Token$Companion$tokenize$emit(closure$out) {
    return function (str) {
      closure$out.add_11rb$(str);
    };
  }
  ExprNode$Token$Companion.prototype.tokenize_61zpoe$ = function (str) {
    var tmp$;
    var r = new StrReader(str);
    var out = ArrayList_init();
    var emit = ExprNode$Token$Companion$tokenize$emit(out);
    while (r.hasMore) {
      var start = r.pos;
      r.skipSpaces();
      var tmp$_0;
      var start_0 = r.pos;
      while (true) {
        var tmp$_1 = r.hasMore;
        if (tmp$_1) {
          tmp$_1 = isLetterDigitOrUnderscore(unboxChar(r.peekChar()));
        }
        if (!tmp$_1)
          break;
        r.readChar();
      }
      var end = r.pos;
      var id = (tmp$_0 = end > start_0 ? r.slice_vux9f0$(start_0, end) : null) != null ? tmp$_0 : '';
      if (id.length > 0) {
        if (isDigit(id.charCodeAt(0)))
          emit(new ExprNode$Token$TNumber(id));
        else
          emit(new ExprNode$Token$TId(id));
      }
      r.skipSpaces();
      if (ExprNode$Token$Companion_getInstance().OPERATORS_0.contains_11rb$(r.peek_za3lpa$(3)))
        emit(new ExprNode$Token$TOperator(r.read_za3lpa$(3)));
      if (ExprNode$Token$Companion_getInstance().OPERATORS_0.contains_11rb$(r.peek_za3lpa$(2)))
        emit(new ExprNode$Token$TOperator(r.read_za3lpa$(2)));
      if (ExprNode$Token$Companion_getInstance().OPERATORS_0.contains_11rb$(r.peek_za3lpa$(1)))
        emit(new ExprNode$Token$TOperator(r.read_za3lpa$(1)));
      if (unboxChar(r.peek()) === 39 || unboxChar(r.peek()) === 34) {
        var strStart = unboxChar(r.read());
        var strBody = (tmp$ = r.readUntil_s8itvh$(strStart)) != null ? tmp$ : '';
        var strEnd = unboxChar(r.read());
        emit(new ExprNode$Token$TString(String.fromCharCode(strStart) + strBody + String.fromCharCode(toBoxedChar(strEnd)), unescape(strBody)));
      }
      var end_0 = r.pos;
      if (end_0 === start)
        invalidOp("Don't know how to handle '" + String.fromCharCode(unboxChar(r.peek())) + "'");
    }
    emit(new ExprNode$Token$TEnd());
    return new ListReader(out);
  };
  ExprNode$Token$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ExprNode$Token$Companion_instance = null;
  function ExprNode$Token$Companion_getInstance() {
    if (ExprNode$Token$Companion_instance === null) {
      new ExprNode$Token$Companion();
    }
    return ExprNode$Token$Companion_instance;
  }
  ExprNode$Token.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Token',
    interfaces: []
  };
  ExprNode.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ExprNode',
    interfaces: [DynamicContext]
  };
  function tryRead($receiver, types) {
    var token = $receiver.peek();
    if (contains(types, token.text)) {
      $receiver.read();
      return token;
    }
     else {
      return null;
    }
  }
  function expectPeek($receiver, types) {
    var token = $receiver.peek();
    if (!contains(types, token.text))
      throw RuntimeException_init('Expected ' + joinToString_0(types, ', ') + " but found '" + token.text + "'");
    return token;
  }
  function expect($receiver, types) {
    var token = $receiver.read();
    if (!contains(types, token.text))
      throw RuntimeException_init('Expected ' + joinToString_0(types, ', '));
    return token;
  }
  function parseExpr($receiver) {
    return ExprNode$Companion_getInstance().parseExpr_lbidoo$($receiver);
  }
  function parseId($receiver) {
    return ExprNode$Companion_getInstance().parseId_lbidoo$($receiver);
  }
  function parseIdList($receiver) {
    var ids = ArrayList_init();
    do {
      var element = parseId($receiver);
      ids.add_11rb$(element);
    }
     while (tryRead($receiver, [',']) != null);
    return ids;
  }
  function Filter(name, eval_0) {
    this.name = name;
    this.eval = eval_0;
  }
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  function Filter$Ctx() {
    this.context_22cdul$_0 = this.context_22cdul$_0;
    this.subject = null;
    this.args = emptyList();
  }
  Object.defineProperty(Filter$Ctx.prototype, 'context', {
    get: function () {
      if (this.context_22cdul$_0 == null)
        return throwUPAE('context');
      return this.context_22cdul$_0;
    },
    set: function (context) {
      this.context_22cdul$_0 = context;
    }
  });
  Filter$Ctx.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ctx',
    interfaces: [DynamicContext]
  };
  Filter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Filter',
    interfaces: []
  };
  Filter.prototype.component1 = function () {
    return this.name;
  };
  Filter.prototype.component2 = function () {
    return this.eval;
  };
  Filter.prototype.copy_yzxuau$ = function (name, eval_0) {
    return new Filter(name === void 0 ? this.name : name, eval_0 === void 0 ? this.eval : eval_0);
  };
  Filter.prototype.toString = function () {
    return 'Filter(name=' + Kotlin.toString(this.name) + (', eval=' + Kotlin.toString(this.eval)) + ')';
  };
  Filter.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.eval) | 0;
    return result;
  };
  Filter.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.eval, other.eval)))));
  };
  function Korte() {
    Korte_instance = this;
  }
  Object.defineProperty(Korte.prototype, 'VERSION', {
    get: function () {
      return KORTE_VERSION;
    }
  });
  Korte.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Korte',
    interfaces: []
  };
  var Korte_instance = null;
  function Korte_getInstance() {
    if (Korte_instance === null) {
      new Korte();
    }
    return Korte_instance;
  }
  function RawString(str) {
    this.str = str;
  }
  RawString.prototype.toString = function () {
    return this.str;
  };
  RawString.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RawString',
    interfaces: []
  };
  function toEscapedString($receiver) {
    if (Kotlin.isType($receiver, RawString))
      return $receiver.str;
    else
      return htmlspecialchars(Dynamic2_getInstance().toString_s8jyv4$($receiver));
  }
  function Tag(name, nextList, end, aliases, buildNode) {
    if (aliases === void 0) {
      aliases = emptyList();
    }
    this.name = name;
    this.nextList = nextList;
    this.end = end;
    this.aliases = aliases;
    this.buildNode = buildNode;
  }
  function Tag$Part(tag, body) {
    this.tag = tag;
    this.body = body;
  }
  Tag$Part.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Part',
    interfaces: []
  };
  Tag$Part.prototype.component1 = function () {
    return this.tag;
  };
  Tag$Part.prototype.component2 = function () {
    return this.body;
  };
  Tag$Part.prototype.copy_dfdyuk$ = function (tag, body) {
    return new Tag$Part(tag === void 0 ? this.tag : tag, body === void 0 ? this.body : body);
  };
  Tag$Part.prototype.toString = function () {
    return 'Part(tag=' + Kotlin.toString(this.tag) + (', body=' + Kotlin.toString(this.body)) + ')';
  };
  Tag$Part.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.tag) | 0;
    result = result * 31 + Kotlin.hashCode(this.body) | 0;
    return result;
  };
  Tag$Part.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.tag, other.tag) && Kotlin.equals(this.body, other.body)))));
  };
  function Tag$BuildContext(context, chunks) {
    this.context = context;
    this.chunks = chunks;
  }
  Tag$BuildContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BuildContext',
    interfaces: []
  };
  Tag$BuildContext.prototype.component1 = function () {
    return this.context;
  };
  Tag$BuildContext.prototype.component2 = function () {
    return this.chunks;
  };
  Tag$BuildContext.prototype.copy_gbdoqk$ = function (context, chunks) {
    return new Tag$BuildContext(context === void 0 ? this.context : context, chunks === void 0 ? this.chunks : chunks);
  };
  Tag$BuildContext.prototype.toString = function () {
    return 'BuildContext(context=' + Kotlin.toString(this.context) + (', chunks=' + Kotlin.toString(this.chunks)) + ')';
  };
  Tag$BuildContext.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.context) | 0;
    result = result * 31 + Kotlin.hashCode(this.chunks) | 0;
    return result;
  };
  Tag$BuildContext.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.context, other.context) && Kotlin.equals(this.chunks, other.chunks)))));
  };
  Tag.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tag',
    interfaces: [DynamicContext]
  };
  Tag.prototype.component1 = function () {
    return this.name;
  };
  Tag.prototype.component2 = function () {
    return this.nextList;
  };
  Tag.prototype.component3 = function () {
    return this.end;
  };
  Tag.prototype.component4 = function () {
    return this.aliases;
  };
  Tag.prototype.component5 = function () {
    return this.buildNode;
  };
  Tag.prototype.copy_rtnmic$ = function (name, nextList, end, aliases, buildNode) {
    return new Tag(name === void 0 ? this.name : name, nextList === void 0 ? this.nextList : nextList, end === void 0 ? this.end : end, aliases === void 0 ? this.aliases : aliases, buildNode === void 0 ? this.buildNode : buildNode);
  };
  Tag.prototype.toString = function () {
    return 'Tag(name=' + Kotlin.toString(this.name) + (', nextList=' + Kotlin.toString(this.nextList)) + (', end=' + Kotlin.toString(this.end)) + (', aliases=' + Kotlin.toString(this.aliases)) + (', buildNode=' + Kotlin.toString(this.buildNode)) + ')';
  };
  Tag.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.nextList) | 0;
    result = result * 31 + Kotlin.hashCode(this.end) | 0;
    result = result * 31 + Kotlin.hashCode(this.aliases) | 0;
    result = result * 31 + Kotlin.hashCode(this.buildNode) | 0;
    return result;
  };
  Tag.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.nextList, other.nextList) && Kotlin.equals(this.end, other.end) && Kotlin.equals(this.aliases, other.aliases) && Kotlin.equals(this.buildNode, other.buildNode)))));
  };
  function TeFunction(name, eval_0) {
    this.name = name;
    this.eval = eval_0;
  }
  TeFunction.prototype.eval_rly2ix$ = function (args, context, continuation) {
    return this.eval(context, args, continuation);
  };
  TeFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TeFunction',
    interfaces: []
  };
  TeFunction.prototype.component1 = function () {
    return this.name;
  };
  TeFunction.prototype.component2 = function () {
    return this.eval;
  };
  TeFunction.prototype.copy_ity9op$ = function (name, eval_0) {
    return new TeFunction(name === void 0 ? this.name : name, eval_0 === void 0 ? this.eval : eval_0);
  };
  TeFunction.prototype.toString = function () {
    return 'TeFunction(name=' + Kotlin.toString(this.name) + (', eval=' + Kotlin.toString(this.eval)) + ')';
  };
  TeFunction.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.eval) | 0;
    return result;
  };
  TeFunction.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.eval, other.eval)))));
  };
  function Template(name, templates, template, config) {
    if (config === void 0)
      config = new TemplateConfig();
    this.name = name;
    this.templates = templates;
    this.template = template;
    this.config = config;
    this.$delegate_j1i9$_0 = new Extra$Mixin();
    this.frontMatter = null;
    this.blocks = HashMap_init_0();
    this.parseContext = new Template$ParseContext(this, this.config);
    this.templateTokens = Token$Companion_getInstance().tokenize_61zpoe$(this.template);
    this.rootNode_o4olyf$_0 = this.rootNode_o4olyf$_0;
  }
  Object.defineProperty(Template.prototype, 'rootNode', {
    get: function () {
      if (this.rootNode_o4olyf$_0 == null)
        return throwUPAE('rootNode');
      return this.rootNode_o4olyf$_0;
    },
    set: function (rootNode) {
      this.rootNode_o4olyf$_0 = rootNode;
    }
  });
  function Coroutine$init($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$init.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$init.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$init.prototype.constructor = Coroutine$init;
  Coroutine$init.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = Block$Companion_getInstance().parse_mfia1s$(this.$this.templateTokens, this.$this.parseContext, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.$this.rootNode = this.result_0;
            if (this.$this.frontMatter != null) {
              var layout = (tmp$ = this.$this.frontMatter) != null ? tmp$.get_11rb$('layout') : null;
              if (layout != null) {
                this.$this.rootNode = new DefaultBlocks$BlockGroup(listOf_0([new DefaultBlocks$BlockCapture('content', this.$this.rootNode), new DefaultBlocks$BlockExtends(new ExprNode$LIT(layout))]));
              }
            }

            return this.$this;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  Template.prototype.init = function (continuation_0, suspended) {
    var instance = new Coroutine$init(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Template$ParseContext(template, config) {
    this.template = template;
    this.config = config;
  }
  Object.defineProperty(Template$ParseContext.prototype, 'templates', {
    get: function () {
      return this.template.templates;
    }
  });
  Template$ParseContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParseContext',
    interfaces: []
  };
  function Template$Scope(map, mapper, parent) {
    if (parent === void 0)
      parent = null;
    this.map = map;
    this.mapper = mapper;
    this.parent = parent;
  }
  function Coroutine$get_s8jyv4$($this, key_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$_0 = void 0;
    this.local$key = key_0;
  }
  Coroutine$get_s8jyv4$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$get_s8jyv4$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$get_s8jyv4$.prototype.constructor = Coroutine$get_s8jyv4$;
  Coroutine$get_s8jyv4$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.$this.dynamicGet_slmq2v$(this.$this.map, this.local$key, this.$this.mapper, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$_0 = this.result_0;
            if (this.local$tmp$_0 == null) {
              if ((tmp$ = this.$this.parent) != null) {
                this.state_0 = 3;
                this.result_0 = tmp$.get_s8jyv4$(this.local$key, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
               else {
                this.result_0 = null;
                this.state_0 = 4;
                continue;
              }
            }
             else {
              this.state_0 = 5;
              continue;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 5;
            continue;
          case 5:
            return this.local$tmp$_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  Template$Scope.prototype.get_s8jyv4$ = function (key_0, continuation_0, suspended) {
    var instance = new Coroutine$get_s8jyv4$(this, key_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$set_oaftn8$($this, key_0, value_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$key = key_0;
    this.local$value = value_0;
  }
  Coroutine$set_oaftn8$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$set_oaftn8$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$set_oaftn8$.prototype.constructor = Coroutine$set_oaftn8$;
  Coroutine$set_oaftn8$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.dynamicSet_b48med$(this.$this.map, this.local$key, this.local$value, this.$this.mapper, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  Template$Scope.prototype.set_oaftn8$ = function (key_0, value_0, continuation_0, suspended) {
    var instance = new Coroutine$set_oaftn8$(this, key_0, value_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  Template$Scope.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Scope',
    interfaces: [DynamicContext]
  };
  function Template$ExecResult(context, str) {
    this.context = context;
    this.str = str;
  }
  Template$ExecResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExecResult',
    interfaces: []
  };
  Template$ExecResult.prototype.component1 = function () {
    return this.context;
  };
  Template$ExecResult.prototype.component2 = function () {
    return this.str;
  };
  Template$ExecResult.prototype.copy_dqsoru$ = function (context, str) {
    return new Template$ExecResult(context === void 0 ? this.context : context, str === void 0 ? this.str : str);
  };
  Template$ExecResult.prototype.toString = function () {
    return 'ExecResult(context=' + Kotlin.toString(this.context) + (', str=' + Kotlin.toString(this.str)) + ')';
  };
  Template$ExecResult.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.context) | 0;
    result = result * 31 + Kotlin.hashCode(this.str) | 0;
    return result;
  };
  Template$ExecResult.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.context, other.context) && Kotlin.equals(this.str, other.str)))));
  };
  function Template$DynamicInvokable() {
  }
  Template$DynamicInvokable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DynamicInvokable',
    interfaces: []
  };
  function Template$Macro(name, argNames, code) {
    this.name = name;
    this.argNames = argNames;
    this.code = code;
  }
  function Coroutine$Template$EvalContext$capture$lambda$lambda_1(closure$out_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$out = closure$out_0;
    this.local$it = it_0;
  }
  Coroutine$Template$EvalContext$capture$lambda$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Template$EvalContext$capture$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Template$EvalContext$capture$lambda$lambda_1.prototype.constructor = Coroutine$Template$EvalContext$capture$lambda$lambda_1;
  Coroutine$Template$EvalContext$capture$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$out.v += this.local$it;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function Template$EvalContext$capture$lambda$lambda_1(closure$out_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$Template$EvalContext$capture$lambda$lambda_1(closure$out_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$invoke_qggb1z$($this, ctx_0, args_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 11;
    this.$this = $this;
    this.local$createScope_klfg04$result = void 0;
    this.local$old = void 0;
    this.local$tmp$ = void 0;
    this.local$out = void 0;
    this.local$old_0 = void 0;
    this.local$ctx = ctx_0;
    this.local$args = args_0;
  }
  Coroutine$invoke_qggb1z$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$invoke_qggb1z$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$invoke_qggb1z$.prototype.constructor = Coroutine$invoke_qggb1z$;
  Coroutine$invoke_qggb1z$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$old = this.local$ctx.scope;
            this.exceptionState_0 = 9;
            this.local$ctx.scope = new Template$Scope(HashMap_init_0(), this.local$ctx.mapper, this.local$old);
            this.local$tmp$ = zip(this.$this.argNames, this.local$args).iterator();
            this.state_0 = 1;
            continue;
          case 1:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 3;
              continue;
            }

            var tmp$ = this.local$tmp$.next();
            var key = tmp$.component1()
            , value = tmp$.component2();
            this.state_0 = 2;
            this.result_0 = this.local$ctx.scope.set_oaftn8$(key, value, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.state_0 = 1;
            continue;
          case 3:
            this.local$out = {v: ''};
            this.local$old_0 = this.local$ctx.write;
            this.exceptionState_0 = 7;
            this.local$ctx.write = Template$EvalContext$capture$lambda$lambda_1(this.local$out);
            this.state_0 = 4;
            this.result_0 = this.$this.code.eval_ojpytg$(this.local$ctx, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.exceptionState_0 = 9;
            this.finallyPath_0 = [5];
            this.state_0 = 8;
            continue;
          case 5:
            this.local$createScope_klfg04$result = new RawString(this.local$out.v);
            this.exceptionState_0 = 11;
            this.finallyPath_0 = [6];
            this.state_0 = 10;
            continue;
          case 6:
            return this.local$createScope_klfg04$result;
          case 7:
            this.finallyPath_0 = [9];
            this.state_0 = 8;
            continue;
          case 8:
            this.exceptionState_0 = 9;
            this.local$ctx.write = this.local$old_0;
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 9:
            this.finallyPath_0 = [11];
            this.state_0 = 10;
            continue;
          case 10:
            this.exceptionState_0 = 11;
            this.local$ctx.scope = this.local$old;
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 11:
            throw this.exception_0;
          default:this.state_0 = 11;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 11) {
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
  Template$Macro.prototype.invoke_qggb1z$ = function (ctx_0, args_0, continuation_0, suspended) {
    var instance = new Coroutine$invoke_qggb1z$(this, ctx_0, args_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  Template$Macro.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Macro',
    interfaces: [Template$DynamicInvokable]
  };
  function Template$BlockInTemplateEval(name, block, template) {
    this.name = name;
    this.block = block;
    this.template = template;
  }
  Object.defineProperty(Template$BlockInTemplateEval.prototype, 'parent', {
    get: function () {
      var tmp$;
      return (tmp$ = this.template.parent) != null ? tmp$.getBlockOrNull_61zpoe$(this.name) : null;
    }
  });
  function Coroutine$eval_ojpytg$_20($this, ctx_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 8;
    this.$this = $this;
    this.local$oldTemplate = void 0;
    this.local$oldBlock = void 0;
    this.local$ctx = ctx_0;
  }
  Coroutine$eval_ojpytg$_20.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$eval_ojpytg$_20.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$eval_ojpytg$_20.prototype.constructor = Coroutine$eval_ojpytg$_20;
  Coroutine$eval_ojpytg$_20.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var template = this.$this.template;
            this.local$oldTemplate = this.local$ctx.currentTemplate;
            this.exceptionState_0 = 6;
            this.local$ctx.currentTemplate = template;
            this.local$oldBlock = this.local$ctx.currentBlock;
            this.exceptionState_0 = 4;
            this.local$ctx.currentBlock = this.$this;
            this.state_0 = 1;
            this.result_0 = this.$this.block.eval_ojpytg$(this.local$ctx, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 6;
            this.finallyPath_0 = [2];
            this.state_0 = 5;
            continue;
          case 2:
            this.exceptionState_0 = 8;
            this.finallyPath_0 = [3];
            this.state_0 = 7;
            continue;
          case 3:
            return Unit;
          case 4:
            this.finallyPath_0 = [6];
            this.state_0 = 5;
            continue;
          case 5:
            this.exceptionState_0 = 6;
            this.local$ctx.currentBlock = this.local$oldBlock;
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 6:
            this.finallyPath_0 = [8];
            this.state_0 = 7;
            continue;
          case 7:
            this.exceptionState_0 = 8;
            this.local$ctx.currentTemplate = this.local$oldTemplate;
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 8:
            throw this.exception_0;
          default:this.state_0 = 8;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 8) {
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
  Template$BlockInTemplateEval.prototype.eval_ojpytg$ = function (ctx_0, continuation_0, suspended) {
    var instance = new Coroutine$eval_ojpytg$_20(this, ctx_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  Template$BlockInTemplateEval.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlockInTemplateEval',
    interfaces: []
  };
  Template$BlockInTemplateEval.prototype.component1 = function () {
    return this.name;
  };
  Template$BlockInTemplateEval.prototype.component2 = function () {
    return this.block;
  };
  Template$BlockInTemplateEval.prototype.component3 = function () {
    return this.template;
  };
  Template$BlockInTemplateEval.prototype.copy_moxx0$ = function (name, block, template) {
    return new Template$BlockInTemplateEval(name === void 0 ? this.name : name, block === void 0 ? this.block : block, template === void 0 ? this.template : template);
  };
  Template$BlockInTemplateEval.prototype.toString = function () {
    return 'BlockInTemplateEval(name=' + Kotlin.toString(this.name) + (', block=' + Kotlin.toString(this.block)) + (', template=' + Kotlin.toString(this.template)) + ')';
  };
  Template$BlockInTemplateEval.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.block) | 0;
    result = result * 31 + Kotlin.hashCode(this.template) | 0;
    return result;
  };
  Template$BlockInTemplateEval.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.block, other.block) && Kotlin.equals(this.template, other.template)))));
  };
  function Template$TemplateEvalContext(template) {
    this.template = template;
    this.name = this.template.name;
    this.parent = null;
  }
  Object.defineProperty(Template$TemplateEvalContext.prototype, 'templates', {
    get: function () {
      return this.template.templates;
    }
  });
  Object.defineProperty(Template$TemplateEvalContext.prototype, 'root', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.parent) != null ? tmp$.root : null) != null ? tmp$_0 : this;
    }
  });
  Template$TemplateEvalContext.prototype.getBlockOrNull_61zpoe$ = function (name) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$ = this.template.blocks.get_11rb$(name)) != null ? new Template$BlockInTemplateEval(name, tmp$, this) : null) != null ? tmp$_1 : (tmp$_0 = this.parent) != null ? tmp$_0.getBlockOrNull_61zpoe$(name) : null;
  };
  Template$TemplateEvalContext.prototype.getBlock_61zpoe$ = function (name) {
    var tmp$;
    return (tmp$ = this.getBlockOrNull_61zpoe$(name)) != null ? tmp$ : new Template$BlockInTemplateEval(name, new DefaultBlocks$BlockText(''), this);
  };
  function Template$TemplateEvalContext$WithArgs(context, args, mapper) {
    this.context = context;
    this.args = args;
    this.mapper = mapper;
  }
  function Coroutine$write_2errf5$($this, writer_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$writer = writer_0;
  }
  Coroutine$write_2errf5$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$write_2errf5$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$write_2errf5$.prototype.constructor = Coroutine$write_2errf5$;
  Coroutine$write_2errf5$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.context.exec2_d65wbz$(this.$this.args, this.$this.mapper, this.local$writer, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  Template$TemplateEvalContext$WithArgs.prototype.write_2errf5$ = function (writer_0, continuation_0, suspended) {
    var instance = new Coroutine$write_2errf5$(this, writer_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  Template$TemplateEvalContext$WithArgs.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WithArgs',
    interfaces: [AsyncTextWriterContainer]
  };
  Template$TemplateEvalContext.prototype.withArgs_ldct9y$ = function (args, mapper) {
    if (mapper === void 0)
      mapper = Mapper2;
    return new Template$TemplateEvalContext$WithArgs(this, args, mapper);
  };
  function Coroutine$exec2_d65wbz$($this, args_0, mapper_0, writer_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$scope = void 0;
    this.local$context = void 0;
    this.local$args = args_0;
    this.local$mapper = mapper_0;
    this.local$writer = writer_0;
  }
  Coroutine$exec2_d65wbz$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$exec2_d65wbz$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$exec2_d65wbz$.prototype.constructor = Coroutine$exec2_d65wbz$;
  Coroutine$exec2_d65wbz$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$scope = new Template$Scope(this.local$args, this.local$mapper);
            if (this.$this.template.frontMatter != null) {
              this.local$tmp$ = ensureNotNull(this.$this.template.frontMatter).entries.iterator();
              this.state_0 = 2;
              continue;
            }
             else {
              this.state_0 = 5;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 4;
              continue;
            }

            var tmp$ = this.local$tmp$.next();
            var k = tmp$.key;
            var v = tmp$.value;
            this.state_0 = 3;
            this.result_0 = this.local$scope.set_oaftn8$(k, v, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 2;
            continue;
          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            this.local$context = new Template$EvalContext(this.$this, this.local$scope, this.$this.template.config, this.local$mapper, this.local$writer);
            this.state_0 = 6;
            this.result_0 = this.$this.eval_ojpytg$(this.local$context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            return this.local$context;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  Template$TemplateEvalContext.prototype.exec2_d65wbz$ = function (args_0, mapper_0, writer_0, continuation_0, suspended) {
    var instance = new Coroutine$exec2_d65wbz$(this, args_0, mapper_0, writer_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$Template$TemplateEvalContext$exec$lambda(closure$str_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$str = closure$str_0;
    this.local$it = it_0;
  }
  Coroutine$Template$TemplateEvalContext$exec$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Template$TemplateEvalContext$exec$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Template$TemplateEvalContext$exec$lambda.prototype.constructor = Coroutine$Template$TemplateEvalContext$exec$lambda;
  Coroutine$Template$TemplateEvalContext$exec$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$str.append_gw00v9$(this.local$it);
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function Template$TemplateEvalContext$exec$lambda(closure$str_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$Template$TemplateEvalContext$exec$lambda(closure$str_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$exec_ldct9y$($this, args_0, mapper_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$str = void 0;
    this.local$scope = void 0;
    this.local$context = void 0;
    this.local$args = args_0;
    this.local$mapper = mapper_0;
  }
  Coroutine$exec_ldct9y$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$exec_ldct9y$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$exec_ldct9y$.prototype.constructor = Coroutine$exec_ldct9y$;
  Coroutine$exec_ldct9y$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$mapper === void 0)
              this.local$mapper = Mapper2;
            this.local$str = StringBuilder_init();
            this.local$scope = new Template$Scope(this.local$args, this.local$mapper);
            if (this.$this.template.frontMatter != null) {
              this.local$tmp$ = ensureNotNull(this.$this.template.frontMatter).entries.iterator();
              this.state_0 = 2;
              continue;
            }
             else {
              this.state_0 = 5;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 4;
              continue;
            }

            var tmp$ = this.local$tmp$.next();
            var k = tmp$.key;
            var v = tmp$.value;
            this.state_0 = 3;
            this.result_0 = this.local$scope.set_oaftn8$(k, v, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 2;
            continue;
          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            this.local$context = new Template$EvalContext(this.$this, this.local$scope, this.$this.template.config, this.local$mapper, Template$TemplateEvalContext$exec$lambda(this.local$str));
            this.state_0 = 6;
            this.result_0 = this.$this.eval_ojpytg$(this.local$context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            return new Template$ExecResult(this.local$context, this.local$str.toString());
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  Template$TemplateEvalContext.prototype.exec_ldct9y$ = function (args_0, mapper_0, continuation_0, suspended) {
    var instance = new Coroutine$exec_ldct9y$(this, args_0, mapper_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  Template$TemplateEvalContext.prototype.exec_6fip12$ = function (args, mapper, continuation) {
    if (mapper === void 0)
      mapper = Mapper2;
    return this.exec_ldct9y$(hashMapOf(args.slice()), mapper, continuation);
  };
  function Coroutine$invoke_ldct9y$($this, args_0, mapper_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$args = args_0;
    this.local$mapper = mapper_0;
  }
  Coroutine$invoke_ldct9y$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$invoke_ldct9y$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$invoke_ldct9y$.prototype.constructor = Coroutine$invoke_ldct9y$;
  Coroutine$invoke_ldct9y$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$mapper === void 0)
              this.local$mapper = Mapper2;
            this.state_0 = 2;
            this.result_0 = this.$this.exec_ldct9y$(this.local$args, this.local$mapper, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0.str;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  Template$TemplateEvalContext.prototype.invoke_ldct9y$ = function (args_0, mapper_0, continuation_0, suspended) {
    var instance = new Coroutine$invoke_ldct9y$(this, args_0, mapper_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$invoke_6fip12$($this, args_0, mapper_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$args = args_0;
    this.local$mapper = mapper_0;
  }
  Coroutine$invoke_6fip12$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$invoke_6fip12$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$invoke_6fip12$.prototype.constructor = Coroutine$invoke_6fip12$;
  Coroutine$invoke_6fip12$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$mapper === void 0)
              this.local$mapper = Mapper2;
            this.state_0 = 2;
            this.result_0 = this.$this.exec_ldct9y$(hashMapOf(this.local$args.slice()), this.local$mapper, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0.str;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  Template$TemplateEvalContext.prototype.invoke_6fip12$ = function (args_0, mapper_0, continuation_0, suspended) {
    var instance = new Coroutine$invoke_6fip12$(this, args_0, mapper_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$eval_ojpytg$_21($this, context_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 10;
    this.$this = $this;
    this.local$oldTemplate = void 0;
    this.local$old = void 0;
    this.local$context = context_0;
  }
  Coroutine$eval_ojpytg$_21.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$eval_ojpytg$_21.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$eval_ojpytg$_21.prototype.constructor = Coroutine$eval_ojpytg$_21;
  Coroutine$eval_ojpytg$_21.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 8;
            this.local$oldTemplate = this.local$context.currentTemplate;
            this.exceptionState_0 = 6;
            this.local$context.currentTemplate = this.$this;
            this.local$old = this.local$context.scope;
            this.exceptionState_0 = 4;
            this.local$context.scope = new Template$Scope(HashMap_init_0(), this.local$context.mapper, this.local$old);
            this.state_0 = 1;
            this.result_0 = this.$this.template.rootNode.eval_ojpytg$(this.local$context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 6;
            this.finallyPath_0 = [2];
            this.state_0 = 5;
            continue;
          case 2:
            this.exceptionState_0 = 8;
            this.finallyPath_0 = [3];
            this.state_0 = 7;
            continue;
          case 3:
            this.exceptionState_0 = 10;
            this.state_0 = 9;
            continue;
          case 4:
            this.finallyPath_0 = [6];
            this.state_0 = 5;
            continue;
          case 5:
            this.exceptionState_0 = 6;
            this.local$context.scope = this.local$old;
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 6:
            this.finallyPath_0 = [8];
            this.state_0 = 7;
            continue;
          case 7:
            this.exceptionState_0 = 8;
            this.local$context.currentTemplate = this.local$oldTemplate;
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 8:
            this.exceptionState_0 = 10;
            var e = this.exception_0;
            if (!Kotlin.isType(e, Template$StopEvaluatingException))
              throw e;
            this.state_0 = 9;
            continue;
          case 9:
            return;
          case 10:
            throw this.exception_0;
          default:this.state_0 = 10;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 10) {
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
  Template$TemplateEvalContext.prototype.eval_ojpytg$ = function (context_0, continuation_0, suspended) {
    var instance = new Coroutine$eval_ojpytg$_21(this, context_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  Template$TemplateEvalContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TemplateEvalContext',
    interfaces: []
  };
  function Template$StopEvaluatingException() {
    Exception_init(this);
    this.name = 'Template$StopEvaluatingException';
  }
  Template$StopEvaluatingException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StopEvaluatingException',
    interfaces: [Exception]
  };
  function Template$EvalContext(currentTemplate, scope, config, mapper, write) {
    this.currentTemplate = currentTemplate;
    this.scope = scope;
    this.config = config;
    this.mapper = mapper;
    this.write = write;
    this.leafTemplate = this.currentTemplate;
    this.templates = this.currentTemplate.templates;
    this.macros = HashMap_init_0();
    this.currentBlock = null;
    this.filterCtxPool = Pool_init(void 0, Template$EvalContext$filterCtxPool$lambda);
  }
  Template$EvalContext.prototype.setTempTemplate_xqhv9e$ = defineInlineFunction('korte.com.soywiz.korte.Template.EvalContext.setTempTemplate_xqhv9e$', function (template, callback) {
    var oldTemplate = this.currentTemplate;
    try {
      this.currentTemplate = template;
      return callback();
    }
    finally {
      this.currentTemplate = oldTemplate;
    }
  });
  Template$EvalContext.prototype.capture_o14v8n$ = defineInlineFunction('korte.com.soywiz.korte.Template.EvalContext.capture_o14v8n$', wrapFunction(function () {
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    function Coroutine$Template$EvalContext$capture$lambda$lambda(closure$out_0, it_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$out = closure$out_0;
      this.local$it = it_0;
    }
    Coroutine$Template$EvalContext$capture$lambda$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$Template$EvalContext$capture$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$Template$EvalContext$capture$lambda$lambda.prototype.constructor = Coroutine$Template$EvalContext$capture$lambda$lambda;
    Coroutine$Template$EvalContext$capture$lambda$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              return this.local$closure$out.v += this.local$it;
            case 1:
              throw this.exception_0;
            default:this.state_0 = 1;
              throw new Error('State Machine Unreachable execution');
          }
        }
         catch (e) {
          if (this.state_0 === 1) {
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
    function Template$EvalContext$capture$lambda$lambda(closure$out_0) {
      return function (it_0, continuation_0, suspended) {
        var instance = new Coroutine$Template$EvalContext$capture$lambda$lambda(closure$out_0, it_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    return function (callback) {
      var out = {v: ''};
      var old = this.write;
      try {
        this.write = Template$EvalContext$capture$lambda$lambda(out);
        callback();
      }
      finally {
        this.write = old;
      }
      return out.v;
    };
  }));
  Template$EvalContext.prototype.captureRaw_o14v8n$ = defineInlineFunction('korte.com.soywiz.korte.Template.EvalContext.captureRaw_o14v8n$', wrapFunction(function () {
    var RawString_init = _.com.soywiz.korte.RawString;
    var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
    function Coroutine$Template$EvalContext$capture$lambda$lambda(closure$out_0, it_0, continuation_0) {
      CoroutineImpl.call(this, continuation_0);
      this.exceptionState_0 = 1;
      this.local$closure$out = closure$out_0;
      this.local$it = it_0;
    }
    Coroutine$Template$EvalContext$capture$lambda$lambda.$metadata$ = {
      kind: Kotlin.Kind.CLASS,
      simpleName: null,
      interfaces: [CoroutineImpl]
    };
    Coroutine$Template$EvalContext$capture$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
    Coroutine$Template$EvalContext$capture$lambda$lambda.prototype.constructor = Coroutine$Template$EvalContext$capture$lambda$lambda;
    Coroutine$Template$EvalContext$capture$lambda$lambda.prototype.doResume = function () {
      do
        try {
          switch (this.state_0) {
            case 0:
              return this.local$closure$out.v += this.local$it;
            case 1:
              throw this.exception_0;
            default:this.state_0 = 1;
              throw new Error('State Machine Unreachable execution');
          }
        }
         catch (e) {
          if (this.state_0 === 1) {
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
    function Template$EvalContext$capture$lambda$lambda(closure$out_0) {
      return function (it_0, continuation_0, suspended) {
        var instance = new Coroutine$Template$EvalContext$capture$lambda$lambda(closure$out_0, it_0, continuation_0);
        if (suspended)
          return instance;
        else
          return instance.doResume(null);
      };
    }
    return function (callback) {
      var out = {v: ''};
      var old = this.write;
      try {
        this.write = Template$EvalContext$capture$lambda$lambda(out);
        callback();
      }
      finally {
        this.write = old;
      }
      return new RawString_init(out.v);
    };
  }));
  Template$EvalContext.prototype.createScope_klfg04$ = defineInlineFunction('korte.com.soywiz.korte.Template.EvalContext.createScope_klfg04$', wrapFunction(function () {
    var Template$Template$Scope_init = _.com.soywiz.korte.Template.Scope;
    var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
    return function (callback) {
      var old = this.scope;
      try {
        this.scope = new Template$Template$Scope_init(HashMap_init(), this.mapper, old);
        return callback();
      }
      finally {
        this.scope = old;
      }
    };
  }));
  function Template$EvalContext$filterCtxPool$lambda(it) {
    return new Filter$Ctx();
  }
  Template$EvalContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EvalContext',
    interfaces: [DynamicContext]
  };
  Template.prototype.addBlock_x5ctsa$ = function (name, body) {
    this.blocks.put_xwzc9p$(name, body);
  };
  Template.prototype.createEvalContext = function (continuation) {
    return new Template$TemplateEvalContext(this);
  };
  function Coroutine$invoke_ldct9y$_0($this, hashMap_0, mapper_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$hashMap = hashMap_0;
    this.local$mapper = mapper_0;
  }
  Coroutine$invoke_ldct9y$_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$invoke_ldct9y$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$invoke_ldct9y$_0.prototype.constructor = Coroutine$invoke_ldct9y$_0;
  Coroutine$invoke_ldct9y$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$mapper === void 0)
              this.local$mapper = Mapper2;
            this.state_0 = 2;
            this.result_0 = this.$this.createEvalContext(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.result_0.invoke_ldct9y$(this.local$hashMap, this.local$mapper, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  Template.prototype.invoke_ldct9y$ = function (hashMap_0, mapper_0, continuation_0, suspended) {
    var instance = new Coroutine$invoke_ldct9y$_0(this, hashMap_0, mapper_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$invoke_6fip12$_0($this, args_0, mapper_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$args = args_0;
    this.local$mapper = mapper_0;
  }
  Coroutine$invoke_6fip12$_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$invoke_6fip12$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$invoke_6fip12$_0.prototype.constructor = Coroutine$invoke_6fip12$_0;
  Coroutine$invoke_6fip12$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$mapper === void 0)
              this.local$mapper = Mapper2;
            this.state_0 = 2;
            this.result_0 = this.$this.createEvalContext(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.result_0.invoke_6fip12$(this.local$args.slice(), this.local$mapper, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  Template.prototype.invoke_6fip12$ = function (args_0, mapper_0, continuation_0, suspended) {
    var instance = new Coroutine$invoke_6fip12$_0(this, args_0, mapper_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$prender_6fip12$($this, args_0, mapper_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$args = args_0;
    this.local$mapper = mapper_0;
  }
  Coroutine$prender_6fip12$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$prender_6fip12$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$prender_6fip12$.prototype.constructor = Coroutine$prender_6fip12$;
  Coroutine$prender_6fip12$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$mapper === void 0)
              this.local$mapper = Mapper2;
            this.state_0 = 2;
            this.result_0 = this.$this.createEvalContext(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0.withArgs_ldct9y$(HashMap_init(toMap_0(this.local$args)), this.local$mapper);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  Template.prototype.prender_6fip12$ = function (args_0, mapper_0, continuation_0, suspended) {
    var instance = new Coroutine$prender_6fip12$(this, args_0, mapper_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$prender_ldct9y$($this, args_0, mapper_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$args = args_0;
    this.local$mapper = mapper_0;
  }
  Coroutine$prender_ldct9y$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$prender_ldct9y$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$prender_ldct9y$.prototype.constructor = Coroutine$prender_ldct9y$;
  Coroutine$prender_ldct9y$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$mapper === void 0)
              this.local$mapper = Mapper2;
            this.state_0 = 2;
            this.result_0 = this.$this.createEvalContext(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0.withArgs_ldct9y$(this.local$args, this.local$mapper);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  Template.prototype.prender_ldct9y$ = function (args_0, mapper_0, continuation_0, suspended) {
    var instance = new Coroutine$prender_ldct9y$(this, args_0, mapper_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  Object.defineProperty(Template.prototype, 'extra', {
    get: function () {
      return this.$delegate_j1i9$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_j1i9$_0.extra = tmp$;
    }
  });
  Template.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Template',
    interfaces: [Extra]
  };
  function Template_0(template, config, continuation) {
    if (config === void 0)
      config = new TemplateConfig();
    return (new Templates(MemoryVfs(mapOf(to('template', openAsync(toByteArray(template, config.charset))))), void 0, void 0, config)).get_61zpoe$('template', continuation);
  }
  function TemplateConfig(extraTags, extraFilters, extraFunctions, charset) {
    if (extraTags === void 0) {
      extraTags = emptyList();
    }
    if (extraFilters === void 0) {
      extraFilters = emptyList();
    }
    if (extraFunctions === void 0) {
      extraFunctions = emptyList();
    }
    if (charset === void 0)
      charset = lang.UTF8;
    this.charset = charset;
    this.$delegate_kgsda7$_0 = new Extra$Mixin();
    this.integratedFunctions = DefaultFunctions_getInstance().ALL;
    this.integratedFilters = DefaultFilters_getInstance().ALL;
    this.integratedTags = DefaultTags_getInstance().ALL;
    this.allFunctions_wgwtub$_0 = plus(this.integratedFunctions, extraFunctions);
    this.allTags_gbbfwz$_0 = plus(this.integratedTags, extraTags);
    this.allFilters_rxis7h$_0 = plus(this.integratedFilters, extraFilters);
    var $receiver = HashMap_init_0();
    var tmp$, tmp$_0;
    tmp$ = this.allTags_gbbfwz$_0.iterator();
    while (tmp$.hasNext()) {
      var tag = tmp$.next();
      var key = tag.name;
      $receiver.put_xwzc9p$(key, tag);
      tmp$_0 = tag.aliases.iterator();
      while (tmp$_0.hasNext()) {
        var alias = tmp$_0.next();
        $receiver.put_xwzc9p$(alias, tag);
      }
    }
    this.tags = $receiver;
    var $receiver_0 = HashMap_init_0();
    var tmp$_1;
    tmp$_1 = this.allFilters_rxis7h$_0.iterator();
    while (tmp$_1.hasNext()) {
      var filter = tmp$_1.next();
      var key_0 = filter.name;
      $receiver_0.put_xwzc9p$(key_0, filter);
    }
    this.filters = $receiver_0;
    var $receiver_1 = HashMap_init_0();
    var tmp$_2;
    tmp$_2 = this.allFunctions_wgwtub$_0.iterator();
    while (tmp$_2.hasNext()) {
      var func = tmp$_2.next();
      var key_1 = func.name;
      $receiver_1.put_xwzc9p$(key_1, func);
    }
    this.functions = $receiver_1;
  }
  TemplateConfig.prototype.register_ia5wn8$ = function (its) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== its.length; ++tmp$) {
      var it = its[tmp$];
      var $receiver = this.tags;
      var key = it.name;
      $receiver.put_xwzc9p$(key, it);
    }
    return this;
  };
  TemplateConfig.prototype.register_4fq9qy$ = function (its) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== its.length; ++tmp$) {
      var it = its[tmp$];
      var $receiver = this.filters;
      var key = it.name;
      $receiver.put_xwzc9p$(key, it);
    }
    return this;
  };
  TemplateConfig.prototype.register_9qh19n$ = function (its) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== its.length; ++tmp$) {
      var it = its[tmp$];
      var $receiver = this.functions;
      var key = it.name;
      $receiver.put_xwzc9p$(key, it);
    }
    return this;
  };
  Object.defineProperty(TemplateConfig.prototype, 'extra', {
    get: function () {
      return this.$delegate_kgsda7$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_kgsda7$_0.extra = tmp$;
    }
  });
  TemplateConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TemplateConfig',
    interfaces: [Extra]
  };
  function Templates(root, includes, layouts, config, cache) {
    if (includes === void 0)
      includes = root;
    if (layouts === void 0)
      layouts = root;
    if (config === void 0)
      config = new TemplateConfig();
    if (cache === void 0)
      cache = true;
    this.root = root;
    this.includes = includes;
    this.layouts = layouts;
    this.config = config;
    this.cache = cache;
    this.tcache = new Templates$AsyncCache();
  }
  function Templates$AsyncCache() {
    this.promises = LinkedHashMap_init();
  }
  Templates$AsyncCache.prototype.invalidateAll = function () {
    this.promises.clear();
  };
  function Coroutine$Templates$AsyncCache$invoke$lambda$lambda(closure$gen_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$gen = closure$gen_0;
  }
  Coroutine$Templates$AsyncCache$invoke$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Templates$AsyncCache$invoke$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Templates$AsyncCache$invoke$lambda$lambda.prototype.constructor = Coroutine$Templates$AsyncCache$invoke$lambda$lambda;
  Coroutine$Templates$AsyncCache$invoke$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$gen(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function Templates$AsyncCache$invoke$lambda$lambda(closure$gen_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Templates$AsyncCache$invoke$lambda$lambda(closure$gen_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Templates$AsyncCache.prototype.invoke_vvrf4k$ = function (key, gen, continuation) {
    var tmp$;
    var $receiver = this.promises;
    var tmp$_0;
    var value = $receiver.get_11rb$(key);
    if (value == null) {
      var answer = asyncImmediately(continuation.context, Templates$AsyncCache$invoke$lambda$lambda(gen));
      $receiver.put_xwzc9p$(key, answer);
      tmp$_0 = answer;
    }
     else {
      tmp$_0 = value;
    }
    return (Kotlin.isType(tmp$ = tmp$_0, Deferred) ? tmp$ : throwCCE()).await(continuation);
  };
  Templates$AsyncCache.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AsyncCache',
    interfaces: []
  };
  Templates.prototype.invalidateCache = function () {
    this.tcache.invalidateAll();
  };
  function Coroutine$Templates$cache$lambda(closure$callback_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$callback = closure$callback_0;
  }
  Coroutine$Templates$cache$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Templates$cache$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Templates$cache$lambda.prototype.constructor = Coroutine$Templates$cache$lambda;
  Coroutine$Templates$cache$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$callback(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function Templates$cache$lambda(closure$callback_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Templates$cache$lambda(closure$callback_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$cache_dsgb6x$($this, name_0, callback_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$name = name_0;
    this.local$callback = callback_0;
  }
  Coroutine$cache_dsgb6x$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$cache_dsgb6x$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$cache_dsgb6x$.prototype.constructor = Coroutine$cache_dsgb6x$;
  Coroutine$cache_dsgb6x$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.$this.cache) {
              this.state_0 = 3;
              this.result_0 = this.$this.tcache.invoke_vvrf4k$(this.local$name, Templates$cache$lambda(this.local$callback), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 2;
              this.result_0 = this.local$callback(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$ = this.result_0;
            this.state_0 = 4;
            continue;
          case 3:
            this.local$tmp$ = this.result_0;
            this.state_0 = 4;
            continue;
          case 4:
            return this.local$tmp$;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  Templates.prototype.cache_dsgb6x$ = function (name_0, callback_0, continuation_0, suspended) {
    var instance = new Coroutine$cache_dsgb6x$(this, name_0, callback_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$Templates$getInclude$lambda(this$Templates_0, closure$name_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Templates = this$Templates_0;
    this.local$closure$name = closure$name_0;
  }
  Coroutine$Templates$getInclude$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Templates$getInclude$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Templates$getInclude$lambda.prototype.constructor = Coroutine$Templates$getInclude$lambda;
  Coroutine$Templates$getInclude$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$Templates.includes.get_61zpoe$(this.local$closure$name).readString_qa9gbo$(void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var content = this.result_0;
            this.state_0 = 3;
            this.result_0 = (new Template(this.local$closure$name, this.local$this$Templates, content, this.local$this$Templates.config)).init(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function Templates$getInclude$lambda(this$Templates_0, closure$name_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Templates$getInclude$lambda(this$Templates_0, closure$name_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Templates.prototype.getInclude_61zpoe$ = function (name, continuation) {
    return this.cache_dsgb6x$('include/' + name, Templates$getInclude$lambda(this, name), continuation);
  };
  function Coroutine$Templates$getLayout$lambda(this$Templates_0, closure$name_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Templates = this$Templates_0;
    this.local$closure$name = closure$name_0;
  }
  Coroutine$Templates$getLayout$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Templates$getLayout$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Templates$getLayout$lambda.prototype.constructor = Coroutine$Templates$getLayout$lambda;
  Coroutine$Templates$getLayout$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$Templates.layouts.get_61zpoe$(this.local$closure$name).readString_qa9gbo$(void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var content = this.result_0;
            this.state_0 = 3;
            this.result_0 = (new Template(this.local$closure$name, this.local$this$Templates, content, this.local$this$Templates.config)).init(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function Templates$getLayout$lambda(this$Templates_0, closure$name_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Templates$getLayout$lambda(this$Templates_0, closure$name_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Templates.prototype.getLayout_61zpoe$ = function (name, continuation) {
    return this.cache_dsgb6x$('layout/' + name, Templates$getLayout$lambda(this, name), continuation);
  };
  function Coroutine$Templates$get$lambda(this$Templates_0, closure$name_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Templates = this$Templates_0;
    this.local$closure$name = closure$name_0;
  }
  Coroutine$Templates$get$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Templates$get$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Templates$get$lambda.prototype.constructor = Coroutine$Templates$get$lambda;
  Coroutine$Templates$get$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$Templates.root.get_61zpoe$(this.local$closure$name).readString_qa9gbo$(void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var content = this.result_0;
            this.state_0 = 3;
            this.result_0 = (new Template(this.local$closure$name, this.local$this$Templates, content, this.local$this$Templates.config)).init(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  function Templates$get$lambda(this$Templates_0, closure$name_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Templates$get$lambda(this$Templates_0, closure$name_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Templates.prototype.get_61zpoe$ = function (name, continuation) {
    return this.cache_dsgb6x$(name, Templates$get$lambda(this, name), continuation);
  };
  function Coroutine$render_jydrsy$($this, name_0, args_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$name = name_0;
    this.local$args = args_0;
  }
  Coroutine$render_jydrsy$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$render_jydrsy$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$render_jydrsy$.prototype.constructor = Coroutine$render_jydrsy$;
  Coroutine$render_jydrsy$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.get_61zpoe$(this.local$name, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.result_0.invoke_6fip12$(this.local$args.slice(), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  Templates.prototype.render_jydrsy$ = function (name_0, args_0, continuation_0, suspended) {
    var instance = new Coroutine$render_jydrsy$(this, name_0, args_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$render_4w9ihe$($this, name_0, args_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$name = name_0;
    this.local$args = args_0;
  }
  Coroutine$render_4w9ihe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$render_4w9ihe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$render_4w9ihe$.prototype.constructor = Coroutine$render_4w9ihe$;
  Coroutine$render_4w9ihe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.get_61zpoe$(this.local$name, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.result_0.invoke_ldct9y$(this.local$args, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  Templates.prototype.render_4w9ihe$ = function (name_0, args_0, continuation_0, suspended) {
    var instance = new Coroutine$render_4w9ihe$(this, name_0, args_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$prender_jydrsy$($this, name_0, args_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$name = name_0;
    this.local$args = args_0;
  }
  Coroutine$prender_jydrsy$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$prender_jydrsy$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$prender_jydrsy$.prototype.constructor = Coroutine$prender_jydrsy$;
  Coroutine$prender_jydrsy$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.get_61zpoe$(this.local$name, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.result_0.prender_6fip12$(this.local$args.slice(), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  Templates.prototype.prender_jydrsy$ = function (name_0, args_0, continuation_0, suspended) {
    var instance = new Coroutine$prender_jydrsy$(this, name_0, args_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$prender_4w9ihe$($this, name_0, args_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$name = name_0;
    this.local$args = args_0;
  }
  Coroutine$prender_4w9ihe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$prender_4w9ihe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$prender_4w9ihe$.prototype.constructor = Coroutine$prender_4w9ihe$;
  Coroutine$prender_4w9ihe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.get_61zpoe$(this.local$name, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.result_0.prender_ldct9y$(this.local$args, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  Templates.prototype.prender_4w9ihe$ = function (name_0, args_0, continuation_0, suspended) {
    var instance = new Coroutine$prender_4w9ihe$(this, name_0, args_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  Templates.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Templates',
    interfaces: []
  };
  function Token() {
    Token$Companion_getInstance();
    this.trimLeft = false;
    this.trimRight = false;
  }
  function Token$TLiteral(content) {
    Token.call(this);
    this.content = content;
  }
  Token$TLiteral.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TLiteral',
    interfaces: [Token]
  };
  Token$TLiteral.prototype.component1 = function () {
    return this.content;
  };
  Token$TLiteral.prototype.copy_61zpoe$ = function (content) {
    return new Token$TLiteral(content === void 0 ? this.content : content);
  };
  Token$TLiteral.prototype.toString = function () {
    return 'TLiteral(content=' + Kotlin.toString(this.content) + ')';
  };
  Token$TLiteral.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.content) | 0;
    return result;
  };
  Token$TLiteral.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.content, other.content))));
  };
  function Token$TExpr(content) {
    Token.call(this);
    this.content = content;
  }
  Token$TExpr.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TExpr',
    interfaces: [Token]
  };
  Token$TExpr.prototype.component1 = function () {
    return this.content;
  };
  Token$TExpr.prototype.copy_61zpoe$ = function (content) {
    return new Token$TExpr(content === void 0 ? this.content : content);
  };
  Token$TExpr.prototype.toString = function () {
    return 'TExpr(content=' + Kotlin.toString(this.content) + ')';
  };
  Token$TExpr.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.content) | 0;
    return result;
  };
  Token$TExpr.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.content, other.content))));
  };
  function Token$TTag(name, content) {
    Token.call(this);
    this.name = name;
    this.content = content;
    this.tokens_dormmq$_0 = lazy(Token$TTag$tokens$lambda(this));
  }
  Object.defineProperty(Token$TTag.prototype, 'tokens', {
    get: function () {
      return this.tokens_dormmq$_0.value;
    }
  });
  function Token$TTag$tokens$lambda(this$TTag) {
    return function () {
      return ExprNode$Token$Companion_getInstance().tokenize_61zpoe$(this$TTag.content);
    };
  }
  Token$TTag.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TTag',
    interfaces: [Token]
  };
  Token$TTag.prototype.component1 = function () {
    return this.name;
  };
  Token$TTag.prototype.component2 = function () {
    return this.content;
  };
  Token$TTag.prototype.copy_puj7f4$ = function (name, content) {
    return new Token$TTag(name === void 0 ? this.name : name, content === void 0 ? this.content : content);
  };
  Token$TTag.prototype.toString = function () {
    return 'TTag(name=' + Kotlin.toString(this.name) + (', content=' + Kotlin.toString(this.content)) + ')';
  };
  Token$TTag.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.content) | 0;
    return result;
  };
  Token$TTag.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.content, other.content)))));
  };
  function Token$Companion() {
    Token$Companion_instance = this;
  }
  function Token$Companion$tokenize$emit(closure$out) {
    return function (token) {
      var tmp$ = Kotlin.isType(token, Token$TLiteral);
      if (tmp$) {
        tmp$ = token.content.length === 0;
      }
      if (tmp$)
        return;
      closure$out.add_11rb$(token);
    };
  }
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var trimStart = Kotlin.kotlin.text.trimStart_gw00vp$;
  var trimEnd = Kotlin.kotlin.text.trimEnd_gw00vp$;
  Token$Companion.prototype.tokenize_61zpoe$ = function (str) {
    var tmp$, tmp$_0, tmp$_1;
    var out = ArrayList_init();
    var lastPos = 0;
    var emit = Token$Companion$tokenize$emit(out);
    var pos = 0;
    loop: while (pos < str.length) {
      var c = str.charCodeAt((tmp$ = pos, pos = tmp$ + 1 | 0, tmp$));
      if (c === 123) {
        if (pos >= str.length)
          break;
        var c2 = str.charCodeAt((tmp$_0 = pos, pos = tmp$_0 + 1 | 0, tmp$_0));
        switch (c2) {
          case 35:
            var startPos = pos - 2 | 0;
            if (lastPos !== startPos) {
              emit(new Token$TLiteral(substring(str, until(lastPos, startPos))));
            }

            var endCommentP1 = indexOf(str, '#}', pos);
            var endComment = endCommentP1 >= 0 ? endCommentP1 + 2 | 0 : str.length;
            lastPos = endComment;
            pos = endComment;
            break;
          case 123:
          case 37:
            var startPos_0 = pos - 2 | 0;
            var pos2 = c2 === 123 ? indexOf(str, '}}', pos) : indexOf(str, '%}', pos);
            if (pos2 < 0)
              break loop;
            var trimLeft = str.charCodeAt(pos) === 45;
            var trimRight = str.charCodeAt(pos2 - 1 | 0) === 45;
            var p1 = trimLeft ? pos + 1 | 0 : pos;
            var p2 = trimRight ? pos2 - 1 | 0 : pos2;
            var $receiver = str.substring(p1, p2);
            var tmp$_2;
            var content = trim(Kotlin.isCharSequence(tmp$_2 = $receiver) ? tmp$_2 : throwCCE()).toString();
            if (lastPos !== startPos_0) {
              emit(new Token$TLiteral(substring(str, until(lastPos, startPos_0))));
            }

            if (c2 === 123) {
              tmp$_1 = new Token$TExpr(content);
            }
             else {
              var parts = split(content, Kotlin.charArrayOf(32), void 0, 2);
              tmp$_1 = new Token$TTag(parts.get_za3lpa$(0), 1 >= 0 && 1 <= get_lastIndex(parts) ? parts.get_za3lpa$(1) : '');
            }

            var token = tmp$_1;
            token.trimLeft = trimLeft;
            token.trimRight = trimRight;
            emit(token);
            pos = pos2 + 2 | 0;
            lastPos = pos;
            break;
        }
      }
    }
    var startIndex = lastPos;
    var endIndex = str.length;
    emit(new Token$TLiteral(str.substring(startIndex, endIndex)));
    var n = 0;
    for (var tmp$_3 = out.iterator(); tmp$_3.hasNext(); ++n) {
      var cur = tmp$_3.next();
      var tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
      if (Kotlin.isType(cur, Token$TLiteral)) {
        var trimStart_0 = (tmp$_5 = (tmp$_4 = getOrNull(out, n - 1 | 0)) != null ? tmp$_4.trimRight : null) != null ? tmp$_5 : false;
        var trimEnd_0 = (tmp$_7 = (tmp$_6 = getOrNull(out, n + 1 | 0)) != null ? tmp$_6.trimLeft : null) != null ? tmp$_7 : false;
        if (trimStart_0 && trimEnd_0) {
          var $receiver_0 = cur.content;
          var tmp$_9;
          tmp$_8 = new Token$TLiteral(trim(Kotlin.isCharSequence(tmp$_9 = $receiver_0) ? tmp$_9 : throwCCE()).toString());
        }
         else if (trimStart_0) {
          var $receiver_1 = cur.content;
          var tmp$_10;
          tmp$_8 = new Token$TLiteral(trimStart(Kotlin.isCharSequence(tmp$_10 = $receiver_1) ? tmp$_10 : throwCCE()).toString());
        }
         else if (trimEnd_0) {
          var $receiver_2 = cur.content;
          var tmp$_11;
          tmp$_8 = new Token$TLiteral(trimEnd(Kotlin.isCharSequence(tmp$_11 = $receiver_2) ? tmp$_11 : throwCCE()).toString());
        }
         else {
          tmp$_8 = cur;
        }
        out.set_wxm5ur$(n, tmp$_8);
      }
    }
    return out;
  };
  Token$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Token$Companion_instance = null;
  function Token$Companion_getInstance() {
    if (Token$Companion_instance === null) {
      new Token$Companion();
    }
    return Token$Companion_instance;
  }
  Token.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Token',
    interfaces: []
  };
  function Dynamic2() {
    Dynamic2_instance = this;
  }
  var Math_0 = Math;
  Dynamic2.prototype.binop_d0xna2$ = function (l, r, op) {
    switch (op) {
      case '+':
        if (typeof l === 'string')
          return l.toString() + this.toString_s8jyv4$(r);
        else if (Kotlin.isType(l, Iterable))
          return plus_0(this.toIterable_s8jyv4$(l), this.toIterable_s8jyv4$(r));
        else
          return this.toDouble_s8jyv4$(l) + this.toDouble_s8jyv4$(r);
      case '-':
        return this.toDouble_s8jyv4$(l) - this.toDouble_s8jyv4$(r);
      case '*':
        return this.toDouble_s8jyv4$(l) * this.toDouble_s8jyv4$(r);
      case '/':
        return this.toDouble_s8jyv4$(l) / this.toDouble_s8jyv4$(r);
      case '%':
        return this.toDouble_s8jyv4$(l) % this.toDouble_s8jyv4$(r);
      case '**':
        var $receiver = this.toDouble_s8jyv4$(l);
        var x = this.toDouble_s8jyv4$(r);
        return Math_0.pow($receiver, x);
      case '&':
        return this.toInt_s8jyv4$(l) & this.toInt_s8jyv4$(r);
      case 'or':
        return this.toInt_s8jyv4$(l) | this.toInt_s8jyv4$(r);
      case '^':
        return this.toInt_s8jyv4$(l) ^ this.toInt_s8jyv4$(r);
      case '&&':
        return this.toBool_s8jyv4$(l) && this.toBool_s8jyv4$(r);
      case '||':
        return this.toBool_s8jyv4$(l) || this.toBool_s8jyv4$(r);
      case '==':
        if (Kotlin.isNumber(l) && Kotlin.isNumber(r)) {
          return numberToDouble(l) === numberToDouble(r);
        }
         else {
          return equals(l, r);
        }

      case '!=':
        if (Kotlin.isNumber(l) && Kotlin.isNumber(r)) {
          return numberToDouble(l) !== numberToDouble(r);
        }
         else {
          return !equals(l, r);
        }

      case '<':
        return this.compare_oaftn8$(l, r) < 0;
      case '<=':
        return this.compare_oaftn8$(l, r) <= 0;
      case '>':
        return this.compare_oaftn8$(l, r) > 0;
      case '>=':
        return this.compare_oaftn8$(l, r) >= 0;
      case 'in':
        return this.contains_oaftn8$(r, l);
      case '?:':
        return this.toBool_s8jyv4$(l) ? l : r;
      default:return noImpl("Not implemented binary operator '" + op + "'");
    }
  };
  Dynamic2.prototype.unop_hvn9da$ = function (r, op) {
    switch (op) {
      case '+':
        return r;
      case '-':
        return -this.toDouble_s8jyv4$(r);
      case '~':
        return ~this.toInt_s8jyv4$(r);
      case '!':
        return !this.toBool_s8jyv4$(r);
      default:return noImpl('Not implemented unary operator ' + op);
    }
  };
  Dynamic2.prototype.contains_oaftn8$ = function (collection, element) {
    if (Kotlin.isType(collection, Set))
      return collection.contains_11rb$(element);
    else
      return this.toList_s8jyv4$(collection).contains_11rb$(element);
  };
  Dynamic2.prototype.compare_oaftn8$ = function (l, r) {
    if (Kotlin.isNumber(l) && Kotlin.isNumber(r)) {
      return Kotlin.compareTo(numberToDouble(l), numberToDouble(r));
    }
    var lc = this.toComparable_s8jyv4$(l);
    var rc = this.toComparable_s8jyv4$(r);
    if (Kotlin.getKClassFromExpression(lc).isInstance_s8jyv4$(rc)) {
      return Kotlin.compareTo(lc, rc);
    }
     else {
      return -1;
    }
  };
  Dynamic2.prototype.toComparable_s8jyv4$ = function (it) {
    var tmp$, tmp$_0, tmp$_1;
    if (it == null)
      return Kotlin.isComparable(tmp$ = 0) ? tmp$ : throwCCE();
    else if (Kotlin.isComparable(it))
      return Kotlin.isComparable(tmp$_0 = it) ? tmp$_0 : throwCCE();
    else
      return Kotlin.isComparable(tmp$_1 = it.toString()) ? tmp$_1 : throwCCE();
  };
  Dynamic2.prototype.toBool_s8jyv4$ = function (it) {
    var tmp$;
    if (it == null)
      return false;
    else
      return (tmp$ = this.toBoolOrNull_s8jyv4$(it)) != null ? tmp$ : true;
  };
  Dynamic2.prototype.toBoolOrNull_s8jyv4$ = function (it) {
    if (it == null)
      return null;
    else if (typeof it === 'boolean')
      return it;
    else if (Kotlin.isNumber(it))
      return numberToDouble(it) !== 0.0;
    else if (typeof it === 'string') {
      return it.length > 0 && !equals(it, '0') && !equals(it, 'false');
    }
     else
      return null;
  };
  Dynamic2.prototype.toNumber_s8jyv4$ = function (it) {
    if (it == null)
      return 0.0;
    else if (Kotlin.isNumber(it))
      return it;
    else
      return this.toNumber_pdl1vz$(it.toString());
  };
  Dynamic2.prototype.toNumber_pdl1vz$ = function ($receiver) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = (tmp$ = toIntOrNull($receiver)) == null || Kotlin.isNumber(tmp$) ? tmp$ : null) != null ? tmp$_0 : toDoubleOrNull($receiver)) != null ? tmp$_1 : kotlin_js_internal_DoubleCompanionObject.NaN;
  };
  Dynamic2.prototype.toInt_s8jyv4$ = function (it) {
    return numberToInt(this.toNumber_s8jyv4$(it));
  };
  Dynamic2.prototype.toLong_s8jyv4$ = function (it) {
    return numberToLong(this.toNumber_s8jyv4$(it));
  };
  Dynamic2.prototype.toDouble_s8jyv4$ = function (it) {
    return numberToDouble(this.toNumber_s8jyv4$(it));
  };
  Dynamic2.prototype.toString_s8jyv4$ = function (value) {
    if (value == null)
      return '';
    else if (typeof value === 'string')
      return value;
    else if (typeof value === 'number')
      if (equals(value, numberToInt(value))) {
        return numberToInt(value).toString();
      }
       else {
        return value.toString();
      }
     else if (Kotlin.isType(value, Iterable)) {
      var destination = ArrayList_init_0(collectionSizeOrDefault(value, 10));
      var tmp$;
      tmp$ = value.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(this.toString_s8jyv4$(item));
      }
      return '[' + joinToString(destination, ', ') + ']';
    }
     else if (Kotlin.isType(value, Map)) {
      var destination_0 = ArrayList_init_0(value.size);
      var tmp$_0;
      tmp$_0 = value.entries.iterator();
      while (tmp$_0.hasNext()) {
        var item_0 = tmp$_0.next();
        destination_0.add_11rb$(quote(this.toString_s8jyv4$(item_0.key)) + ': ' + this.toString_s8jyv4$(item_0.value));
      }
      return '{' + joinToString(destination_0, ', ') + '}';
    }
     else
      return value.toString();
  };
  Dynamic2.prototype.length_s8jyv4$ = function (subject) {
    if (subject == null)
      return 0;
    else if (Kotlin.isArray(subject))
      return subject.length;
    else if (Kotlin.isType(subject, List))
      return subject.size;
    else if (Kotlin.isType(subject, Map))
      return subject.size;
    else if (Kotlin.isType(subject, Iterable))
      return count(subject);
    else
      return subject.toString().length;
  };
  Dynamic2.prototype.toList_s8jyv4$ = function (it) {
    return toList(this.toIterable_s8jyv4$(it));
  };
  Dynamic2.prototype.toIterable_s8jyv4$ = function (it) {
    if (it == null) {
      return emptyList();
    }
     else if (Kotlin.isType(it, Iterable))
      return it;
    else if (Kotlin.isCharSequence(it))
      return toList_0(it);
    else if (Kotlin.isType(it, Map))
      return toList_1(it);
    else {
      return emptyList();
    }
  };
  function Coroutine$accessAny_dsjah6$($this, instance_0, key_0, mapper_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$instance = instance_0;
    this.local$key = key_0;
    this.local$mapper = mapper_0;
  }
  Coroutine$accessAny_dsjah6$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$accessAny_dsjah6$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$accessAny_dsjah6$.prototype.constructor = Coroutine$accessAny_dsjah6$;
  Coroutine$accessAny_dsjah6$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            if (this.local$instance == null) {
              return null;
            }
             else {
              if (Kotlin.isType(this.local$instance, Map)) {
                var tmp$_1;
                return (Kotlin.isType(tmp$_1 = this.local$instance, Map) ? tmp$_1 : throwCCE()).get_11rb$(this.local$key);
              }
               else {
                if (Kotlin.isType(this.local$instance, Iterable)) {
                  return toList(this.local$instance).get_za3lpa$(this.$this.toInt_s8jyv4$(this.local$key));
                }
                 else {
                  var keyStr = this.$this.toDynamicString_mzud1t$(this.local$key);
                  if (this.local$mapper.hasProperty_hwpqgh$(this.local$instance, keyStr)) {
                    this.state_0 = 4;
                    this.result_0 = this.local$mapper.get_hfmcy5$(this.local$instance, this.local$key, this);
                    if (this.result_0 === COROUTINE_SUSPENDED)
                      return COROUTINE_SUSPENDED;
                    continue;
                  }
                   else {
                    if (this.local$mapper.hasMethod_hwpqgh$(this.local$instance, keyStr)) {
                      this.state_0 = 2;
                      this.result_0 = this.local$mapper.invokeAsync_22tw1l$(Kotlin.isType(tmp$ = Kotlin.getKClassFromExpression(this.local$instance), KClass) ? tmp$ : throwCCE(), (tmp$_0 = this.local$instance) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE(), keyStr, emptyList(), this);
                      if (this.result_0 === COROUTINE_SUSPENDED)
                        return COROUTINE_SUSPENDED;
                      continue;
                    }
                     else {
                      return null;
                    }
                  }
                }
              }
            }

          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          case 3:
            this.state_0 = 5;
            continue;
          case 4:
            return this.result_0;
          case 5:
            this.state_0 = 6;
            continue;
          case 6:
            this.state_0 = 7;
            continue;
          case 7:
            this.state_0 = 8;
            continue;
          case 8:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  Dynamic2.prototype.accessAny_dsjah6$ = function (instance_0, key_0, mapper_0, continuation_0, suspended) {
    var instance_1 = new Coroutine$accessAny_dsjah6$(this, instance_0, key_0, mapper_0, continuation_0);
    if (suspended)
      return instance_1;
    else
      return instance_1.doResume(null);
  };
  function Coroutine$setAny_lh00bm$($this, instance_0, key_0, value_0, mapper_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$set$result = void 0;
    this.local$instance = instance_0;
    this.local$key = key_0;
    this.local$value = value_0;
    this.local$mapper = mapper_0;
  }
  Coroutine$setAny_lh00bm$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$setAny_lh00bm$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$setAny_lh00bm$.prototype.constructor = Coroutine$setAny_lh00bm$;
  Coroutine$setAny_lh00bm$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1, tmp$_2;
            if (this.local$instance == null) {
              return Unit;
            }
             else {
              if (Kotlin.isType(this.local$instance, MutableMap)) {
                (Kotlin.isType(tmp$ = this.local$instance, MutableMap) ? tmp$ : throwCCE()).put_xwzc9p$(this.local$key, this.local$value);
                return this.local$set$result;
              }
               else {
                if (Kotlin.isType(this.local$instance, MutableList)) {
                  return (Kotlin.isType(tmp$_0 = this.local$instance, MutableList) ? tmp$_0 : throwCCE()).set_wxm5ur$(this.$this.toInt_s8jyv4$(this.local$key), this.local$value);
                }
                 else {
                  if (this.local$mapper.hasProperty_hwpqgh$(this.local$instance, this.$this.toDynamicString_mzud1t$(this.local$key))) {
                    this.state_0 = 4;
                    this.result_0 = this.local$mapper.set_uasbd3$(this.local$instance, this.local$key, this.local$value, this);
                    if (this.result_0 === COROUTINE_SUSPENDED)
                      return COROUTINE_SUSPENDED;
                    continue;
                  }
                   else {
                    if (this.local$mapper.hasMethod_hwpqgh$(this.local$instance, this.$this.toDynamicString_mzud1t$(this.local$key))) {
                      this.state_0 = 2;
                      this.result_0 = this.local$mapper.invokeAsync_22tw1l$(Kotlin.isType(tmp$_1 = Kotlin.getKClassFromExpression(this.local$instance), KClass) ? tmp$_1 : throwCCE(), (tmp$_2 = this.local$instance) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE(), this.$this.toDynamicString_mzud1t$(this.local$key), listOf(this.local$value), this);
                      if (this.result_0 === COROUTINE_SUSPENDED)
                        return COROUTINE_SUSPENDED;
                      continue;
                    }
                     else {
                      return Unit;
                    }
                  }
                }
              }
            }

          case 1:
            throw this.exception_0;
          case 2:
            return Unit;
          case 3:
            this.state_0 = 5;
            continue;
          case 4:
            return this.result_0;
          case 5:
            this.state_0 = 6;
            continue;
          case 6:
            this.state_0 = 7;
            continue;
          case 7:
            this.state_0 = 8;
            continue;
          case 8:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  Dynamic2.prototype.setAny_lh00bm$ = function (instance_0, key_0, value_0, mapper_0, continuation_0, suspended) {
    var instance_1 = new Coroutine$setAny_lh00bm$(this, instance_0, key_0, value_0, mapper_0, continuation_0);
    if (suspended)
      return instance_1;
    else
      return instance_1.doResume(null);
  };
  Dynamic2.prototype.callAny_epoyat$ = function (any, args, mapper, continuation) {
    return this.callAny_eg2jo1$(any, 'invoke', args, mapper, continuation);
  };
  function Coroutine$callAny_eg2jo1$($this, any_0, methodName_0, args_0, mapper_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$any = any_0;
    this.local$methodName = methodName_0;
    this.local$args = args_0;
    this.local$mapper = mapper_0;
  }
  Coroutine$callAny_eg2jo1$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$callAny_eg2jo1$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$callAny_eg2jo1$.prototype.constructor = Coroutine$callAny_eg2jo1$;
  Coroutine$callAny_eg2jo1$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if (this.local$any == null) {
              return null;
            }
             else {
              this.state_0 = 2;
              this.result_0 = this.local$mapper.invokeAsync_22tw1l$(Kotlin.isType(tmp$ = Kotlin.getKClassFromExpression(this.local$any), KClass) ? tmp$ : throwCCE(), this.local$any, this.$this.toDynamicString_mzud1t$(this.local$methodName), this.local$args, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          case 3:
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  Dynamic2.prototype.callAny_eg2jo1$ = function (any_0, methodName_0, args_0, mapper_0, continuation_0, suspended) {
    var instance = new Coroutine$callAny_eg2jo1$(this, any_0, methodName_0, args_0, mapper_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  Dynamic2.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Dynamic2',
    interfaces: [DynamicContext]
  };
  var Dynamic2_instance = null;
  function Dynamic2_getInstance() {
    if (Dynamic2_instance === null) {
      new Dynamic2();
    }
    return Dynamic2_instance;
  }
  function DynamicContext() {
  }
  DynamicContext.prototype.toDynamicString_mzud1t$ = function ($receiver) {
    return Dynamic2_getInstance().toString_s8jyv4$($receiver);
  };
  DynamicContext.prototype.toDynamicBool_mzud1t$ = function ($receiver) {
    return Dynamic2_getInstance().toBool_s8jyv4$($receiver);
  };
  DynamicContext.prototype.toDynamicInt_mzud1t$ = function ($receiver) {
    return Dynamic2_getInstance().toInt_s8jyv4$($receiver);
  };
  DynamicContext.prototype.toDynamicList_mzud1t$ = function ($receiver) {
    return Dynamic2_getInstance().toList_s8jyv4$($receiver);
  };
  DynamicContext.prototype.dynamicLength_mzud1t$ = function ($receiver) {
    return Dynamic2_getInstance().length_s8jyv4$($receiver);
  };
  DynamicContext.prototype.dynamicGet_slmq2v$ = function ($receiver, key, mapper, continuation) {
    return Dynamic2_getInstance().accessAny_dsjah6$($receiver, key, mapper, continuation);
  };
  DynamicContext.prototype.dynamicSet_b48med$ = function ($receiver, key, value, mapper, continuation) {
    return Dynamic2_getInstance().setAny_lh00bm$($receiver, key, value, mapper, continuation);
  };
  DynamicContext.prototype.dynamicCall_ihivg6$ = function ($receiver, args, mapper, continuation) {
    return Dynamic2_getInstance().callAny_epoyat$($receiver, toList_2(args), mapper, continuation);
  };
  DynamicContext.prototype.dynamicCallMethod_w3s0wy$ = function ($receiver, methodName, args, mapper, continuation) {
    return Dynamic2_getInstance().callAny_eg2jo1$($receiver, methodName, toList_2(args), mapper, continuation);
  };
  DynamicContext.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DynamicContext',
    interfaces: []
  };
  var DynamicContext_0 = defineInlineFunction('korte.com.soywiz.korte.dynamic.DynamicContext_2uec1k$', wrapFunction(function () {
    var dynamic = _.com.soywiz.korte.dynamic;
    return function (callback) {
      return callback(dynamic.Dynamic2);
    };
  }));
  function DynamicShapeRegister() {
  }
  DynamicShapeRegister.prototype.register_qtrk0b$ = function (items) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== items.length; ++tmp$) {
      var item = items[tmp$];
      this.register_12czou$(item);
    }
    return this;
  };
  DynamicShapeRegister.prototype.register_cmncrc$ = function (items) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== items.length; ++tmp$) {
      var item = items[tmp$];
      this.register_4ja591$(item);
    }
    return this;
  };
  DynamicShapeRegister.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DynamicShapeRegister',
    interfaces: []
  };
  function DynamicShape() {
    this.propertiesByName_0 = LinkedHashMap_init();
    this.methodsByName_0 = LinkedHashMap_init();
    this.smethodsByName_0 = LinkedHashMap_init();
  }
  DynamicShape.prototype.register_12czou$ = function (prop) {
    var $receiver = this.propertiesByName_0;
    var key = prop.callableName;
    $receiver.put_xwzc9p$(key, prop);
    return this;
  };
  DynamicShape.prototype.register_737aa4$ = function (name, callback) {
    this.smethodsByName_0.put_xwzc9p$(name, callback);
    return this;
  };
  DynamicShape.prototype.register_4ja591$ = function (callable) {
    var $receiver = this.methodsByName_0;
    var key = callable.callableName;
    $receiver.put_xwzc9p$(key, callable);
    return this;
  };
  DynamicShape.prototype.hasProp_61zpoe$ = function (key) {
    var $receiver = this.propertiesByName_0;
    var tmp$;
    return (Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(key);
  };
  DynamicShape.prototype.hasMethod_61zpoe$ = function (key) {
    var $receiver = this.methodsByName_0;
    var tmp$;
    var tmp$_0 = (Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(key);
    if (!tmp$_0) {
      var $receiver_0 = this.smethodsByName_0;
      var tmp$_1;
      tmp$_0 = (Kotlin.isType(tmp$_1 = $receiver_0, Map) ? tmp$_1 : throwCCE()).containsKey_11rb$(key);
    }
    return tmp$_0;
  };
  DynamicShape.prototype.getProp_19pj23$ = function (instance, key) {
    var tmp$, tmp$_0;
    var $receiver = this.propertiesByName_0;
    var tmp$_1;
    return (tmp$_0 = (tmp$ = (Kotlin.isType(tmp$_1 = $receiver, Map) ? tmp$_1 : throwCCE()).get_11rb$(key)) == null || Kotlin.isType(tmp$, KProperty1) ? tmp$ : null) != null ? tmp$_0.get(instance) : null;
  };
  DynamicShape.prototype.setProp_c1augh$ = function (instance, key, value) {
    var tmp$, tmp$_0;
    var $receiver = this.propertiesByName_0;
    var tmp$_1;
    (tmp$_0 = (tmp$ = (Kotlin.isType(tmp$_1 = $receiver, Map) ? tmp$_1 : throwCCE()).get_11rb$(key)) == null || Kotlin.isType(tmp$, KMutableProperty1) ? tmp$ : null) != null ? (tmp$_0.set(instance, value), Unit) : null;
  };
  function Coroutine$callMethod_gtsr28$($this, instance_0, key_0, args_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$instance = instance_0;
    this.local$key = key_0;
    this.local$args = args_0;
  }
  Coroutine$callMethod_gtsr28$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$callMethod_gtsr28$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$callMethod_gtsr28$.prototype.constructor = Coroutine$callMethod_gtsr28$;
  Coroutine$callMethod_gtsr28$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
            var $receiver = this.$this.smethodsByName_0;
            var tmp$_4;
            var smethod = (Kotlin.isType(tmp$_4 = $receiver, Map) ? tmp$_4 : throwCCE()).get_11rb$(this.local$key);
            if (smethod != null) {
              this.state_0 = 2;
              this.result_0 = smethod(this.local$instance, this.local$args, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          case 3:
            var $receiver_0 = this.$this.methodsByName_0;
            var tmp$_5;
            var method = (Kotlin.isType(tmp$_5 = $receiver_0, Map) ? tmp$_5 : throwCCE()).get_11rb$(this.local$key);
            if (method != null) {
              if (typeof method === 'function')
                tmp$_3 = method();
              else if (typeof method === 'function')
                tmp$_3 = (typeof (tmp$ = method) === 'function' ? tmp$ : throwCCE())(this.local$instance);
              else if (typeof method === 'function')
                tmp$_3 = (typeof (tmp$_0 = method) === 'function' ? tmp$_0 : throwCCE())(this.local$instance, this.local$args.get_za3lpa$(0));
              else if (typeof method === 'function')
                tmp$_3 = (typeof (tmp$_1 = method) === 'function' ? tmp$_1 : throwCCE())(this.local$instance, this.local$args.get_za3lpa$(0), this.local$args.get_za3lpa$(1));
              else if (typeof method === 'function')
                tmp$_3 = (typeof (tmp$_2 = method) === 'function' ? tmp$_2 : throwCCE())(this.local$instance, this.local$args.get_za3lpa$(0), this.local$args.get_za3lpa$(1), this.local$args.get_za3lpa$(2));
              else {
                throw IllegalStateException_init('TYPE not a KFunction'.toString());
              }
              return tmp$_3;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            return null;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  DynamicShape.prototype.callMethod_gtsr28$ = function (instance_0, key_0, args_0, continuation_0, suspended) {
    var instance_1 = new Coroutine$callMethod_gtsr28$(this, instance_0, key_0, args_0, continuation_0);
    if (suspended)
      return instance_1;
    else
      return instance_1.doResume(null);
  };
  DynamicShape.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DynamicShape',
    interfaces: [DynamicShapeRegister]
  };
  function DynamicTypeScope() {
    DynamicTypeScope_instance = this;
  }
  DynamicTypeScope.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DynamicTypeScope',
    interfaces: []
  };
  var DynamicTypeScope_instance = null;
  function DynamicTypeScope_getInstance() {
    if (DynamicTypeScope_instance === null) {
      new DynamicTypeScope();
    }
    return DynamicTypeScope_instance;
  }
  function DynamicType$ObjectLiteral(closure$callback) {
    var $receiver = new DynamicShape();
    closure$callback($receiver);
    this.shape = $receiver;
  }
  DynamicType$ObjectLiteral.prototype.get___dynamicShape_xmwasg$ = function ($receiver) {
    return this.shape;
  };
  DynamicType$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [DynamicType_0]
  };
  function DynamicType(callback) {
    return new DynamicType$ObjectLiteral(callback);
  }
  function DynamicType_0() {
  }
  DynamicType_0.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DynamicType',
    interfaces: []
  };
  function ObjectMapper2() {
  }
  ObjectMapper2.prototype.get_dynamicShape_5vwth8$ = function ($receiver) {
    var tmp$;
    return Kotlin.isType(tmp$ = $receiver.get___dynamicShape_xmwasg$(DynamicTypeScope_getInstance()), DynamicShape) ? tmp$ : throwCCE();
  };
  ObjectMapper2.prototype.hasProperty_hwpqgh$ = function (instance, key) {
    if (Kotlin.isType(instance, DynamicType_0))
      return this.get_dynamicShape_5vwth8$(instance).hasProp_61zpoe$(key);
    return false;
  };
  ObjectMapper2.prototype.hasMethod_hwpqgh$ = function (instance, key) {
    if (Kotlin.isType(instance, DynamicType_0))
      return this.get_dynamicShape_5vwth8$(instance).hasMethod_61zpoe$(key);
    return false;
  };
  function Coroutine$invokeAsync_22tw1l$($this, type_0, instance_0, key_0, args_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$instance = instance_0;
    this.local$key = key_0;
    this.local$args = args_0;
  }
  Coroutine$invokeAsync_22tw1l$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$invokeAsync_22tw1l$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$invokeAsync_22tw1l$.prototype.constructor = Coroutine$invokeAsync_22tw1l$;
  Coroutine$invokeAsync_22tw1l$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (Kotlin.isType(this.local$instance, DynamicType_0)) {
              this.state_0 = 2;
              this.result_0 = this.$this.get_dynamicShape_5vwth8$(this.local$instance).callMethod_gtsr28$(this.local$instance, this.local$key, this.local$args, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          case 3:
            return null;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  ObjectMapper2.prototype.invokeAsync_22tw1l$ = function (type_0, instance_0, key_0, args_0, continuation_0, suspended) {
    var instance_1 = new Coroutine$invokeAsync_22tw1l$(this, type_0, instance_0, key_0, args_0, continuation_0);
    if (suspended)
      return instance_1;
    else
      return instance_1.doResume(null);
  };
  ObjectMapper2.prototype.set_uasbd3$ = function (instance, key, value, continuation) {
    if (Kotlin.isType(instance, DynamicType_0))
      return this.get_dynamicShape_5vwth8$(instance).setProp_c1augh$(instance, key, value);
  };
  ObjectMapper2.prototype.get_hfmcy5$ = function (instance, key, continuation) {
    if (Kotlin.isType(instance, DynamicType_0))
      return this.get_dynamicShape_5vwth8$(instance).getProp_19pj23$(instance, key);
    return null;
  };
  ObjectMapper2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ObjectMapper2',
    interfaces: []
  };
  var KORTE_VERSION;
  var alloc2 = defineInlineFunction('korte.com.soywiz.korte.internal.alloc2_jg02o$', function ($receiver, callback) {
    var temp = $receiver.alloc();
    try {
      return callback(temp);
    }
    finally {
      $receiver.free_11rb$(temp);
    }
  });
  function AsyncTextWriterContainer() {
  }
  AsyncTextWriterContainer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AsyncTextWriterContainer',
    interfaces: []
  };
  function JsObjectMapper2() {
    ObjectMapper2.call(this);
  }
  JsObjectMapper2.prototype.hasProperty_hwpqgh$ = function (instance, key) {
    var tof = typeof instance[key];
    return tof !== 'undefined' && tof !== 'function';
  };
  JsObjectMapper2.prototype.hasMethod_hwpqgh$ = function (instance, key) {
    return typeof instance[key] !== 'undefined';
  };
  var Result = Kotlin.kotlin.Result;
  var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
  function JsObjectMapper2$invokeAsync$lambda(closure$function, closure$args, closure$instance) {
    return function (c) {
      var tmp$;
      var arity = closure$function.length;
      if (closure$args.size !== arity)
        tmp$ = plus(closure$args, listOf(c));
      else
        tmp$ = closure$args;
      var rargs = tmp$;
      try {
        var result = closure$function.apply(closure$instance, copyToArray(rargs));
        if (result != COROUTINE_SUSPENDED) {
          c.resumeWith_tl1gpc$(new Result(result));
        }
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          var exception = e;
          c.resumeWith_tl1gpc$(new Result(createFailure(exception)));
        }
         else
          throw e;
      }
      return Unit;
    };
  }
  var intercepted = Kotlin.kotlin.coroutines.intrinsics.intercepted_f9mg25$;
  var SafeContinuation_init = Kotlin.kotlin.coroutines.SafeContinuation_init_wj8d80$;
  function suspendCoroutine$lambda(closure$block) {
    return function (c) {
      var safe = SafeContinuation_init(intercepted(c));
      closure$block(safe);
      return safe.getOrThrow();
    };
  }
  function Coroutine$invokeAsync_22tw1l$_0($this, type_0, instance_0, key_0, args_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$type = type_0;
    this.local$instance = instance_0;
    this.local$key = key_0;
    this.local$args = args_0;
  }
  Coroutine$invokeAsync_22tw1l$_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$invokeAsync_22tw1l$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$invokeAsync_22tw1l$_0.prototype.constructor = Coroutine$invokeAsync_22tw1l$_0;
  Coroutine$invokeAsync_22tw1l$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$instance[this.local$key];
            if (this.local$tmp$ == null) {
              this.state_0 = 2;
              this.result_0 = ObjectMapper2.prototype.invokeAsync_22tw1l$.call(this.$this, this.local$type, this.local$instance, this.local$key, this.local$args, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          case 3:
            var function_0 = this.local$tmp$;
            this.state_0 = 4;
            this.result_0 = suspendCoroutine$lambda(JsObjectMapper2$invokeAsync$lambda(function_0, this.local$args, this.local$instance))(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.result_0;
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
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
  JsObjectMapper2.prototype.invokeAsync_22tw1l$ = function (type_0, instance_0, key_0, args_0, continuation_0, suspended) {
    var instance_1 = new Coroutine$invokeAsync_22tw1l$_0(this, type_0, instance_0, key_0, args_0, continuation_0);
    if (suspended)
      return instance_1;
    else
      return instance_1.doResume(null);
  };
  JsObjectMapper2.prototype.set_uasbd3$ = function (instance, key, value, continuation) {
    instance[key] = value;
  };
  JsObjectMapper2.prototype.get_hfmcy5$ = function (instance, key, continuation) {
    return instance[key];
  };
  JsObjectMapper2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsObjectMapper2',
    interfaces: [ObjectMapper2]
  };
  var Mapper2;
  Block$Companion.prototype.Parse = Block$Companion$Parse;
  Object.defineProperty(Block, 'Companion', {
    get: Block$Companion_getInstance
  });
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$korte = package$soywiz.korte || (package$soywiz.korte = {});
  package$korte.Block = Block;
  $$importsForInline$$.kds = $module$kds;
  package$korte.get_debugPrintln_4tl21a$ = get_debugPrintln;
  package$korte.set_debugPrintln_6j3ls1$ = set_debugPrintln;
  DefaultBlocks.prototype.BlockBlock = DefaultBlocks$BlockBlock;
  $$importsForInline$$.korte = _;
  DefaultBlocks.prototype.BlockCapture = DefaultBlocks$BlockCapture;
  DefaultBlocks.prototype.BlockDebug = DefaultBlocks$BlockDebug;
  DefaultBlocks.prototype.BlockExpr = DefaultBlocks$BlockExpr;
  DefaultBlocks.prototype.BlockExtends = DefaultBlocks$BlockExtends;
  DefaultBlocks.prototype.BlockFor = DefaultBlocks$BlockFor;
  DefaultBlocks.prototype.BlockGroup = DefaultBlocks$BlockGroup;
  DefaultBlocks.prototype.BlockIf = DefaultBlocks$BlockIf;
  DefaultBlocks.prototype.BlockImport = DefaultBlocks$BlockImport;
  DefaultBlocks.prototype.BlockInclude = DefaultBlocks$BlockInclude;
  DefaultBlocks.prototype.BlockMacro = DefaultBlocks$BlockMacro;
  DefaultBlocks.prototype.BlockSet = DefaultBlocks$BlockSet;
  DefaultBlocks.prototype.BlockText = DefaultBlocks$BlockText;
  Object.defineProperty(package$korte, 'DefaultBlocks', {
    get: DefaultBlocks_getInstance
  });
  Object.defineProperty(package$korte, 'DefaultFilters', {
    get: DefaultFilters_getInstance
  });
  Object.defineProperty(package$korte, 'DefaultFunctions', {
    get: DefaultFunctions_getInstance
  });
  Object.defineProperty(package$korte, 'DefaultTags', {
    get: DefaultTags_getInstance
  });
  ExprNode.VAR = ExprNode$VAR;
  ExprNode.LIT = ExprNode$LIT;
  ExprNode.ARRAY_LIT = ExprNode$ARRAY_LIT;
  ExprNode.OBJECT_LIT = ExprNode$OBJECT_LIT;
  ExprNode.FILTER = ExprNode$FILTER;
  ExprNode.ACCESS = ExprNode$ACCESS;
  ExprNode.CALL = ExprNode$CALL;
  ExprNode.BINOP = ExprNode$BINOP;
  ExprNode.TERNARY = ExprNode$TERNARY;
  ExprNode.UNOP = ExprNode$UNOP;
  Object.defineProperty(ExprNode, 'Companion', {
    get: ExprNode$Companion_getInstance
  });
  ExprNode$Token.TId = ExprNode$Token$TId;
  ExprNode$Token.TNumber = ExprNode$Token$TNumber;
  ExprNode$Token.TString = ExprNode$Token$TString;
  ExprNode$Token.TOperator = ExprNode$Token$TOperator;
  ExprNode$Token.TEnd = ExprNode$Token$TEnd;
  $$importsForInline$$.korio = $module$korio;
  Object.defineProperty(ExprNode$Token, 'Companion', {
    get: ExprNode$Token$Companion_getInstance
  });
  ExprNode.Token = ExprNode$Token;
  package$korte.ExprNode = ExprNode;
  package$korte.tryRead_5tyh7i$ = tryRead;
  package$korte.expectPeek_5tyh7i$ = expectPeek;
  package$korte.expect_5tyh7i$ = expect;
  package$korte.parseExpr_lmtahz$ = parseExpr;
  package$korte.parseId_lmtahz$ = parseId;
  package$korte.parseIdList_lmtahz$ = parseIdList;
  Filter.Ctx = Filter$Ctx;
  package$korte.Filter = Filter;
  Object.defineProperty(package$korte, 'Korte', {
    get: Korte_getInstance
  });
  package$korte.RawString = RawString;
  package$korte.toEscapedString_mzud1t$ = toEscapedString;
  Tag.Part = Tag$Part;
  Tag.BuildContext = Tag$BuildContext;
  package$korte.Tag = Tag;
  package$korte.TeFunction = TeFunction;
  Template.ParseContext = Template$ParseContext;
  Template.Scope = Template$Scope;
  Template.ExecResult = Template$ExecResult;
  Template.DynamicInvokable = Template$DynamicInvokable;
  Template.Macro = Template$Macro;
  Template.BlockInTemplateEval = Template$BlockInTemplateEval;
  Template$TemplateEvalContext.WithArgs = Template$TemplateEvalContext$WithArgs;
  Template.TemplateEvalContext = Template$TemplateEvalContext;
  Template.StopEvaluatingException = Template$StopEvaluatingException;
  package$korte.Template = Template;
  Template.EvalContext = Template$EvalContext;
  package$korte.Template_dz0gfh$ = Template_0;
  package$korte.TemplateConfig = TemplateConfig;
  Templates.AsyncCache = Templates$AsyncCache;
  package$korte.Templates = Templates;
  Token.TLiteral = Token$TLiteral;
  Token.TExpr = Token$TExpr;
  Token.TTag = Token$TTag;
  Object.defineProperty(Token, 'Companion', {
    get: Token$Companion_getInstance
  });
  package$korte.Token = Token;
  var package$dynamic = package$korte.dynamic || (package$korte.dynamic = {});
  Object.defineProperty(package$dynamic, 'Dynamic2', {
    get: Dynamic2_getInstance
  });
  package$dynamic.DynamicContext = DynamicContext;
  package$dynamic.DynamicContext_2uec1k$ = DynamicContext_0;
  package$dynamic.DynamicShapeRegister = DynamicShapeRegister;
  package$dynamic.DynamicShape = DynamicShape;
  Object.defineProperty(package$dynamic, 'DynamicTypeScope', {
    get: DynamicTypeScope_getInstance
  });
  package$dynamic.DynamicType_x4bw32$ = DynamicType;
  package$dynamic.DynamicType = DynamicType_0;
  package$dynamic.ObjectMapper2 = ObjectMapper2;
  var package$internal = package$korte.internal || (package$korte.internal = {});
  Object.defineProperty(package$internal, 'KORTE_VERSION_8be2vx$', {
    get: function () {
      return KORTE_VERSION;
    }
  });
  package$internal.alloc2_jg02o$ = alloc2;
  var package$util = package$korte.util || (package$korte.util = {});
  package$util.AsyncTextWriterContainer = AsyncTextWriterContainer;
  package$dynamic.JsObjectMapper2 = JsObjectMapper2;
  Object.defineProperty(package$dynamic, 'Mapper2', {
    get: function () {
      return Mapper2;
    }
  });
  Block.prototype.toDynamicString_mzud1t$ = DynamicContext.prototype.toDynamicString_mzud1t$;
  Block.prototype.toDynamicBool_mzud1t$ = DynamicContext.prototype.toDynamicBool_mzud1t$;
  Block.prototype.toDynamicInt_mzud1t$ = DynamicContext.prototype.toDynamicInt_mzud1t$;
  Block.prototype.toDynamicList_mzud1t$ = DynamicContext.prototype.toDynamicList_mzud1t$;
  Block.prototype.dynamicLength_mzud1t$ = DynamicContext.prototype.dynamicLength_mzud1t$;
  Block.prototype.dynamicGet_slmq2v$ = DynamicContext.prototype.dynamicGet_slmq2v$;
  Block.prototype.dynamicSet_b48med$ = DynamicContext.prototype.dynamicSet_b48med$;
  Block.prototype.dynamicCall_ihivg6$ = DynamicContext.prototype.dynamicCall_ihivg6$;
  Block.prototype.dynamicCallMethod_w3s0wy$ = DynamicContext.prototype.dynamicCallMethod_w3s0wy$;
  DefaultBlocks$BlockBlock.prototype.toDynamicString_mzud1t$ = Block.prototype.toDynamicString_mzud1t$;
  DefaultBlocks$BlockBlock.prototype.toDynamicBool_mzud1t$ = Block.prototype.toDynamicBool_mzud1t$;
  DefaultBlocks$BlockBlock.prototype.toDynamicInt_mzud1t$ = Block.prototype.toDynamicInt_mzud1t$;
  DefaultBlocks$BlockBlock.prototype.toDynamicList_mzud1t$ = Block.prototype.toDynamicList_mzud1t$;
  DefaultBlocks$BlockBlock.prototype.dynamicLength_mzud1t$ = Block.prototype.dynamicLength_mzud1t$;
  DefaultBlocks$BlockBlock.prototype.dynamicGet_slmq2v$ = Block.prototype.dynamicGet_slmq2v$;
  DefaultBlocks$BlockBlock.prototype.dynamicSet_b48med$ = Block.prototype.dynamicSet_b48med$;
  DefaultBlocks$BlockBlock.prototype.dynamicCall_ihivg6$ = Block.prototype.dynamicCall_ihivg6$;
  DefaultBlocks$BlockBlock.prototype.dynamicCallMethod_w3s0wy$ = Block.prototype.dynamicCallMethod_w3s0wy$;
  DefaultBlocks$BlockCapture.prototype.toDynamicString_mzud1t$ = Block.prototype.toDynamicString_mzud1t$;
  DefaultBlocks$BlockCapture.prototype.toDynamicBool_mzud1t$ = Block.prototype.toDynamicBool_mzud1t$;
  DefaultBlocks$BlockCapture.prototype.toDynamicInt_mzud1t$ = Block.prototype.toDynamicInt_mzud1t$;
  DefaultBlocks$BlockCapture.prototype.toDynamicList_mzud1t$ = Block.prototype.toDynamicList_mzud1t$;
  DefaultBlocks$BlockCapture.prototype.dynamicLength_mzud1t$ = Block.prototype.dynamicLength_mzud1t$;
  DefaultBlocks$BlockCapture.prototype.dynamicGet_slmq2v$ = Block.prototype.dynamicGet_slmq2v$;
  DefaultBlocks$BlockCapture.prototype.dynamicSet_b48med$ = Block.prototype.dynamicSet_b48med$;
  DefaultBlocks$BlockCapture.prototype.dynamicCall_ihivg6$ = Block.prototype.dynamicCall_ihivg6$;
  DefaultBlocks$BlockCapture.prototype.dynamicCallMethod_w3s0wy$ = Block.prototype.dynamicCallMethod_w3s0wy$;
  DefaultBlocks$BlockDebug.prototype.toDynamicString_mzud1t$ = Block.prototype.toDynamicString_mzud1t$;
  DefaultBlocks$BlockDebug.prototype.toDynamicBool_mzud1t$ = Block.prototype.toDynamicBool_mzud1t$;
  DefaultBlocks$BlockDebug.prototype.toDynamicInt_mzud1t$ = Block.prototype.toDynamicInt_mzud1t$;
  DefaultBlocks$BlockDebug.prototype.toDynamicList_mzud1t$ = Block.prototype.toDynamicList_mzud1t$;
  DefaultBlocks$BlockDebug.prototype.dynamicLength_mzud1t$ = Block.prototype.dynamicLength_mzud1t$;
  DefaultBlocks$BlockDebug.prototype.dynamicGet_slmq2v$ = Block.prototype.dynamicGet_slmq2v$;
  DefaultBlocks$BlockDebug.prototype.dynamicSet_b48med$ = Block.prototype.dynamicSet_b48med$;
  DefaultBlocks$BlockDebug.prototype.dynamicCall_ihivg6$ = Block.prototype.dynamicCall_ihivg6$;
  DefaultBlocks$BlockDebug.prototype.dynamicCallMethod_w3s0wy$ = Block.prototype.dynamicCallMethod_w3s0wy$;
  DefaultBlocks$BlockExpr.prototype.toDynamicString_mzud1t$ = Block.prototype.toDynamicString_mzud1t$;
  DefaultBlocks$BlockExpr.prototype.toDynamicBool_mzud1t$ = Block.prototype.toDynamicBool_mzud1t$;
  DefaultBlocks$BlockExpr.prototype.toDynamicInt_mzud1t$ = Block.prototype.toDynamicInt_mzud1t$;
  DefaultBlocks$BlockExpr.prototype.toDynamicList_mzud1t$ = Block.prototype.toDynamicList_mzud1t$;
  DefaultBlocks$BlockExpr.prototype.dynamicLength_mzud1t$ = Block.prototype.dynamicLength_mzud1t$;
  DefaultBlocks$BlockExpr.prototype.dynamicGet_slmq2v$ = Block.prototype.dynamicGet_slmq2v$;
  DefaultBlocks$BlockExpr.prototype.dynamicSet_b48med$ = Block.prototype.dynamicSet_b48med$;
  DefaultBlocks$BlockExpr.prototype.dynamicCall_ihivg6$ = Block.prototype.dynamicCall_ihivg6$;
  DefaultBlocks$BlockExpr.prototype.dynamicCallMethod_w3s0wy$ = Block.prototype.dynamicCallMethod_w3s0wy$;
  DefaultBlocks$BlockExtends.prototype.toDynamicString_mzud1t$ = Block.prototype.toDynamicString_mzud1t$;
  DefaultBlocks$BlockExtends.prototype.toDynamicBool_mzud1t$ = Block.prototype.toDynamicBool_mzud1t$;
  DefaultBlocks$BlockExtends.prototype.toDynamicInt_mzud1t$ = Block.prototype.toDynamicInt_mzud1t$;
  DefaultBlocks$BlockExtends.prototype.toDynamicList_mzud1t$ = Block.prototype.toDynamicList_mzud1t$;
  DefaultBlocks$BlockExtends.prototype.dynamicLength_mzud1t$ = Block.prototype.dynamicLength_mzud1t$;
  DefaultBlocks$BlockExtends.prototype.dynamicGet_slmq2v$ = Block.prototype.dynamicGet_slmq2v$;
  DefaultBlocks$BlockExtends.prototype.dynamicSet_b48med$ = Block.prototype.dynamicSet_b48med$;
  DefaultBlocks$BlockExtends.prototype.dynamicCall_ihivg6$ = Block.prototype.dynamicCall_ihivg6$;
  DefaultBlocks$BlockExtends.prototype.dynamicCallMethod_w3s0wy$ = Block.prototype.dynamicCallMethod_w3s0wy$;
  DefaultBlocks$BlockFor.prototype.toDynamicString_mzud1t$ = Block.prototype.toDynamicString_mzud1t$;
  DefaultBlocks$BlockFor.prototype.toDynamicBool_mzud1t$ = Block.prototype.toDynamicBool_mzud1t$;
  DefaultBlocks$BlockFor.prototype.toDynamicInt_mzud1t$ = Block.prototype.toDynamicInt_mzud1t$;
  DefaultBlocks$BlockFor.prototype.toDynamicList_mzud1t$ = Block.prototype.toDynamicList_mzud1t$;
  DefaultBlocks$BlockFor.prototype.dynamicLength_mzud1t$ = Block.prototype.dynamicLength_mzud1t$;
  DefaultBlocks$BlockFor.prototype.dynamicGet_slmq2v$ = Block.prototype.dynamicGet_slmq2v$;
  DefaultBlocks$BlockFor.prototype.dynamicSet_b48med$ = Block.prototype.dynamicSet_b48med$;
  DefaultBlocks$BlockFor.prototype.dynamicCall_ihivg6$ = Block.prototype.dynamicCall_ihivg6$;
  DefaultBlocks$BlockFor.prototype.dynamicCallMethod_w3s0wy$ = Block.prototype.dynamicCallMethod_w3s0wy$;
  DefaultBlocks$BlockGroup.prototype.toDynamicString_mzud1t$ = Block.prototype.toDynamicString_mzud1t$;
  DefaultBlocks$BlockGroup.prototype.toDynamicBool_mzud1t$ = Block.prototype.toDynamicBool_mzud1t$;
  DefaultBlocks$BlockGroup.prototype.toDynamicInt_mzud1t$ = Block.prototype.toDynamicInt_mzud1t$;
  DefaultBlocks$BlockGroup.prototype.toDynamicList_mzud1t$ = Block.prototype.toDynamicList_mzud1t$;
  DefaultBlocks$BlockGroup.prototype.dynamicLength_mzud1t$ = Block.prototype.dynamicLength_mzud1t$;
  DefaultBlocks$BlockGroup.prototype.dynamicGet_slmq2v$ = Block.prototype.dynamicGet_slmq2v$;
  DefaultBlocks$BlockGroup.prototype.dynamicSet_b48med$ = Block.prototype.dynamicSet_b48med$;
  DefaultBlocks$BlockGroup.prototype.dynamicCall_ihivg6$ = Block.prototype.dynamicCall_ihivg6$;
  DefaultBlocks$BlockGroup.prototype.dynamicCallMethod_w3s0wy$ = Block.prototype.dynamicCallMethod_w3s0wy$;
  DefaultBlocks$BlockIf.prototype.toDynamicString_mzud1t$ = Block.prototype.toDynamicString_mzud1t$;
  DefaultBlocks$BlockIf.prototype.toDynamicBool_mzud1t$ = Block.prototype.toDynamicBool_mzud1t$;
  DefaultBlocks$BlockIf.prototype.toDynamicInt_mzud1t$ = Block.prototype.toDynamicInt_mzud1t$;
  DefaultBlocks$BlockIf.prototype.toDynamicList_mzud1t$ = Block.prototype.toDynamicList_mzud1t$;
  DefaultBlocks$BlockIf.prototype.dynamicLength_mzud1t$ = Block.prototype.dynamicLength_mzud1t$;
  DefaultBlocks$BlockIf.prototype.dynamicGet_slmq2v$ = Block.prototype.dynamicGet_slmq2v$;
  DefaultBlocks$BlockIf.prototype.dynamicSet_b48med$ = Block.prototype.dynamicSet_b48med$;
  DefaultBlocks$BlockIf.prototype.dynamicCall_ihivg6$ = Block.prototype.dynamicCall_ihivg6$;
  DefaultBlocks$BlockIf.prototype.dynamicCallMethod_w3s0wy$ = Block.prototype.dynamicCallMethod_w3s0wy$;
  DefaultBlocks$BlockImport.prototype.toDynamicString_mzud1t$ = Block.prototype.toDynamicString_mzud1t$;
  DefaultBlocks$BlockImport.prototype.toDynamicBool_mzud1t$ = Block.prototype.toDynamicBool_mzud1t$;
  DefaultBlocks$BlockImport.prototype.toDynamicInt_mzud1t$ = Block.prototype.toDynamicInt_mzud1t$;
  DefaultBlocks$BlockImport.prototype.toDynamicList_mzud1t$ = Block.prototype.toDynamicList_mzud1t$;
  DefaultBlocks$BlockImport.prototype.dynamicLength_mzud1t$ = Block.prototype.dynamicLength_mzud1t$;
  DefaultBlocks$BlockImport.prototype.dynamicGet_slmq2v$ = Block.prototype.dynamicGet_slmq2v$;
  DefaultBlocks$BlockImport.prototype.dynamicSet_b48med$ = Block.prototype.dynamicSet_b48med$;
  DefaultBlocks$BlockImport.prototype.dynamicCall_ihivg6$ = Block.prototype.dynamicCall_ihivg6$;
  DefaultBlocks$BlockImport.prototype.dynamicCallMethod_w3s0wy$ = Block.prototype.dynamicCallMethod_w3s0wy$;
  DefaultBlocks$BlockInclude.prototype.toDynamicString_mzud1t$ = Block.prototype.toDynamicString_mzud1t$;
  DefaultBlocks$BlockInclude.prototype.toDynamicBool_mzud1t$ = Block.prototype.toDynamicBool_mzud1t$;
  DefaultBlocks$BlockInclude.prototype.toDynamicInt_mzud1t$ = Block.prototype.toDynamicInt_mzud1t$;
  DefaultBlocks$BlockInclude.prototype.toDynamicList_mzud1t$ = Block.prototype.toDynamicList_mzud1t$;
  DefaultBlocks$BlockInclude.prototype.dynamicLength_mzud1t$ = Block.prototype.dynamicLength_mzud1t$;
  DefaultBlocks$BlockInclude.prototype.dynamicGet_slmq2v$ = Block.prototype.dynamicGet_slmq2v$;
  DefaultBlocks$BlockInclude.prototype.dynamicSet_b48med$ = Block.prototype.dynamicSet_b48med$;
  DefaultBlocks$BlockInclude.prototype.dynamicCall_ihivg6$ = Block.prototype.dynamicCall_ihivg6$;
  DefaultBlocks$BlockInclude.prototype.dynamicCallMethod_w3s0wy$ = Block.prototype.dynamicCallMethod_w3s0wy$;
  DefaultBlocks$BlockMacro.prototype.toDynamicString_mzud1t$ = Block.prototype.toDynamicString_mzud1t$;
  DefaultBlocks$BlockMacro.prototype.toDynamicBool_mzud1t$ = Block.prototype.toDynamicBool_mzud1t$;
  DefaultBlocks$BlockMacro.prototype.toDynamicInt_mzud1t$ = Block.prototype.toDynamicInt_mzud1t$;
  DefaultBlocks$BlockMacro.prototype.toDynamicList_mzud1t$ = Block.prototype.toDynamicList_mzud1t$;
  DefaultBlocks$BlockMacro.prototype.dynamicLength_mzud1t$ = Block.prototype.dynamicLength_mzud1t$;
  DefaultBlocks$BlockMacro.prototype.dynamicGet_slmq2v$ = Block.prototype.dynamicGet_slmq2v$;
  DefaultBlocks$BlockMacro.prototype.dynamicSet_b48med$ = Block.prototype.dynamicSet_b48med$;
  DefaultBlocks$BlockMacro.prototype.dynamicCall_ihivg6$ = Block.prototype.dynamicCall_ihivg6$;
  DefaultBlocks$BlockMacro.prototype.dynamicCallMethod_w3s0wy$ = Block.prototype.dynamicCallMethod_w3s0wy$;
  DefaultBlocks$BlockSet.prototype.toDynamicString_mzud1t$ = Block.prototype.toDynamicString_mzud1t$;
  DefaultBlocks$BlockSet.prototype.toDynamicBool_mzud1t$ = Block.prototype.toDynamicBool_mzud1t$;
  DefaultBlocks$BlockSet.prototype.toDynamicInt_mzud1t$ = Block.prototype.toDynamicInt_mzud1t$;
  DefaultBlocks$BlockSet.prototype.toDynamicList_mzud1t$ = Block.prototype.toDynamicList_mzud1t$;
  DefaultBlocks$BlockSet.prototype.dynamicLength_mzud1t$ = Block.prototype.dynamicLength_mzud1t$;
  DefaultBlocks$BlockSet.prototype.dynamicGet_slmq2v$ = Block.prototype.dynamicGet_slmq2v$;
  DefaultBlocks$BlockSet.prototype.dynamicSet_b48med$ = Block.prototype.dynamicSet_b48med$;
  DefaultBlocks$BlockSet.prototype.dynamicCall_ihivg6$ = Block.prototype.dynamicCall_ihivg6$;
  DefaultBlocks$BlockSet.prototype.dynamicCallMethod_w3s0wy$ = Block.prototype.dynamicCallMethod_w3s0wy$;
  DefaultBlocks$BlockText.prototype.toDynamicString_mzud1t$ = Block.prototype.toDynamicString_mzud1t$;
  DefaultBlocks$BlockText.prototype.toDynamicBool_mzud1t$ = Block.prototype.toDynamicBool_mzud1t$;
  DefaultBlocks$BlockText.prototype.toDynamicInt_mzud1t$ = Block.prototype.toDynamicInt_mzud1t$;
  DefaultBlocks$BlockText.prototype.toDynamicList_mzud1t$ = Block.prototype.toDynamicList_mzud1t$;
  DefaultBlocks$BlockText.prototype.dynamicLength_mzud1t$ = Block.prototype.dynamicLength_mzud1t$;
  DefaultBlocks$BlockText.prototype.dynamicGet_slmq2v$ = Block.prototype.dynamicGet_slmq2v$;
  DefaultBlocks$BlockText.prototype.dynamicSet_b48med$ = Block.prototype.dynamicSet_b48med$;
  DefaultBlocks$BlockText.prototype.dynamicCall_ihivg6$ = Block.prototype.dynamicCall_ihivg6$;
  DefaultBlocks$BlockText.prototype.dynamicCallMethod_w3s0wy$ = Block.prototype.dynamicCallMethod_w3s0wy$;
  DefaultTags$Switch$lambda$ObjectLiteral.prototype.toDynamicString_mzud1t$ = Block.prototype.toDynamicString_mzud1t$;
  DefaultTags$Switch$lambda$ObjectLiteral.prototype.toDynamicBool_mzud1t$ = Block.prototype.toDynamicBool_mzud1t$;
  DefaultTags$Switch$lambda$ObjectLiteral.prototype.toDynamicInt_mzud1t$ = Block.prototype.toDynamicInt_mzud1t$;
  DefaultTags$Switch$lambda$ObjectLiteral.prototype.toDynamicList_mzud1t$ = Block.prototype.toDynamicList_mzud1t$;
  DefaultTags$Switch$lambda$ObjectLiteral.prototype.dynamicLength_mzud1t$ = Block.prototype.dynamicLength_mzud1t$;
  DefaultTags$Switch$lambda$ObjectLiteral.prototype.dynamicGet_slmq2v$ = Block.prototype.dynamicGet_slmq2v$;
  DefaultTags$Switch$lambda$ObjectLiteral.prototype.dynamicSet_b48med$ = Block.prototype.dynamicSet_b48med$;
  DefaultTags$Switch$lambda$ObjectLiteral.prototype.dynamicCall_ihivg6$ = Block.prototype.dynamicCall_ihivg6$;
  DefaultTags$Switch$lambda$ObjectLiteral.prototype.dynamicCallMethod_w3s0wy$ = Block.prototype.dynamicCallMethod_w3s0wy$;
  ExprNode.prototype.toDynamicString_mzud1t$ = DynamicContext.prototype.toDynamicString_mzud1t$;
  ExprNode.prototype.toDynamicBool_mzud1t$ = DynamicContext.prototype.toDynamicBool_mzud1t$;
  ExprNode.prototype.toDynamicInt_mzud1t$ = DynamicContext.prototype.toDynamicInt_mzud1t$;
  ExprNode.prototype.toDynamicList_mzud1t$ = DynamicContext.prototype.toDynamicList_mzud1t$;
  ExprNode.prototype.dynamicLength_mzud1t$ = DynamicContext.prototype.dynamicLength_mzud1t$;
  ExprNode.prototype.dynamicGet_slmq2v$ = DynamicContext.prototype.dynamicGet_slmq2v$;
  ExprNode.prototype.dynamicSet_b48med$ = DynamicContext.prototype.dynamicSet_b48med$;
  ExprNode.prototype.dynamicCall_ihivg6$ = DynamicContext.prototype.dynamicCall_ihivg6$;
  ExprNode.prototype.dynamicCallMethod_w3s0wy$ = DynamicContext.prototype.dynamicCallMethod_w3s0wy$;
  ExprNode$VAR.prototype.toDynamicString_mzud1t$ = ExprNode.prototype.toDynamicString_mzud1t$;
  ExprNode$VAR.prototype.toDynamicBool_mzud1t$ = ExprNode.prototype.toDynamicBool_mzud1t$;
  ExprNode$VAR.prototype.toDynamicInt_mzud1t$ = ExprNode.prototype.toDynamicInt_mzud1t$;
  ExprNode$VAR.prototype.toDynamicList_mzud1t$ = ExprNode.prototype.toDynamicList_mzud1t$;
  ExprNode$VAR.prototype.dynamicLength_mzud1t$ = ExprNode.prototype.dynamicLength_mzud1t$;
  ExprNode$VAR.prototype.dynamicGet_slmq2v$ = ExprNode.prototype.dynamicGet_slmq2v$;
  ExprNode$VAR.prototype.dynamicSet_b48med$ = ExprNode.prototype.dynamicSet_b48med$;
  ExprNode$VAR.prototype.dynamicCall_ihivg6$ = ExprNode.prototype.dynamicCall_ihivg6$;
  ExprNode$VAR.prototype.dynamicCallMethod_w3s0wy$ = ExprNode.prototype.dynamicCallMethod_w3s0wy$;
  ExprNode$LIT.prototype.toDynamicString_mzud1t$ = ExprNode.prototype.toDynamicString_mzud1t$;
  ExprNode$LIT.prototype.toDynamicBool_mzud1t$ = ExprNode.prototype.toDynamicBool_mzud1t$;
  ExprNode$LIT.prototype.toDynamicInt_mzud1t$ = ExprNode.prototype.toDynamicInt_mzud1t$;
  ExprNode$LIT.prototype.toDynamicList_mzud1t$ = ExprNode.prototype.toDynamicList_mzud1t$;
  ExprNode$LIT.prototype.dynamicLength_mzud1t$ = ExprNode.prototype.dynamicLength_mzud1t$;
  ExprNode$LIT.prototype.dynamicGet_slmq2v$ = ExprNode.prototype.dynamicGet_slmq2v$;
  ExprNode$LIT.prototype.dynamicSet_b48med$ = ExprNode.prototype.dynamicSet_b48med$;
  ExprNode$LIT.prototype.dynamicCall_ihivg6$ = ExprNode.prototype.dynamicCall_ihivg6$;
  ExprNode$LIT.prototype.dynamicCallMethod_w3s0wy$ = ExprNode.prototype.dynamicCallMethod_w3s0wy$;
  ExprNode$ARRAY_LIT.prototype.toDynamicString_mzud1t$ = ExprNode.prototype.toDynamicString_mzud1t$;
  ExprNode$ARRAY_LIT.prototype.toDynamicBool_mzud1t$ = ExprNode.prototype.toDynamicBool_mzud1t$;
  ExprNode$ARRAY_LIT.prototype.toDynamicInt_mzud1t$ = ExprNode.prototype.toDynamicInt_mzud1t$;
  ExprNode$ARRAY_LIT.prototype.toDynamicList_mzud1t$ = ExprNode.prototype.toDynamicList_mzud1t$;
  ExprNode$ARRAY_LIT.prototype.dynamicLength_mzud1t$ = ExprNode.prototype.dynamicLength_mzud1t$;
  ExprNode$ARRAY_LIT.prototype.dynamicGet_slmq2v$ = ExprNode.prototype.dynamicGet_slmq2v$;
  ExprNode$ARRAY_LIT.prototype.dynamicSet_b48med$ = ExprNode.prototype.dynamicSet_b48med$;
  ExprNode$ARRAY_LIT.prototype.dynamicCall_ihivg6$ = ExprNode.prototype.dynamicCall_ihivg6$;
  ExprNode$ARRAY_LIT.prototype.dynamicCallMethod_w3s0wy$ = ExprNode.prototype.dynamicCallMethod_w3s0wy$;
  ExprNode$OBJECT_LIT.prototype.toDynamicString_mzud1t$ = ExprNode.prototype.toDynamicString_mzud1t$;
  ExprNode$OBJECT_LIT.prototype.toDynamicBool_mzud1t$ = ExprNode.prototype.toDynamicBool_mzud1t$;
  ExprNode$OBJECT_LIT.prototype.toDynamicInt_mzud1t$ = ExprNode.prototype.toDynamicInt_mzud1t$;
  ExprNode$OBJECT_LIT.prototype.toDynamicList_mzud1t$ = ExprNode.prototype.toDynamicList_mzud1t$;
  ExprNode$OBJECT_LIT.prototype.dynamicLength_mzud1t$ = ExprNode.prototype.dynamicLength_mzud1t$;
  ExprNode$OBJECT_LIT.prototype.dynamicGet_slmq2v$ = ExprNode.prototype.dynamicGet_slmq2v$;
  ExprNode$OBJECT_LIT.prototype.dynamicSet_b48med$ = ExprNode.prototype.dynamicSet_b48med$;
  ExprNode$OBJECT_LIT.prototype.dynamicCall_ihivg6$ = ExprNode.prototype.dynamicCall_ihivg6$;
  ExprNode$OBJECT_LIT.prototype.dynamicCallMethod_w3s0wy$ = ExprNode.prototype.dynamicCallMethod_w3s0wy$;
  ExprNode$FILTER.prototype.toDynamicString_mzud1t$ = ExprNode.prototype.toDynamicString_mzud1t$;
  ExprNode$FILTER.prototype.toDynamicBool_mzud1t$ = ExprNode.prototype.toDynamicBool_mzud1t$;
  ExprNode$FILTER.prototype.toDynamicInt_mzud1t$ = ExprNode.prototype.toDynamicInt_mzud1t$;
  ExprNode$FILTER.prototype.toDynamicList_mzud1t$ = ExprNode.prototype.toDynamicList_mzud1t$;
  ExprNode$FILTER.prototype.dynamicLength_mzud1t$ = ExprNode.prototype.dynamicLength_mzud1t$;
  ExprNode$FILTER.prototype.dynamicGet_slmq2v$ = ExprNode.prototype.dynamicGet_slmq2v$;
  ExprNode$FILTER.prototype.dynamicSet_b48med$ = ExprNode.prototype.dynamicSet_b48med$;
  ExprNode$FILTER.prototype.dynamicCall_ihivg6$ = ExprNode.prototype.dynamicCall_ihivg6$;
  ExprNode$FILTER.prototype.dynamicCallMethod_w3s0wy$ = ExprNode.prototype.dynamicCallMethod_w3s0wy$;
  ExprNode$ACCESS.prototype.toDynamicString_mzud1t$ = ExprNode.prototype.toDynamicString_mzud1t$;
  ExprNode$ACCESS.prototype.toDynamicBool_mzud1t$ = ExprNode.prototype.toDynamicBool_mzud1t$;
  ExprNode$ACCESS.prototype.toDynamicInt_mzud1t$ = ExprNode.prototype.toDynamicInt_mzud1t$;
  ExprNode$ACCESS.prototype.toDynamicList_mzud1t$ = ExprNode.prototype.toDynamicList_mzud1t$;
  ExprNode$ACCESS.prototype.dynamicLength_mzud1t$ = ExprNode.prototype.dynamicLength_mzud1t$;
  ExprNode$ACCESS.prototype.dynamicGet_slmq2v$ = ExprNode.prototype.dynamicGet_slmq2v$;
  ExprNode$ACCESS.prototype.dynamicSet_b48med$ = ExprNode.prototype.dynamicSet_b48med$;
  ExprNode$ACCESS.prototype.dynamicCall_ihivg6$ = ExprNode.prototype.dynamicCall_ihivg6$;
  ExprNode$ACCESS.prototype.dynamicCallMethod_w3s0wy$ = ExprNode.prototype.dynamicCallMethod_w3s0wy$;
  ExprNode$CALL.prototype.toDynamicString_mzud1t$ = ExprNode.prototype.toDynamicString_mzud1t$;
  ExprNode$CALL.prototype.toDynamicBool_mzud1t$ = ExprNode.prototype.toDynamicBool_mzud1t$;
  ExprNode$CALL.prototype.toDynamicInt_mzud1t$ = ExprNode.prototype.toDynamicInt_mzud1t$;
  ExprNode$CALL.prototype.toDynamicList_mzud1t$ = ExprNode.prototype.toDynamicList_mzud1t$;
  ExprNode$CALL.prototype.dynamicLength_mzud1t$ = ExprNode.prototype.dynamicLength_mzud1t$;
  ExprNode$CALL.prototype.dynamicGet_slmq2v$ = ExprNode.prototype.dynamicGet_slmq2v$;
  ExprNode$CALL.prototype.dynamicSet_b48med$ = ExprNode.prototype.dynamicSet_b48med$;
  ExprNode$CALL.prototype.dynamicCall_ihivg6$ = ExprNode.prototype.dynamicCall_ihivg6$;
  ExprNode$CALL.prototype.dynamicCallMethod_w3s0wy$ = ExprNode.prototype.dynamicCallMethod_w3s0wy$;
  ExprNode$BINOP.prototype.toDynamicString_mzud1t$ = ExprNode.prototype.toDynamicString_mzud1t$;
  ExprNode$BINOP.prototype.toDynamicBool_mzud1t$ = ExprNode.prototype.toDynamicBool_mzud1t$;
  ExprNode$BINOP.prototype.toDynamicInt_mzud1t$ = ExprNode.prototype.toDynamicInt_mzud1t$;
  ExprNode$BINOP.prototype.toDynamicList_mzud1t$ = ExprNode.prototype.toDynamicList_mzud1t$;
  ExprNode$BINOP.prototype.dynamicLength_mzud1t$ = ExprNode.prototype.dynamicLength_mzud1t$;
  ExprNode$BINOP.prototype.dynamicGet_slmq2v$ = ExprNode.prototype.dynamicGet_slmq2v$;
  ExprNode$BINOP.prototype.dynamicSet_b48med$ = ExprNode.prototype.dynamicSet_b48med$;
  ExprNode$BINOP.prototype.dynamicCall_ihivg6$ = ExprNode.prototype.dynamicCall_ihivg6$;
  ExprNode$BINOP.prototype.dynamicCallMethod_w3s0wy$ = ExprNode.prototype.dynamicCallMethod_w3s0wy$;
  ExprNode$TERNARY.prototype.toDynamicString_mzud1t$ = ExprNode.prototype.toDynamicString_mzud1t$;
  ExprNode$TERNARY.prototype.toDynamicBool_mzud1t$ = ExprNode.prototype.toDynamicBool_mzud1t$;
  ExprNode$TERNARY.prototype.toDynamicInt_mzud1t$ = ExprNode.prototype.toDynamicInt_mzud1t$;
  ExprNode$TERNARY.prototype.toDynamicList_mzud1t$ = ExprNode.prototype.toDynamicList_mzud1t$;
  ExprNode$TERNARY.prototype.dynamicLength_mzud1t$ = ExprNode.prototype.dynamicLength_mzud1t$;
  ExprNode$TERNARY.prototype.dynamicGet_slmq2v$ = ExprNode.prototype.dynamicGet_slmq2v$;
  ExprNode$TERNARY.prototype.dynamicSet_b48med$ = ExprNode.prototype.dynamicSet_b48med$;
  ExprNode$TERNARY.prototype.dynamicCall_ihivg6$ = ExprNode.prototype.dynamicCall_ihivg6$;
  ExprNode$TERNARY.prototype.dynamicCallMethod_w3s0wy$ = ExprNode.prototype.dynamicCallMethod_w3s0wy$;
  ExprNode$UNOP.prototype.toDynamicString_mzud1t$ = ExprNode.prototype.toDynamicString_mzud1t$;
  ExprNode$UNOP.prototype.toDynamicBool_mzud1t$ = ExprNode.prototype.toDynamicBool_mzud1t$;
  ExprNode$UNOP.prototype.toDynamicInt_mzud1t$ = ExprNode.prototype.toDynamicInt_mzud1t$;
  ExprNode$UNOP.prototype.toDynamicList_mzud1t$ = ExprNode.prototype.toDynamicList_mzud1t$;
  ExprNode$UNOP.prototype.dynamicLength_mzud1t$ = ExprNode.prototype.dynamicLength_mzud1t$;
  ExprNode$UNOP.prototype.dynamicGet_slmq2v$ = ExprNode.prototype.dynamicGet_slmq2v$;
  ExprNode$UNOP.prototype.dynamicSet_b48med$ = ExprNode.prototype.dynamicSet_b48med$;
  ExprNode$UNOP.prototype.dynamicCall_ihivg6$ = ExprNode.prototype.dynamicCall_ihivg6$;
  ExprNode$UNOP.prototype.dynamicCallMethod_w3s0wy$ = ExprNode.prototype.dynamicCallMethod_w3s0wy$;
  Filter$Ctx.prototype.toDynamicString_mzud1t$ = DynamicContext.prototype.toDynamicString_mzud1t$;
  Filter$Ctx.prototype.toDynamicBool_mzud1t$ = DynamicContext.prototype.toDynamicBool_mzud1t$;
  Filter$Ctx.prototype.toDynamicInt_mzud1t$ = DynamicContext.prototype.toDynamicInt_mzud1t$;
  Filter$Ctx.prototype.toDynamicList_mzud1t$ = DynamicContext.prototype.toDynamicList_mzud1t$;
  Filter$Ctx.prototype.dynamicLength_mzud1t$ = DynamicContext.prototype.dynamicLength_mzud1t$;
  Filter$Ctx.prototype.dynamicGet_slmq2v$ = DynamicContext.prototype.dynamicGet_slmq2v$;
  Filter$Ctx.prototype.dynamicSet_b48med$ = DynamicContext.prototype.dynamicSet_b48med$;
  Filter$Ctx.prototype.dynamicCall_ihivg6$ = DynamicContext.prototype.dynamicCall_ihivg6$;
  Filter$Ctx.prototype.dynamicCallMethod_w3s0wy$ = DynamicContext.prototype.dynamicCallMethod_w3s0wy$;
  Tag.prototype.toDynamicString_mzud1t$ = DynamicContext.prototype.toDynamicString_mzud1t$;
  Tag.prototype.toDynamicBool_mzud1t$ = DynamicContext.prototype.toDynamicBool_mzud1t$;
  Tag.prototype.toDynamicInt_mzud1t$ = DynamicContext.prototype.toDynamicInt_mzud1t$;
  Tag.prototype.toDynamicList_mzud1t$ = DynamicContext.prototype.toDynamicList_mzud1t$;
  Tag.prototype.dynamicLength_mzud1t$ = DynamicContext.prototype.dynamicLength_mzud1t$;
  Tag.prototype.dynamicGet_slmq2v$ = DynamicContext.prototype.dynamicGet_slmq2v$;
  Tag.prototype.dynamicSet_b48med$ = DynamicContext.prototype.dynamicSet_b48med$;
  Tag.prototype.dynamicCall_ihivg6$ = DynamicContext.prototype.dynamicCall_ihivg6$;
  Tag.prototype.dynamicCallMethod_w3s0wy$ = DynamicContext.prototype.dynamicCallMethod_w3s0wy$;
  Template$Scope.prototype.toDynamicString_mzud1t$ = DynamicContext.prototype.toDynamicString_mzud1t$;
  Template$Scope.prototype.toDynamicBool_mzud1t$ = DynamicContext.prototype.toDynamicBool_mzud1t$;
  Template$Scope.prototype.toDynamicInt_mzud1t$ = DynamicContext.prototype.toDynamicInt_mzud1t$;
  Template$Scope.prototype.toDynamicList_mzud1t$ = DynamicContext.prototype.toDynamicList_mzud1t$;
  Template$Scope.prototype.dynamicLength_mzud1t$ = DynamicContext.prototype.dynamicLength_mzud1t$;
  Template$Scope.prototype.dynamicGet_slmq2v$ = DynamicContext.prototype.dynamicGet_slmq2v$;
  Template$Scope.prototype.dynamicSet_b48med$ = DynamicContext.prototype.dynamicSet_b48med$;
  Template$Scope.prototype.dynamicCall_ihivg6$ = DynamicContext.prototype.dynamicCall_ihivg6$;
  Template$Scope.prototype.dynamicCallMethod_w3s0wy$ = DynamicContext.prototype.dynamicCallMethod_w3s0wy$;
  Template$EvalContext.prototype.toDynamicString_mzud1t$ = DynamicContext.prototype.toDynamicString_mzud1t$;
  Template$EvalContext.prototype.toDynamicBool_mzud1t$ = DynamicContext.prototype.toDynamicBool_mzud1t$;
  Template$EvalContext.prototype.toDynamicInt_mzud1t$ = DynamicContext.prototype.toDynamicInt_mzud1t$;
  Template$EvalContext.prototype.toDynamicList_mzud1t$ = DynamicContext.prototype.toDynamicList_mzud1t$;
  Template$EvalContext.prototype.dynamicLength_mzud1t$ = DynamicContext.prototype.dynamicLength_mzud1t$;
  Template$EvalContext.prototype.dynamicGet_slmq2v$ = DynamicContext.prototype.dynamicGet_slmq2v$;
  Template$EvalContext.prototype.dynamicSet_b48med$ = DynamicContext.prototype.dynamicSet_b48med$;
  Template$EvalContext.prototype.dynamicCall_ihivg6$ = DynamicContext.prototype.dynamicCall_ihivg6$;
  Template$EvalContext.prototype.dynamicCallMethod_w3s0wy$ = DynamicContext.prototype.dynamicCallMethod_w3s0wy$;
  Dynamic2.prototype.toDynamicString_mzud1t$ = DynamicContext.prototype.toDynamicString_mzud1t$;
  Dynamic2.prototype.toDynamicBool_mzud1t$ = DynamicContext.prototype.toDynamicBool_mzud1t$;
  Dynamic2.prototype.toDynamicInt_mzud1t$ = DynamicContext.prototype.toDynamicInt_mzud1t$;
  Dynamic2.prototype.toDynamicList_mzud1t$ = DynamicContext.prototype.toDynamicList_mzud1t$;
  Dynamic2.prototype.dynamicLength_mzud1t$ = DynamicContext.prototype.dynamicLength_mzud1t$;
  Dynamic2.prototype.dynamicGet_slmq2v$ = DynamicContext.prototype.dynamicGet_slmq2v$;
  Dynamic2.prototype.dynamicSet_b48med$ = DynamicContext.prototype.dynamicSet_b48med$;
  Dynamic2.prototype.dynamicCall_ihivg6$ = DynamicContext.prototype.dynamicCall_ihivg6$;
  Dynamic2.prototype.dynamicCallMethod_w3s0wy$ = DynamicContext.prototype.dynamicCallMethod_w3s0wy$;
  DynamicShape.prototype.register_qtrk0b$ = DynamicShapeRegister.prototype.register_qtrk0b$;
  DynamicShape.prototype.register_cmncrc$ = DynamicShapeRegister.prototype.register_cmncrc$;
  debugPrintln = new extraProperty(void 0, debugPrintln$lambda);
  KORTE_VERSION = '1.0.0';
  Mapper2 = new JsObjectMapper2();
  Kotlin.defineModule('korte', _);
  return _;
}));

//# sourceMappingURL=korte.js.map
