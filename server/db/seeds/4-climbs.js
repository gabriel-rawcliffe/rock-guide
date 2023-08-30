/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('table_name').insert([
    {
      id: 1,
      topo_ref: 2,
      type: 'sport',
      name: 'Morning Glory',
      grade: '20',
      rating: 3,
      length: 24,
      description:
        'Climb up into the V groove on the arete and make a cruxy move out right onto the face to the finger pockets and small edges. Steeply up to the open groove and onwards to a good belay ledge',
      fa_climber: 'Graham Love',
      fa_year: '1984',
      sector_id: 2,
    },
    {
      id: 1,
      topo_ref: 4,
      type: 'mixed',
      name: 'Burning Sky',
      grade: '19',
      rating: 2,
      length: 24,
      description: `One of the most popular Main Cliff climbs. Easy climbing up to the bolt, then bridge up the hanging corner to a steep final crux. Good pro once you're past the bolt`,
      fa_climber: 'Dave Fearnley',
      fa_year: '1980',
      sector_id: 2,
    },
  ])
}

// table.increments('id').primary()
// topo_ref
// table.string('type')
// table.string('name')
// table.string('grade')
// table.integer('rating')
// table.integer('length')
// table.string('description')
// table.string('fa_climber')
// table.string('fa_year')
// table.integer('sector_id').references('sectors.id')
