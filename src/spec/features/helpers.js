const puppeteer = require('puppeteer');
const puppeteerDevices = require('puppeteer/DeviceDescriptors');
const faker = require('faker');

export const devices = [
  puppeteerDevices['iPhone 6'],
  puppeteerDevices['iPhone 6 landscape'],
  puppeteerDevices['iPad'],
  puppeteerDevices['iPad landscape'],
  puppeteerDevices['Galaxy S5'],
  puppeteerDevices['Galaxy S5 landscape']
]

export const testWord = {
  word_name: faker.lorem.word(),
  word_class: faker.lorem.word(),
  definitions: [
    faker.lorem.sentence(),
    faker.lorem.sentence(),
    faker.lorem.sentence()
  ]
}
