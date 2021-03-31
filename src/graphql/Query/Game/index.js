const merge = require('lodash.merge')
const allGames = require('./allGames')
const gameByCode = require('./gameByCode')

const resolvers = [allGames, gameByCode]

module.exports = merge(...resolvers)
