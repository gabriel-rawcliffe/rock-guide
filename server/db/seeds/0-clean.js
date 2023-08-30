/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('ticklist').del()
  await knex('hitlist').del()
  await knex('comments').del()
  await knex('users').del()
  await knex('climbs').del()
  await knex('sectors').del()
  await knex('crags').del()
  await knex('areas').del()
}
