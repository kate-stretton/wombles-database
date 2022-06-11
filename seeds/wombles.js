exports.seed = (knex) =>
  knex('wombles')
    .truncate()
    .then(() =>
      knex('wombles').insert([
        {
          id: 88801,
          name: 'Great Uncle Bulgaria',
          characteristic_id: 99901,
          rubbish_id: 77701,
          image: '/images/bulgaria.jpg',
        },
        {
          id: 88802,
          name: 'Tobermory',
          characteristic_id: 99902,
          rubbish_id: 77702,
          image: '/images/tobermory.jpg',
        },
        {
          id: 88803,
          name: 'Madame Cholet',
          characteristic_id: 99903,
          rubbish_id: 77703,
          image: '/images/cholet.jpg',
        },
        {
          id: 88804,
          name: 'Orinoco',
          characteristic_id: 99904,
          rubbish_id: 77704,
          image: '/images/orinoco.jpg',
        },
        {
          id: 88805,
          name: 'Wellington',
          characteristic_id: 99905,
          rubbish_id: 77705,
          image: '/images/wellington.jpg',
        },
        {
          id: 88806,
          name: 'Tomsk',
          characteristic_id: 99906,
          rubbish_id: 77706,
          image: '/images/tomsk.jpg',
        },
        {
          id: 88807,
          name: 'Bungo',
          characteristic_id: 99907,
          rubbish_id: 77706,
          image: '/images/bungo.jpg',
        },
      ])
    )
