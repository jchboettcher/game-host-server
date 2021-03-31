// Import Objection Models Here!
const Game = require('../../models/Game')

// eslint-disable-next-line no-unused-vars
const updateTurn = async (obj, { id, newTurn }, context) => {
  try {
    const newGame = await Game.query().patch({
      turn: newTurn,
    }).findById(id).returning('*')
    return newGame
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(error)
    // throw new Error('failed to update score')
    throw error
  }
}

// This resolver object mirrors the shape of your TypeDefs
const resolver = {
  Mutation: {
    updateTurn,
  },
}

module.exports = resolver
