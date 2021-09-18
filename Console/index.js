const tablita = [
  {
    tablita: "tablita 1",
    id: 0,
  },
  {
    tablita: "tablita 2",
    id: 2,
  },
];
console.group("Consoles"); // inicia group
console.log("Ver"); // ver algo
console.info("Holiwi"); // ver algo
console.error("Error"); // Error
console.warn("Warning"); // Posible error / feedback
console.groupEnd("Consoles"); // finaliza group
console.table(tablita); // pinta tablita
console.count("Bucle"); // cuenta las veces que
console.count("Bucle"); // se ha ejecutado
console.countReset("Bucle"); // resetea el count
console.count("Bucle");
