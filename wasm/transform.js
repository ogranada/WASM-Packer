
const fs = require('fs');

const TEMPLATE = (modName, functions, constFunctions, code) => `
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
    ${code}
    /////// END PRE-GENERATED INFO
    return {
        setWasm,
        ${functions}${functions?',':''}
        "./${modName}.js": {
            ${constFunctions}${constFunctions?',':''}
        }
    };
}
`

function main(){
  const BASE_PATH = './pkg';
  const pkgInfo = JSON.parse(fs.readFileSync(`${BASE_PATH}/package.json`).toString());
  // console.log(pkgInfo);
  const packageName = pkgInfo.name;
  const jsModName = `${packageName}_bg`;
  const jsFile = fs.readFileSync(`${BASE_PATH}/${jsModName}.js`).toString();
  const jsFileParts = jsFile.split('\n');
  const exportedValues = jsFileParts.filter(x => x.includes('export'));
  // console.log(exportedValues);
  const expFunctions = exportedValues
    .filter(x => x.includes('function') && !x.includes('='))
    .map(x => x.split(' ')[2].split('(')[0])
    ;
  const expConsts = exportedValues
    .filter(x => x.includes('export const'))
    .map(x => x.split(/const\s+/g)[1].split(' ')[0])
    ;
  const resultJsFile = jsFileParts
    .filter(x => !x.includes(`${jsModName}.wasm`))
    .map(x => x.replace('export ', ''))
    .join('\n    ')
    ;
  // console.log(resultJsFile);
  // console.log(expFunctions);
  // console.log(expConsts);
  const result = TEMPLATE(
    jsModName,
    expFunctions.join(',\n        '),
    expConsts.join(',\n            '),
    resultJsFile
  );
  fs.writeFileSync('./worker-extension.js', result);
}

main();

