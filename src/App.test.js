const puppeteer = require('puppeteer');

describe('A user searching for a word', () => {

  test('when the word exists', async () => {
    let browser = await puppeteer.launch({
  	  headless: true
  	});
  	let page = await browser.newPage();

  	await page.goto('http://localhost:3001/');
    await page.click('[data-id="word-input"]')
    await page.type('[data-id="word-input"]', 'Luna')
    await page.click('[data.testid="submit"]')

    await page.waitForSelector('.definition-card')
    const html = await page.$eval('.definition-card', e => e.innerHTML);
  	expect(html).toBe('the best cat in the world');
    browser.close();
  }, 1600)

  test('when the word doesn\'t exist', async () => {
    let browser = await puppeteer.launch({
  	  headless: true
  	});
  	let page = await browser.newPage();

  	await page.goto('http://localhost:3001/');
    await page.click('[data-id="word-input"]')
    await page.type('[data-id="word-input"]', 'blahblahblah')
    await page.click('[data.testid="submit"]')

    await page.waitForSelector('.alert')
    const html = await page.$eval('.alert', e => e.innerHTML);
  	expect(html).toBe('Sorry, that word couldn\'t be found.');
    browser.close();
  }, 1600)

});
