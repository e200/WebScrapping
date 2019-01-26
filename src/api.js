const express = require('express')
const app = express()

const server = require('./server')(app)
const routes = require('./routes')(app)

routes.register()

server.start()

process
  .on('SIGTERM', server.stop)
  .on('uncaughtException', server.stop)
