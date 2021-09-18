// modulo global
let i = 0;
let intervalo = setInterval(() => {
  console.log("holiwi");
  if (i == 5) {
    clearInterval(intervalo);
  }
  i++;
}, 1000);
// ruta actual (carpeta), (archivo)
console.log(__dirname, __filename);

// variables globales
global.variable = "Variable global";
console.log(variable);

// global === this === globalThis
console.log(global === globalThis);
