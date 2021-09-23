// crear servidores o conectarnos
const http = require("http");

const router = (request, response) => {
  console.log("Nueva Peticion");
  console.log(request.url);

  switch (request.url) {
    case "/holi":
      response.write("Holiwi, que mas");
      response.end();
      break;
    default:
      response.write("No te conozco men");
      response.end();
      break;
  }

  // response.writeHead(201, {
  //   "Content-Type": "text/plain",
  //   Nombresito: "WIIIIIIII",
  // });
  // response.write("Holiwi, http con nodejs :3");

  // response.end();
};

http.createServer(router).listen(3000);
