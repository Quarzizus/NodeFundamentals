// patron -> primer parametro(error)
// segundo parametro(callback)

function asincrona() {
  setTimeout(() => {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (error) {
      callback(error, null);
    }
  }, 0);
}
