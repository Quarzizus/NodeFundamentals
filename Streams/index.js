/*
Streams -> paso de datos entre un punto y otro
1) lectura
2) escritura
*/

const { createReadStream } = require("fs");
const { Transform } = require("stream");

let data = "";

let readeableStream = createReadStream(__dirname + "/input.txt");
readeableStream.setEncoding("utf-8");

readeableStream.on("data", (chunk) => {
  data += chunk;
});

// readeableStream.on("end", () => {
//   console.log(data);
//   console.log("Ha terminado");
// });

class Upper extends Transform {
  constructor() {
    super();
  }
  _transform(chunk, codif, cb) {
    let chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
  }
}

const uppercito = new Upper();

readeableStream.pipe(uppercito).pipe(process.stdout);
