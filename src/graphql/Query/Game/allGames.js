const Game = require('../../../models/Game')

const allGames = async () => {
  try {
    const today = new Date()
    const yesterday = (new Date(today - 86400000)).toISOString()
    const dateStr = `${yesterday.substring(0,10)} ${yesterday.substring(11,23)}00+00`
    const games = await Game.query()
      .where('public', true)
      .where('createdAt', '>', dateStr)
      .orderBy('numPlayers','DESC')
    return games
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(error)
    throw new Error('failed to get games')
    // throw error
  }
}

const resolver = {
  Query: { allGames },
}

module.exports = resolver
