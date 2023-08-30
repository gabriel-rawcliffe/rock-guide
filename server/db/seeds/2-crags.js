/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('table_name').insert([
    {
      id: 1,
      name: 'Long Beach',
      description:
        'A popular beach side crag with a lot of history. Routes are mostly on compact granite, but many secotrs are prone to rock fall, so helmets are recommended in most sectors',
      topo: '/images/longbeach.jpg',
      gps: '-45.75099484539666, 170.64469897647487',
      region: 'Otago',
      area_id: 1,
    },
  ])
}
