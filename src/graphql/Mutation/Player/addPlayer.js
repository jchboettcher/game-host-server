// Import Objection Models Here!
const { raw, ref } = require('objection')
const Player = require('../../../models/Player')
const Game = require('../../../models/Game')

// eslint-disable-next-line no-unused-vars
const addPlayer = async (obj, { input }, context) => {
  try {
    const { roomCode, ...rest } = input
    const game = await Game.query().findOne({ roomCode }).returning('*')
    const gameId = game.id
    const playerNumber = game.numPlayers
    await Game.query().patch({
      numPlayers: playerNumber + 1,
    }).findById(gameId)
    const newInput = {gameId, playerNumber, ...rest}
    const player = await Player.query().insert(newInput).returning('*')
    return player
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(error)
    throw new Error('failed to insert player')
  }
}

// This resolver object mirrors the shape of your TypeDefs
const resolver = {
  Mutation: {
    addPlayer,
  },
}

module.exports = resolver
