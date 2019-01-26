const cheerio   = require('cheerio')
const puppeteer = require('puppeteer')

const { URL } = require('./config/dataSource')

module.exports = (app) => {
  return {
    register: () => {
      app.get('/', async (req, res) => {
        const browser = await puppeteer.launch()
        const page    = await browser.newPage()

        await page.goto(URL)
        const html = await page.content()

        // cheerio.

        res.send(true)
      })
    }
  }
}
