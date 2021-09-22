// Proceso -> algo que se ejecuta y tiene
// pasos finitos

// exec -> nos da info de precesos simples
// spawn -> nos da info mucha info de cualquier proceso

const { exec, spawn } = require("child_process");

exec("ls -la", (err, stdout, sterr) => {
  if (err) {
    console.error(err);
    return false;
  }
  console.log("STODOUT", stdout); // data
  console.log("STERR", sterr); // no sé
});

let proceso = spawn("ls", ["-la"]);

proceso.stdout.on("data", (dato) => {
  // devuelve la data
  console.log(dato.toString());
});

proceso.on("exit", () => {
  // cuando termina el proceso
  console.log("TERMINO");
});

proceso.on("exit", () => {
  // revisa si cuando termina el proceso está muerto
  console.log("Está muerto ?", proceso.killed);
});
