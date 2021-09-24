const sharp = require("sharp");

sharp("perfil.jpeg").resize(360).toFile("Perfilito.svg");
