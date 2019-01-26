const cheerio = require('cheerio')

module.exports = {
  scrap: async (content, selector) => {
    const data = []

    const $ = await cheerio.load(content)

    $(selector).each((i, element) => {
      const text = $(element).text()

      const pieces = text.split(' ')

      data.push({ currencySymbol: pieces[0], currencyValue: pieces[1]})
    })

    return data
  }
}
