/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('areas').insert([
    {
      id: 1,
      name: 'Dunedin',
      description:
        'Dunedin has a rich climbing history. The harbour was formed from the Dunedin volcano, meaning the hills and coast surrounding the harbour are littered with accessible basalt crags.',
      image: '',
    },
    {
      id: 2,
      name: 'Milford',
      description:
        "Milford and the surrounding area has New Zealand's best quality rock. With seemingly limitless granite, this area has exceptional trad and sport climbing, including towering multi-pitch routes. There is also boulders littered all across the valleys meaning those with a willingness to do some mahi and a good supply of wire brushes can find first ascents aplenty",
      image: '',
    },
    {
      id: 3,
      name: 'Wanaka',
      description:
        "Wanaka is one of the New Zealand's best sport climbing areas. It has over 1000 routes on mostly high quality schist. The setting and ease of access make the area a popular destination for locals and visitors alike",
      image: '',
    },
  ])
}
