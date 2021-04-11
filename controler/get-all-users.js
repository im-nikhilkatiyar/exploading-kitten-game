const client = require('../redis')

const GetAllUsers = (req, res) => {
  client.keys('*', async (error, reply) => {
    if (error) res.status(500).send("error :>", error.toString())
    if (reply.length === 0) {
      res.status(204)
      return
    }
    const AllUserDetails = [];
    reply.map( (user, index) => {
      client.hgetall(user, (e, obj) => {
        AllUserDetails.push({ ...obj, userName: user })
        if (index === reply.length-1) res.status(200).send(AllUserDetails)
      })
    })
  })
}

module.exports = GetAllUsers;