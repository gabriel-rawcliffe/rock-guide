/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('hitlist').insert([{ id: 1, climb_id: 2, user_id: 'Auth0:12345' }])
}
