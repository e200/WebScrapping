let loaderMock = {
  load: (source) => {
    return '<h1>HTML content</h1>'
  }
}

let contentScrapper = {
  scrap: (content, seletor) => {
    return true
  }
}

const scrapper = require('../../src/scrapper')

let scapperInstance = scrapper(loaderMock, contentScrapper)

test(
  'Call `loader.load(source)` and `contentScrapper.scrap(conent)`',
  async () => {
    const scrap = await scapperInstance.resolve(null, null)

    expect(typeof scrap).toBe('object')
    expect(scrap).toHaveProperty('data')
    expect(scrap).toHaveProperty('error')
    expect(scrap.error).toBeNull()
    expect(scrap.data).toBe(true)
})

loaderMock = {
  load: (source) => {
    return null
  }
}

scapperInstance = scrapper(loaderMock, contentScrapper)

test(
  'Must return an error and no data',
  async () => {
    const scrap = await scapperInstance.resolve(null, null)

    expect(typeof scrap).toBe('object')
    expect(scrap).toHaveProperty('data')
    expect(scrap).toHaveProperty('error')
    expect(scrap.error).toBe('The content given by the loader isn\'t a string')
    expect(scrap.data).toBeNull()
})
