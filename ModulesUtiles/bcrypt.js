const bcrypt = require("bcrypt");

const password = "123456M@";
const password2 = "Holiwi";

bcrypt.hash(password, 5, (error, hash) => {
  if (error) return error.message;
  return hash;
});

// bcrypt.compare(password, hash, (error, stdout) => {
//   console.log(stdout);
// });
// bcrypt.compare(password2, hash, (error, stdout) => {
//   console.log(stdout);
// });
