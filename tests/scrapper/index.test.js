
const loaderMock = jest.fn()
const contentScrapperMock = jest.fn()

const scrapper = require('../../src/scrapper')

test(
  'Call the loader and contentScrapper',
  async () => {
    loaderMock.load           = () => '<h1>HTML Content</h1>'
    contentScrapperMock.scrap = () => true

    const scrapperObject = scrapper(loaderMock, contentScrapperMock)
    const scrap          = await scrapperObject.resolve(null, null)

    expect(typeof scrap).toBe('object')
    expect(scrap).toHaveProperty('data')
    expect(scrap).toHaveProperty('error')
    expect(scrap.error).toBeNull()
    expect(scrap.data).toBe(true)
})

test(
  'Test behavior when loader return a non string',
  async () => {
    loaderMock.load = () => false

    const scrapperObject = scrapper(loaderMock, null)
    const scrap          = await scrapperObject.resolve(null, null)

    expect(typeof scrap).toBe('object')
    expect(scrap).toHaveProperty('data')
    expect(scrap).toHaveProperty('error')
    expect(scrap.error).toBe('The content given by the loader isn\'t a string')
    expect(scrap.data).toBeNull()
})
