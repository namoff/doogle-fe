const puppeteer = require('puppeteer');

describe('A user searching for a word', () => {

  let browser;
  let page;
  let site = 'http://localhost:3001/';

  beforeAll(async () => {
    browser = await puppeteer.launch({
  	  headless: false,
      slowMo: 50
	  });
    page = await browser.newPage();
    page.setViewport({ width: 1200, height: 800 })
  });

  test('when the word exists', async () => {
    await page.goto(site);

    await page.click('#word_name')
    await page.type('#word_name', 'lab')
    await page.click('#submit')

    await page.waitForSelector('.card-text')
    const html = await page.$eval('.card-text', e => e.innerHTML);
  	expect(html).toBe('laboratory');
  }, 10000)

  test('when the word doesnt exist', async () => {
    await page.goto(site);

    await page.click('#word_name')
    await page.type('#word_name', 'doesntexist')
    await page.click('#submit')

    await page.waitForSelector('.card-body')
    const html = await page.$eval('.card-body', e => e.innerHTML);
  	expect(html).toBe('That word doesn\'t seem to exist...yet.');
  }, 10000)

  afterAll(async () => {
    await page.close();
    browser.close()
  });

});
