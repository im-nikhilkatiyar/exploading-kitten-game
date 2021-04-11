const redis = require('redis')
const redisConfig = require('./redis-config')

const client = redis.createClient(redisConfig);

client.on("connect", () => {
  console.log("connection established with redish")
});
client.on("error", err => {
  console.log("getting error :", err)
});

module.exports = client;