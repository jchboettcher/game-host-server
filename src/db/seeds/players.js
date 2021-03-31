const playerData = require('../../../data/player')

exports.seed = knex => knex('players').del()
  .then(() => knex('players').insert(playerData))
