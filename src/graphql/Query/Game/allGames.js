const Game = require('../../models/Game')

const allGames = async () => {
  try {
    const games = await Game.query().where('public',true).orderBy('numPlayers','DESC')
    return games
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(error)
    // throw new Error('failed to get users')
    throw error
  }
}
const resolver = {
  Query: { allGames },
}

module.exports = resolver
