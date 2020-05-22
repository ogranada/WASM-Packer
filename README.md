<div align="center">

  <h1><code> Styles Compressor </code></h1>

  <p>
    This is a <strong> Proof Of Concept (PoC) </strong> project to use compressed style sheets.
  </p>
</div>

## Usage

Run `prepareSW_Wasm.sh`:
```bash
cd wasm
./prepareSW_Wasm.sh
```

Then go to :
```bash
cd ..
cd webapp
npm install
npm start
```

## About

📚 This is based on [WASM game of life](https://rustwasm.github.io/docs/book/game-of-life/hello-world.html).


<div align="center">
  <h1><code> Partial Results Of Compressed Styles </code></h1>
</div>

## Big CSS

### Common Big CSS (bigss.min.css)
| Criteria       | Value            |
|:-------------- |:---------------- |
| Download (avg) | 0.364624023437ms |

```
0.39111328125ms, 0.354248046875ms, 0.412841796875ms, 0.30029296875ms
```

### Compressed Big CSS (bigss.min.css.xz)
| Criteria         | Value             |
|:---------------- |:----------------- |
| Download (avg)   |  0.006164550781ms |
| Uncompress (avg) | 19.395324707031ms |
| Total (avg)      | 19.656066894531ms |
| Final size       | 169375 bites      |

```
download: 0.009033203125ms, 0.005859375ms, 0.0048828125ms, 0.0048828125ms
uncompress: 17.400146484375ms, 14.239013671875ms, 26.328125ms, 19.614013671875ms
total: 17.64306640625ms, 14.4921875ms, 26.592041015625ms, 19.89697265625ms
```



### Compressed Small CSS (sample.min.css)
| Criteria       | Value            |
|:-------------- |:---------------- |
| Download (avg) | 0.307739257812ms |

```
0.320068359375ms, 0.2880859375ms, 0.3017578125ms, 0.321044921875ms
```

### Compressed Small CSS (sample.min.css.xz)
| Criteria         | Value            |
|:---------------- |:---------------- |
| Download (avg)   | 0.006408691406ms |
| Uncompress (avg) | 7.057739257812ms |
| Total (avg)      | 7.338500976562ms |
| Final size       | 5644 bites       |

```
download: 0.0048828125ms, 0.005859375ms, 0.006103515625ms, 0.0087890625ms
uncompress: 7.97705078125ms, 7.85400390625ms, 6.033935546875ms, 6.365966796875ms
total: 8.24609375ms, 8.177001953125ms, 6.31298828125ms, 6.617919921875ms
```

