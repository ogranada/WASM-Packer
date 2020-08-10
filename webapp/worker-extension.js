
export function WrapWASMModule(wasm) {

    if (!wasm) {
        wasm = {
            memory: new WebAssembly.Memory({ initial: 256 }),
            table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' }),
        };
    }

    function setWasm(__wasm) {
      wasm = __wasm;
    }
    /////// PRE-GENERATED INFO
    
    const heap = new Array(32).fill(undefined);
    
    heap.push(undefined, null, true, false);
    
    function getObject(idx) { return heap[idx]; }
    
    let heap_next = heap.length;
    
    function dropObject(idx) {
        if (idx < 36) return;
        heap[idx] = heap_next;
        heap_next = idx;
    }
    
    function takeObject(idx) {
        const ret = getObject(idx);
        dropObject(idx);
        return ret;
    }
    
    const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;
    
    let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });
    
    cachedTextDecoder.decode();
    
    let cachegetUint8Memory0 = null;
    function getUint8Memory0() {
        if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
            cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
        }
        return cachegetUint8Memory0;
    }
    
    function getStringFromWasm0(ptr, len) {
        return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
    }
    /**
    */
    function greet() {
        wasm.greet();
    }
    
    let WASM_VECTOR_LEN = 0;
    
    function passArray8ToWasm0(arg, malloc) {
        const ptr = malloc(arg.length * 1);
        getUint8Memory0().set(arg, ptr / 1);
        WASM_VECTOR_LEN = arg.length;
        return ptr;
    }
    
    let cachegetInt32Memory0 = null;
    function getInt32Memory0() {
        if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
            cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
        }
        return cachegetInt32Memory0;
    }
    /**
    * @param {Uint8Array} input
    * @returns {string}
    */
    function extract(input) {
        try {
            const retptr = wasm.__wbindgen_export_0.value - 16;
            wasm.__wbindgen_export_0.value = retptr;
            var ptr0 = passArray8ToWasm0(input, wasm.__wbindgen_malloc);
            var len0 = WASM_VECTOR_LEN;
            wasm.extract(retptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_export_0.value += 16;
            wasm.__wbindgen_free(r0, r1);
        }
    }
    
    function addHeapObject(obj) {
        if (heap_next === heap.length) heap.push(heap.length + 1);
        const idx = heap_next;
        heap_next = heap[idx];
    
        heap[idx] = obj;
        return idx;
    }
    
    const lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;
    
    let cachedTextEncoder = new lTextEncoder('utf-8');
    
    const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
        ? function (arg, view) {
        return cachedTextEncoder.encodeInto(arg, view);
    }
        : function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    });
    
    function passStringToWasm0(arg, malloc, realloc) {
    
        if (realloc === undefined) {
            const buf = cachedTextEncoder.encode(arg);
            const ptr = malloc(buf.length);
            getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
            WASM_VECTOR_LEN = buf.length;
            return ptr;
        }
    
        let len = arg.length;
        let ptr = malloc(len);
    
        const mem = getUint8Memory0();
    
        let offset = 0;
    
        for (; offset < len; offset++) {
            const code = arg.charCodeAt(offset);
            if (code > 0x7F) break;
            mem[ptr + offset] = code;
        }
    
        if (offset !== len) {
            if (offset !== 0) {
                arg = arg.slice(offset);
            }
            ptr = realloc(ptr, len, len = offset + arg.length * 3);
            const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
            const ret = encodeString(arg, view);
    
            offset += ret.written;
        }
    
        WASM_VECTOR_LEN = offset;
        return ptr;
    }
    
    const __wbg_alert_8cf294de947acc20 = function(arg0, arg1) {
        alert(getStringFromWasm0(arg0, arg1));
    };
    
    const __wbg_new_59cb74e423758ede = function() {
        var ret = new Error();
        return addHeapObject(ret);
    };
    
    const __wbg_stack_558ba5917b466edd = function(arg0, arg1) {
        var ret = getObject(arg1).stack;
        var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    
    const __wbg_error_4bb6c2a97407129a = function(arg0, arg1) {
        try {
            console.error(getStringFromWasm0(arg0, arg1));
        } finally {
            wasm.__wbindgen_free(arg0, arg1);
        }
    };
    
    const __wbindgen_object_drop_ref = function(arg0) {
        takeObject(arg0);
    };
    
    
    /////// END PRE-GENERATED INFO
    return {
        setWasm,
        greet,
        extract,
        "./compressor4_bg.js": {
            __wbg_alert_8cf294de947acc20,
            __wbg_new_59cb74e423758ede,
            __wbg_stack_558ba5917b466edd,
            __wbg_error_4bb6c2a97407129a,
            __wbindgen_object_drop_ref,
        }
    };
}
