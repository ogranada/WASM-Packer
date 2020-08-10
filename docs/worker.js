/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./worker-extension.js":
/*!*****************************!*\
  !*** ./worker-extension.js ***!
  \*****************************/
/*! exports provided: WrapWASMModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WrapWASMModule\", function() { return WrapWASMModule; });\n\nfunction WrapWASMModule(wasm) {\n\n    if (!wasm) {\n        wasm = {\n            memory: new WebAssembly.Memory({ initial: 256 }),\n            table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' }),\n        };\n    }\n\n    function setWasm(__wasm) {\n      wasm = __wasm;\n    }\n    /////// PRE-GENERATED INFO\n    \n    const heap = new Array(32).fill(undefined);\n    \n    heap.push(undefined, null, true, false);\n    \n    function getObject(idx) { return heap[idx]; }\n    \n    let heap_next = heap.length;\n    \n    function dropObject(idx) {\n        if (idx < 36) return;\n        heap[idx] = heap_next;\n        heap_next = idx;\n    }\n    \n    function takeObject(idx) {\n        const ret = getObject(idx);\n        dropObject(idx);\n        return ret;\n    }\n    \n    const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n    \n    let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n    \n    cachedTextDecoder.decode();\n    \n    let cachegetUint8Memory0 = null;\n    function getUint8Memory0() {\n        if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {\n            cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n        }\n        return cachegetUint8Memory0;\n    }\n    \n    function getStringFromWasm0(ptr, len) {\n        return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n    }\n    /**\n    */\n    function greet() {\n        wasm.greet();\n    }\n    \n    let WASM_VECTOR_LEN = 0;\n    \n    function passArray8ToWasm0(arg, malloc) {\n        const ptr = malloc(arg.length * 1);\n        getUint8Memory0().set(arg, ptr / 1);\n        WASM_VECTOR_LEN = arg.length;\n        return ptr;\n    }\n    \n    let cachegetInt32Memory0 = null;\n    function getInt32Memory0() {\n        if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {\n            cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);\n        }\n        return cachegetInt32Memory0;\n    }\n    /**\n    * @param {Uint8Array} input\n    * @returns {string}\n    */\n    function extract(input) {\n        try {\n            const retptr = wasm.__wbindgen_export_0.value - 16;\n            wasm.__wbindgen_export_0.value = retptr;\n            var ptr0 = passArray8ToWasm0(input, wasm.__wbindgen_malloc);\n            var len0 = WASM_VECTOR_LEN;\n            wasm.extract(retptr, ptr0, len0);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            wasm.__wbindgen_export_0.value += 16;\n            wasm.__wbindgen_free(r0, r1);\n        }\n    }\n    \n    function addHeapObject(obj) {\n        if (heap_next === heap.length) heap.push(heap.length + 1);\n        const idx = heap_next;\n        heap_next = heap[idx];\n    \n        heap[idx] = obj;\n        return idx;\n    }\n    \n    const lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n    \n    let cachedTextEncoder = new lTextEncoder('utf-8');\n    \n    const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n        ? function (arg, view) {\n        return cachedTextEncoder.encodeInto(arg, view);\n    }\n        : function (arg, view) {\n        const buf = cachedTextEncoder.encode(arg);\n        view.set(buf);\n        return {\n            read: arg.length,\n            written: buf.length\n        };\n    });\n    \n    function passStringToWasm0(arg, malloc, realloc) {\n    \n        if (realloc === undefined) {\n            const buf = cachedTextEncoder.encode(arg);\n            const ptr = malloc(buf.length);\n            getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n            WASM_VECTOR_LEN = buf.length;\n            return ptr;\n        }\n    \n        let len = arg.length;\n        let ptr = malloc(len);\n    \n        const mem = getUint8Memory0();\n    \n        let offset = 0;\n    \n        for (; offset < len; offset++) {\n            const code = arg.charCodeAt(offset);\n            if (code > 0x7F) break;\n            mem[ptr + offset] = code;\n        }\n    \n        if (offset !== len) {\n            if (offset !== 0) {\n                arg = arg.slice(offset);\n            }\n            ptr = realloc(ptr, len, len = offset + arg.length * 3);\n            const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n            const ret = encodeString(arg, view);\n    \n            offset += ret.written;\n        }\n    \n        WASM_VECTOR_LEN = offset;\n        return ptr;\n    }\n    \n    const __wbg_alert_8cf294de947acc20 = function(arg0, arg1) {\n        alert(getStringFromWasm0(arg0, arg1));\n    };\n    \n    const __wbg_new_59cb74e423758ede = function() {\n        var ret = new Error();\n        return addHeapObject(ret);\n    };\n    \n    const __wbg_stack_558ba5917b466edd = function(arg0, arg1) {\n        var ret = getObject(arg1).stack;\n        var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);\n        var len0 = WASM_VECTOR_LEN;\n        getInt32Memory0()[arg0 / 4 + 1] = len0;\n        getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n    };\n    \n    const __wbg_error_4bb6c2a97407129a = function(arg0, arg1) {\n        try {\n            console.error(getStringFromWasm0(arg0, arg1));\n        } finally {\n            wasm.__wbindgen_free(arg0, arg1);\n        }\n    };\n    \n    const __wbindgen_object_drop_ref = function(arg0) {\n        takeObject(arg0);\n    };\n    \n    \n    /////// END PRE-GENERATED INFO\n    return {\n        setWasm,\n        greet,\n        extract,\n        \"./compressor4_bg.js\": {\n            __wbg_alert_8cf294de947acc20,\n            __wbg_new_59cb74e423758ede,\n            __wbg_stack_558ba5917b466edd,\n            __wbg_error_4bb6c2a97407129a,\n            __wbindgen_object_drop_ref,\n        }\n    };\n}\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./worker-extension.js?");

