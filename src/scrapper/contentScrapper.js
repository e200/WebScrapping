const cheerio = require('cheerio')

module.exports = {
  scrap: async (content, selector) => {
    const $ = await cheerio.load(content)

    return $(selector).text()
  }
}
