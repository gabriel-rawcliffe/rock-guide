/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('comments', (table) => {
    table.increments('id').primary()
    table.integer('climb_id').references('climbs.id')
    table.string('user_id').references('users.id')
    table.string('comment')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('comments')
}
