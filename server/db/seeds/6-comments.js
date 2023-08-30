/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('comments').insert([
    {
      id: 1,
      climb_id: 1,
      user_id: 'Auth0:12345',
      comment: 'This climb was really fun!',
    },
  ])
}
