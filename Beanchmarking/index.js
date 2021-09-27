let suma = 0;
let suma2 = 0;

console.time("Bucle");
for (let i = 0; i < 1000000000; i++) {
  suma++;
}
console.timeEnd("Bucle");

console.time("Bucle 2");
for (let i = 0; i < 100000; i++) {
  suma2++;
}
console.timeEnd("Bucle 2");
