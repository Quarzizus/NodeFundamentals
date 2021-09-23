const os = require("os");

console.log(os.arch());
console.log(os.cpus().length);
console.log(os.platform());
console.log(os.constants);

const size = 1024;

const kb = (bytes) => {
  return bytes / size;
};
const mg = (bytes) => {
  return kb(bytes) / size;
};
const gb = (bytes) => {
  return mg(bytes) / size;
};
console.log(gb(os.freemem())); //  memoria RAM disponible
console.log(gb(os.totalmem())); // memoria RAM disponible

console.log(os.homedir()); // directorio raiz
console.log(os.tmpdir()); // temporal
console.log(os.hostname()); // host de la maquina
console.log(os.networkInterfaces()); // info
