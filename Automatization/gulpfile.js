import { task, src } from "gulp";
import server from "gulp-server-livereload";

task("Build", (cb) => {
  console.log("Building the website");
  setTimeout(cb, 2000);
});

task("serve", (cb) => {
  src("./www/index.html").pipe(
    server({
      livereload: true,
      open: true,
    })
  );
});
