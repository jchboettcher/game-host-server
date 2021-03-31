const Game = require('../../../models/Game')

const gameByCode = async (obj, { roomCode }, context) => {
  try {
    const game = await Game.query().findOne({ roomCode })
    return game
  } catch (error) {
    console.warn(error)
    throw new Error('failed to get game by code')
    // throw error
  }
}

const resolver = {
  Query: {
    gameByCode,
  },
}

module.exports = resolver
