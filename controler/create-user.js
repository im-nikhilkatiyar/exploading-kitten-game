const client = require('../redis')

const userDetails = (req, res) => {
  let { userName, win, loose } = req.body
  win = win || 0;
  loose = loose || 0;
  client.hmset(userName, {
    'win': win,
    'loose': loose
  }, (error, reply) => {
    if (error) res.status(500).send("error :", error.toString())
    else {
      client.hgetall(userName, (e, obj) => {
        res.status(200).send(obj)
      })
    }
  })
}

module.exports = userDetails;