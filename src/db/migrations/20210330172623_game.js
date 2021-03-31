const { createTableIfNotExists } = require('../helpers')

exports.up = async knex => createTableIfNotExists(knex, 'games', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table.string('roomCode')
    .unique()
    .notNullable()

  table.enum('type', ['BANG!']).notNullable()

  table.integer('numPlayers').defaultTo(0)
  
  table.integer('turn').defaultTo(0)

  table.boolean('public').notNullable()

  table.string('createdAt').defaultTo(knex.fn.now())
})

exports.down = async knex => knex.schema.dropTableIfExists('games')
