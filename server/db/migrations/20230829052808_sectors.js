/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('sectors', (table) => {
    table.increments('id').primary()
    table.string('description')
    table.string('name')
    table.string('topo')
    table.string('gps')
    table.string('approach_time')
    table.integer('crag_id').references('crags.id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('sectors')
}
