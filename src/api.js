const express = require('express')
const app = express()

const server = require('./server')(app)

server.start()

process
  .on('uncaughtException', server.stop)
  .on('SIGTERM', server.stop)
