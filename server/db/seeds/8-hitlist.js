/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('table_name').insert([
    { id: 1, climb_id: 2, user_id: 'Auth0:12345' },
  ])
}
