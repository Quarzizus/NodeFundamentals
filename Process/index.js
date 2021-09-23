// proceso de node
// const process = require("process"); // md global

process.on("beforeExit", () => {
  console.log("Proceso apunto de terminar");
});

process.on("exit", () => {
  // desconectado del event loop
  console.log("Proceso terminado ");
});

// controlar errores
process.on("uncaughtException", (error, origin) => {
  console.error(error.message + " -> " + origin);
});

// promesas que no se han completado
// process.on("uncaughtRejection");
