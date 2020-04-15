const cloudscraper = require('cloudscraper');
const puppeteer = require('puppeteer');


const requests = async(url) =>{
  const options = {
    method: 'GET',
  };
  return new Promise((resolve, reject) =>{
    const res = cloudscraper(url , options);
    resolve(res);     
  });
};

const requestIframeWithAttrSandBox = async(url) =>{
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  //await page.setDefaultNavigationTimeout(0)
  await page.goto(url , {
    waitUntil: 'load',
    timeout: 0
  });
  
  const urls = await page.$$eval('iframe', el=> [].map.call(el, d => d.src));
  await browser.close();

  const _url = urls[0];
  return _url
};

const getDecimalNumber = (str) =>{
  const regex = /[\d\.]+/;
  const value = parseFloat(str.match(regex));
  return value;
};

const urlify = async(text) =>{
  const urls = [];
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  text.replace(urlRegex , (url) =>{
    urls.push(url)
  });
  return Promise.all(urls);
};

module.exports = {
  requests,
  requestIframeWithAttrSandBox,
  getDecimalNumber,
  urlify
};