/* 
Buffer 
-> convierte y almacena elementos en binario
-> Los guarda en la memoria RAM, significa que 
son temporales (version más cruda)
-> .alloc(bytes) reserva y guarda el numero de 
bytes qye se le especifiquen
-> .from al igual que alloc, guarda espacios en 
memoria RAM. Cada elemento en el array es un 
space
*/

let buffer = Buffer.alloc(3);
let bufferFrom = Buffer.from([1, 2, 3]);
let bufferFromString = Buffer.from("Holiwi");
console.log(buffer);
console.log(bufferFrom);
console.log(bufferFromString);

let abcdario = Buffer.alloc(26);

for (let i = 0; i <= abcdario.length; i++) {
  abcdario[i] = i + 97;
}

console.log(abcdario.toString());
