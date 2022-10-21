require('dotenv/config');
module.exports = {
  development: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSW || "postgres",
    database: "product",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {},
  production: {}
}
