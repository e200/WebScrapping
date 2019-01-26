test('Content scrapper scrap', async () => {
  const scrapper = require('../../src/scrapper/contentScrapper')

  expect(scrapper).toHaveProperty('scrap')

  const data = await scrapper.scrap('<span class="data">$ 450</span>', '.data')

  expect(typeof data).toBe('object')
  expect(data.length).toBe(1)

  const firstDataObject = data[0]

  expect(firstDataObject).toHaveProperty('currencySymbol')
  expect(firstDataObject).toHaveProperty('currencyValue')

  expect(firstDataObject['currencySymbol']).toBe('$')
  expect(firstDataObject['currencyValue']).toBe('450')
})
