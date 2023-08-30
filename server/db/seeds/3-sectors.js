/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('sectors').insert([
    {
      id: 1,
      name: 'Main Cliff Left',
      description:
        'An area with a number of high quality mixed and routes. Sections with poor protection have had bolts added, and rock quality is generally high.',
      topo: '/images/Main_Cliff_LHS.png',
      gps: '-45.748910933824426, 170.64406012126',
      approach_time: '5 min',
      crag_id: 1,
    },
    {
      id: 2,
      name: 'Main Cliff Central',
      description:
        'Some of the best climbing in the country for the grade! Sustained routes that give the feeling of exposure, but with adequate protection. Be aware or rock-fall from the ledge above "Crime & Punishment"',
      topo: '/images/Main_Cliff_Cent.png',
      gps: '-45.74864572454059, 170.64418680851654',
      approach_time: '5 min',
      crag_id: 1,
    },
  ])
}
