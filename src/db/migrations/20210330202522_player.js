const { createTableIfNotExists } = require('../helpers')

exports.up = async knex => createTableIfNotExists(knex, 'players', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table.string('name').notNullable()
  
  table.integer("playerNumber").notNullable()

  table.uuid('gameId')
    .references('games.id')
    .notNullable()
    .onUpdate('CASCADE')
    .onDelete('CASCADE')

  table.string('joinedAt').defaultTo(knex.fn.now())
})

exports.down = async knex => knex.schema.dropTableIfExists('players')
