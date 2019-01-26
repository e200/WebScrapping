module.exports = (loader, contentScrapper) => {
  return {
    /**
     * Doesn't know what kind of `source`
     * it will load, so it can be anything
     * like a file path, url, a string. But,
     * the loader must always return a string.
     *
     * It would be easy if it was TypeScript
     * (with Contracts), but I don't have time
     * to learn it yet.
     */
    resolve: async (source, selector) => {
      const scrap   = { error: null, data: null }
      const content = await loader.load(source)

      if (typeof content === 'string') {
        scrap.data = await contentScrapper.scrap(content, selector)
      } else {
        scrap.error = 'The content given by the loader isn\'t a string'
      }

      return scrap
    }
  }
}
