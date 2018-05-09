const logger = require('../logger')
const { level } = require('../connection')

// In memory state
const state = {
  db: {}, // level
  size: 0,
  height: 0,
  app_hash: "",
}

module.exports.loadState = () => state;
module.exports.getState = () => state;
module.exports.setState = (k, v) => state[k] = v;
