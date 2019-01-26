test('Loader load', async () => {
  const loader = require('../../src/scrapper/loader')

  expect(loader).toHaveProperty('load')
})
