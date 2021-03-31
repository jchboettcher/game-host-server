// Import Objection Models Here!
const Game = require('../../models/Game')

// eslint-disable-next-line no-unused-vars
const addGame = async (obj, { input }, context) => {
  try {
    const game = await Game.query().insert(input).returning('*')
    return game
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(error)
    // return null
    throw new Error('failed to insert user')
    // throw error
  }
}

// This resolver object mirrors the shape of your TypeDefs
const resolver = {
  Mutation: {
    addGame,
  },
}

module.exports = resolver
