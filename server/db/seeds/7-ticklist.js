/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('ticklist').insert([
    { id: 1, climb_id: 1, user_id: 'Auth0:12345' },
  ])
}
