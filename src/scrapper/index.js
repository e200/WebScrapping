module.exports = (loader, scrapper) => {
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
      const content = await loader.load(source)

      if (typeof content !== string) {
        throw 'Error'
      }

      const data = scrapper.scrap(content, selector)

      return data
    }
  }
}
