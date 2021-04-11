const { R_HOST, R_PORT, R_AUTH_PASS, R_SELECTED_DB } = process.env
const redisConfig = {
  host: R_HOST,
  port: R_PORT,
  auth_pass: R_AUTH_PASS,
  selected_db: R_SELECTED_DB
}

module.exports = redisConfig;
