const puppeteer = require('puppeteer');

const url = 'http://localhost:4000';
const page = 'login'; // '' or 'machines/71'

(async () => {
  const browser = await puppeteer.launch({
    timeout: 300000,
    defaultViewport: {
      width: 1360,
      height: 768
    }
  });
  const page = await browser.newPage();

  await page.goto(`${url}/${page}`, {
    waitUntil: 'domcontentloaded'
    // waitUntil: 'PrebootComplete'
  });
  await page.screenshot({ path: 'example.png' });
  const html = await page.content();

  await browser.close();
})();
