const router = require('express').Router()

module.exports = {
  register: () => {
    router.get('/', () => {
      return true
    })
  }
}
