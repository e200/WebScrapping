test('Content scrapper scrap', async () => {
  const scrapper = require('../../src/scrapper/contentScrapper')

  expect(scrapper).toHaveProperty('scrap')
})
