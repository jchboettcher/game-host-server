const Game = require('../../../models/Game')

// eslint-disable-next-line no-unused-vars
const game = async ({ gameId }, params, context) => {
  try {
    const g = Game.query().findOne('id', gameId)
    return g
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(error)
    throw new Error('failed to resolve game')
  }
}

const resolver = {
  Player: {
    game,
  },
}

module.exports = resolver
