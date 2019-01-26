const request = require('request-promise')

module.exports = {
  load: async (source) => {
    try {
      const HTMLContent = await request.get(source)

      return HTMLContent
    } catch (ex) {
      console.log(ex)
    }
  }
}
