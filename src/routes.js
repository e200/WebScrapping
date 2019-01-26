const loader          = require('./scrapper/loader')
const contentScrapper = require('./scrapper/contentScrapper')
const scrapper        = require('./scrapper')(loader, contentScrapper)

const dataSource = require('./config/dataSource')

module.exports = (app) => {
  return {
    register: () => {
      app.get('/', async (req, res) => {
        const DOMSelector = '.header-content .row .col-xs-12.quotation'
        const scrap       = await scrapper.resolve(dataSource.URL, DOMSelector)

        res.send(scrap)
      })
    }
  }
}
