const cosmosConfig = require('./cosmos.config')

module.exports = {
  ...cosmosConfig,
  next: true,
  port: 9999
}

