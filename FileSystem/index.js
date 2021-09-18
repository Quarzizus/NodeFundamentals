/*
  Acceder a archivos de nuestro 
  sistema 
  -> editar, eliminar, agregar, llamar, crear
*/

const fs = require("fs");

const read = (ruta, cb) => {
  fs.readFile(ruta, (error, data) => {
    console.log(data.toString());
  });
};

const write = (ruta, contenido, cb) => {
  fs.writeFile(ruta, contenido, (error, data) => {
    error ? console.log("Paila->", error) : console.log("Ready");
  });
};

const remove = (ruta, cb) => {
  fs.unlink(ruta, (error) => {
    error ? console.log("Paila-> ", error) : null;
  });
};

read(__dirname + "/texto.txt");
write(__dirname + "/texto.txt", "Archivito nuevo");
remove(__dirname + "/borrar.txt");
