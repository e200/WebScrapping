module.exports = (app) => {
  return {
    register: () => {
      app.get('/', (req, res) => {
        res.send(true)
      })
    }
  }
}
