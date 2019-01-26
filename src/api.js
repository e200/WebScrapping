const express = require('express')

const app = express()

const config = require('./config')

const server = app.listen(config.server.PORT, config.server.PORT)
  .on('listening', () => {
    const { address, port } = server.address()

    console.log(`Serving API at host ${address}:${port}`)
  })
