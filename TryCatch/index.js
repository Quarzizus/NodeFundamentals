const romperPrograma = () => {
  return 3 + z;
};

const function2 = () => {
  console.warn("FUNCTION\n");
  return romperPrograma();
};

const funtionAsync = () => {
  setTimeout(() => {
    try {
      console.log("Soy funcionAsync");
      return 3 + z;
    } catch (error) {
      console.error(error.message);
    }
  }, 1000);
};

try {
  funtionAsync();
} catch (error) {
  console.error("Se rompió todito\n", error);
}
