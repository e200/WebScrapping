const cheerio   = require('cheerio')
const request = require('request-promise')

const { URL } = require('./config/dataSource')

module.exports = (app) => {
  return {
    register: () => {
      app.get('/', async (req, res) => {
        /**
         * This is how I think it will be. :)
         */
        // const data = await scrapper.scrap(URL, '.header-content .row .col-xs-12')

        const html = await request.get(URL)

        const $ = await cheerio.load(html)

        const text = $('.header-content .row .col-xs-12').text()

        res.send(text)
      })
    }
  }
}
