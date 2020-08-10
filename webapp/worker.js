import { WrapWASMModule } from "./worker-extension.js";

self.wasmModules = {};

function corsFetch(resource) {
  let config = {};
  if (resource.startsWith("http") && !resource.includes(self.location.host)) {
    config = {
      origin: "no-origin",
      headers: {
        "Access-Control-Allow-Origin": location.href,
      },
    };
  }
  return fetch(resource, config);
}

async function loadCompressor() {
  const importObject = WrapWASMModule();
  const wasmResponse = await corsFetch("./public/compressor4.wasm");
  const buffer = await wasmResponse.arrayBuffer();
  let results = null;
  try {
    results = await WebAssembly.instantiateStreaming(
      wasmResponse,
      importObject
    );
  } catch (error) {
    results = await WebAssembly.instantiate(buffer, importObject);
  }
  importObject.setWasm(results.instance.exports);
  const wasm_module = importObject;
  self.wasmModules["compressor"] = wasm_module;
  console.log("CSS Decompressor loaded...");
  return wasm_module;
}

async function loadXZStyles(resource) {
  if (!self.wasmModules.compressor) {
    await loadCompressor();
  }
  console.time(`TOTAL COMPRESSED STYLESHEET ${resource}`);
  console.time(`DOWNLOAD COMPRESSED STYLESHEET ${resource}`);
  const wasm = self.wasmModules.compressor;
  console.timeEnd(`DOWNLOAD COMPRESSED STYLESHEET ${resource}`);
  console.time(`PROCESS COMPRESSED STYLESHEET ${resource}`);
  const response = await corsFetch(resource);
  const ab = await response.arrayBuffer();
  const i8Buffer = new Int8Array(ab);
  const styles = wasm.extract(i8Buffer).split('/*# sourceMappingURL=')[0];
  console.timeEnd(`PROCESS COMPRESSED STYLESHEET ${resource}`);
  console.timeEnd(`TOTAL COMPRESSED STYLESHEET ${resource}`);
  console.log(`Styles loaded from ${resource} (${styles.length} bites.)`);
  const cntBlob = new Blob([styles], { type: "text/css" });
  const options = { status: 200, statusText: "Parsed" };
  return new Response(cntBlob, options);
}

addEventListener("fetch", (event) => {
  console.log('fetch', event.request.url);
  if (event.request.url.endsWith(".css.xz")) {
    return event.respondWith(loadXZStyles(event.request.url));
  }
  if (event.request.url.endsWith(".css")) {
    return event.respondWith(new Promise(async (resolve, reject) => {
      console.time(`PROCESS SIMPLE STYLESHEET ${event.request.url}`);
      const res = corsFetch(event.request.url);
      console.timeEnd(`PROCESS SIMPLE STYLESHEET ${event.request.url}`);
      resolve(res);
    }));
  }
});


addEventListener("install", (event) => {
  console.log('install...', (new Date()).getTime());
});

addEventListener("activate", (event) => {
  console.log('Activate...', (new Date()).getTime());
  loadCompressor().then(() => event.waitUntil(self.clients.claim() ));
});
