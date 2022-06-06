const knex = require('knex')
// const { connect } = require('./routes')
const config = require('./knexfile').development
const connection = knex(config)

function getAllWombles(db = connection) {
  return db(`wombles`).select()
}

module.exports = {
  getAllWombles,
}
