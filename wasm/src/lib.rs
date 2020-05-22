mod utils;
use lzma_rs;
use std::str;
use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, compressor4!");
}

fn decompress(indata: Vec<u8>) -> Vec<u8> {
    let mut decomp: Vec<u8> = Vec::new();
    let mut data = indata.as_slice();
    let partial = lzma_rs::xz_decompress(&mut data, &mut decomp);
    match partial {
        Ok(v) => format!("working with version: {:?}", v),
        Err(e) => format!("error parsing header: {:?}", e),
    };
    decomp
}

#[wasm_bindgen]
pub fn extract(input: &[u8]) -> String {
    utils::set_panic_hook();
    let indata = input.to_vec();
    let xdata = decompress(indata);
    let res = str::from_utf8(&xdata[..]);
    String::from(res.unwrap())
}
