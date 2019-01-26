const request = require('request-promise')

module.exports = {
  load: async (source) => {
    return await request.get(source)
  }
}
