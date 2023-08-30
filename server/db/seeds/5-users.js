/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('table_name').insert([
    {
      id: 'Auth0:12345',
      first_name: 'Test',
      last_name: 'Dummy',
      user_name: 'test_dummy',
      email: 'test.dummy@email.com',
    },
  ])
}
