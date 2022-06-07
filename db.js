const knex = require('knex')
// const { connect } = require('./routes')
const config = require('./knexfile').development
const connection = knex(config)

function getAllWombles(db = connection) {
  return db(`wombles`).select()
}

function getCharByWomble(id, db = connection) {
  return db('wombles')
    .join('characteristics', 'wombles.characteristic_id', 'characteristics.id')
    .select(`wombles.id`, `wombles.name`, `characteristics.description`)
    .where('wombles.id', id)
    .first()
}

function assignRubbish(db = connection) {
  return db('wombles')
    .join('rubbish', 'wombles.rubbish_id', 'rubbish.id')
    .select('wombles.id', 'wombles.name', 'rubbish.name as rubbishDescription')
}

function addWomble(name, db = connection) {
  return db('wombles').insert({ name: name })
}

function retireWomble(id, db = connection) {
  return db('wombles').delete().where('id', id)
}

// function editWomble(characteristic, db=connection){
//   return db('wombles').update()
// }

module.exports = {
  getAllWombles,
  getCharByWomble,
  assignRubbish,
  addWomble,
  retireWomble,
}
