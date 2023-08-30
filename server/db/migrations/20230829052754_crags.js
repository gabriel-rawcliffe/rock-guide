/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('crags', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('description')
    table.string('topo')
    table.string('gps')
    table.string('region')
    table.integer('area_id').references('areas.id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('crags')
}
