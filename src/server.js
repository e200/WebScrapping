const config = require('./config')

let server = null

module.exports = (app) => {
  return {
    start: () => {
      server = app.listen(
        config.server.PORT,
        config.server.HOST
      )
      .on('listening', () => {
        const { address, port } = server.address()

        console.log(`Serving API at host ${address}:${port}`)
      })
      .on('error', (err) => {
        console.error(err)
      })
    },
    stop: (err) => {
      server.close()

      console.log(err)
    }
  }
}