/***/ }),

/***/ "./worker.js":
/*!*******************!*\
  !*** ./worker.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _worker_extension_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worker-extension.js */ \"./worker-extension.js\");\n\n\nself.wasmModules = {};\n\nfunction corsFetch(resource) {\n  let config = {};\n  if (resource.startsWith(\"http\") && !resource.includes(self.location.host)) {\n    config = {\n      origin: \"no-origin\",\n      headers: {\n        \"Access-Control-Allow-Origin\": location.href,\n      },\n    };\n  }\n  return fetch(resource, config);\n}\n\nasync function loadCompressor() {\n  const importObject = Object(_worker_extension_js__WEBPACK_IMPORTED_MODULE_0__[\"WrapWASMModule\"])();\n  const wasmResponse = await corsFetch(\"./public/compressor4.wasm\");\n  const buffer = await wasmResponse.arrayBuffer();\n  let results = null;\n  try {\n    results = await WebAssembly.instantiateStreaming(\n      wasmResponse,\n      importObject\n    );\n  } catch (error) {\n    results = await WebAssembly.instantiate(buffer, importObject);\n  }\n  importObject.setWasm(results.instance.exports);\n  const wasm_module = importObject;\n  self.wasmModules[\"compressor\"] = wasm_module;\n  console.log(\"CSS Decompressor loaded...\");\n  return wasm_module;\n}\n\nasync function loadXZStyles(resource) {\n  if (!self.wasmModules.compressor) {\n    await loadCompressor();\n  }\n  console.time(`TOTAL COMPRESSED STYLESHEET ${resource}`);\n  console.time(`DOWNLOAD COMPRESSED STYLESHEET ${resource}`);\n  const wasm = self.wasmModules.compressor;\n  console.timeEnd(`DOWNLOAD COMPRESSED STYLESHEET ${resource}`);\n  console.time(`PROCESS COMPRESSED STYLESHEET ${resource}`);\n  const response = await corsFetch(resource);\n  const ab = await response.arrayBuffer();\n  const i8Buffer = new Int8Array(ab);\n  const styles = wasm.extract(i8Buffer).split('/*# sourceMappingURL=')[0];\n  console.timeEnd(`PROCESS COMPRESSED STYLESHEET ${resource}`);\n  console.timeEnd(`TOTAL COMPRESSED STYLESHEET ${resource}`);\n  console.log(`Styles loaded from ${resource} (${styles.length} bites.)`);\n  const cntBlob = new Blob([styles], { type: \"text/css\" });\n  const options = { status: 200, statusText: \"Parsed\" };\n  return new Response(cntBlob, options);\n}\n\naddEventListener(\"fetch\", (event) => {\n  console.log('fetch', event.request.url);\n  if (event.request.url.endsWith(\".css.xz\")) {\n    return event.respondWith(loadXZStyles(event.request.url));\n  }\n  if (event.request.url.endsWith(\".css\")) {\n    return event.respondWith(new Promise(async (resolve, reject) => {\n      console.time(`PROCESS SIMPLE STYLESHEET ${event.request.url}`);\n      const res = corsFetch(event.request.url);\n      console.timeEnd(`PROCESS SIMPLE STYLESHEET ${event.request.url}`);\n      resolve(res);\n    }));\n  }\n});\n\n\naddEventListener(\"install\", (event) => {\n  console.log('install...', (new Date()).getTime());\n});\n\naddEventListener(\"activate\", (event) => {\n  console.log('Activate...', (new Date()).getTime());\n  loadCompressor().then(() => event.waitUntil(self.clients.claim() ));\n});\n\n\n//# sourceURL=webpack:///./worker.js?");

/***/ })

/******/ });