// Import Objection Models Here!
const Player = require('../../models/Player')
const Game = require('../../models/Game')

// eslint-disable-next-line no-unused-vars
const addPlayer = async (obj, { input }, context) => {
  try {
    const { roomCode, ...rest } = input
    const gameId = (await Game.query().findOne(roomCode)).id
    const newInput = {gameId, ...rest}
    const player = await Player.query().insert(newInput).returning('*')
    return player
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(error)
    throw new Error('failed to insert author')
  }
}

// This resolver object mirrors the shape of your TypeDefs
const resolver = {
  Mutation: {
    addPlayer,
  },
}

module.exports = resolver
