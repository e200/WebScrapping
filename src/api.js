const express = require('express')

const app = express()

const config = require('./config')

const server = app.listen(config.server.PORT, config.server.PORT)
  .on('listening', () => {
    console.log(`Serving API at host ${server.address.host}:${server.address.PORT}`)
  })
