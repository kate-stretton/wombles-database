// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
exports.up = function (knex) {
  return knex.schema.alterTable(`wombles`, function (table) {
    table.integer(`rubbish_id`)
  })
}

// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
exports.down = function (knex) {
  return knex.schema.alterTable(`wombles`, function (table) {
    table.dropColumn('rubbish_id')
  })
}
