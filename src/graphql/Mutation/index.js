const merge = require('lodash.merge')
const Game = require('./Game')
const Player = require('./Player')

const resolvers = [Game, Player]

module.exports = merge(...resolvers)
