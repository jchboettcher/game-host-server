const { BelongsToOneRelation } = require('objection')
const BaseModel = require('./BaseModel')

class Player extends BaseModel {
  static get tableName() {
    return 'players'
  }

  static get relationMappings() {
    const Game = require('./Game')

    return {
      address: {
        relation: BelongsToOneRelation,
        modelClass: Game,
        join: {
          from: 'players.gameId',
          to: 'games.id',
        },
      },
    }
  }
}

module.exports = Player
