/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('ticklist', (table) => {
    table.increments('id').primary()
    table.integer('climb_id').references('climb.id')
    table.string('user_id').references('user.id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('ticklist')
}
