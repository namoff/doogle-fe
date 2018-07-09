const puppeteer = require('puppeteer');
import { devices, testWord } from './helpers';

describe('App()', async () => {

  let browser;
  let page;
  let site = 'http://localhost:3001/';
  let api = 'https://immense-refuge-57175.herokuapp.com/';

  beforeAll(async () => {
    browser = await puppeteer.launch({
  	  headless: true,
      slowMo: 10
	  });
    page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on('request', request => {
      if (request.url() === api) {
        request.respond({
          content: 'application/json',
          headers: {"Access-Control-Allow-Origin": "*"},
          body: JSON.stringify([testWord])
        });
      }
      else {
          request.continue();
      }
      });
  });

  describe('Desktop', async () => {
    test('a user can search for a word', async () => {
      await page.setViewport({ width: 1200, height: 800 })
      await page.goto(site);
      await page.click('#word_name')
      await page.type('#word_name', testWord.word_name)
      await page.click('#submit')
      await page.waitForSelector('.card-text')
      const definition = await page.$eval('.card-text', e => e.innerHTML);
      expect(definition).toBe(testWord.definitions[0]);
    }, 10000)
  });

   describe('Mobile / Tablet', async () => {
    devices.forEach( async device => {
        test(device.name + ' a user can search for a word', async () => {
          await page.emulate(device);
          await page.goto(site);
          if (device.viewport.width < 992) { await page.click('.navbar-toggler'); }
          await page.click('#word_name')
          await page.type('#word_name', testWord.word_name)
          await page.click('#submit')
          await page.waitForSelector('.card-text')
          const definition = await page.$eval('.card-text', e => e.innerHTML);
        	expect(definition).toBe(testWord.definitions[0]);
        }, 10000)
     })
  });

  afterAll(async () => {
    await page.close();
    browser.close()
  });

});




// test('when the word doesnt exist', async () => {
//   await page.goto(site);
//
//   await page.click('#word_name')
//   await page.type('#word_name', 'doesntexist')
//   await page.click('#submit')
//
//   await page.waitForSelector('.card-body')
//   const html = await page.$eval('.card-body', e => e.innerHTML);
// 	expect(html).toBe('That word doesn\'t seem to exist...yet.');
// }, 10000)
