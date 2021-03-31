const Game = require('../../../models/Game')
const Player = require('../../../models/Player')

const playersInRoom = async (obj, { roomCode }, context) => {
  try {
    const gameId = (await Game.query().findOne({ roomCode })).id
    const players = await Player.query().where({ gameId }).orderBy('playerNumber')
    return players
  } catch (error) {
    console.warn(error)
    throw new Error('failed to get players in room')
    // throw error
  }
}

const resolver = {
  Query: {
    playersInRoom,
  },
}

module.exports = resolver
