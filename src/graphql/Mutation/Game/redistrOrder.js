// Import Objection Models Here!
const Game = require('../../../models/Game')
const Player = require('../../../models/Player')

// eslint-disable-next-line no-unused-vars
const redistrOrder = async (obj, { id }, context) => {
  try {
    let game = await Game.query().findById(id).returning('*')
    const players = await Player.query().where('gameId', id).orderBy('joinedAt')
    const numPlayers = players.length
    if (game.numPlayers !== numPlayers) {
      console.log("fix numPlayers")
      game = await Game.query().patch({
        numPlayers,
      }).findById(id).returning('*')
    }
    for (let i = 0; i < numPlayers; i++) {
      const player = players[i]
      if (player.playerNumber !== i) {
        console.log("fix player", i,"-", player.name)
        await Player.query().patch({
          playerNumber: i,
        }).findById(player.id)
      }
    }
    return game
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(error)
    throw new Error('failed to update turn')
    // throw error
  }
}

// This resolver object mirrors the shape of your TypeDefs
const resolver = {
  Mutation: {
    redistrOrder,
  },
}

module.exports = resolver
