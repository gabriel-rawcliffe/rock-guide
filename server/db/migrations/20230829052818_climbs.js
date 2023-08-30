/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('climbs', (table) => {
    table.increments('id').primary()
    table.integer('topo_ref') //reference to line on topo image
    table.string('type')
    table.string('name')
    table.string('grade')
    table.integer('rating')
    table.integer('length')
    table.string('description')
    table.string('fa_climber')
    table.string('fa_year')
    table.integer('sector_id').references('sectors.id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('climbs')
}
