const pupperteer = require("puppeteer");

const scrap = async () => {
  console.log("Lanzamos navegador");
  const browser = await pupperteer.launch({ headless: false });

  const page = await browser.newPage();
  await page.goto("https://quarzizus.web.app");

  const tituto = await page.evaluate(() => {
    const h1 = document.querySelector("h1");
    return h1.innerHTML;
  });
  console.log(tituto);
  console.log("Cerramos navegador");
  // browser.close();
  console.log("Navegador cerrado");
};

scrap();
