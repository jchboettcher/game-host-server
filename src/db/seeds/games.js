const gameData = require('../../../data/game')

exports.seed = knex => knex('games').del()
  .then(() => knex('games').insert(gameData))
