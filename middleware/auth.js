const client = require('../redis')

const authentication = (req, res, next) => {
  const {userName, win, loose} = req.body
  client.exists(userName, function (err, reply) {
    if (reply === 0) {
      next()
    } else {
      client.hgetall(userName, (e, obj) => {
        if(e) return res.status(400).send(e)
        if(parseInt(obj.win) < parseInt(win)) {
          client.hincrby(userName, "win", 1, (err, resp) => {
            return res.send(resp)
          })
        }
        if(parseInt(obj.loose) < parseInt(loose)) {
          client.hincrby(userName, "loose", 1, (err, resp) => {
            return res.send(resp)
          })
        }
        res.status(200).send(obj)
      })
    }
  });
}

module.exports = authentication;