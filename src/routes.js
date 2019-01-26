const cheerio = require('cheerio')
const client = require('puppeteer')

const { URL } = require('./config/dataSource')

module.exports = (app) => {
  return {
    register: () => {
      app.get('/', (req, res) => {
        browser = client.launch()

        //

        res.send(true)
      })
    }
  }
}
