const merge = require('lodash.merge')
const addGame = require('./addGame')
const updateTurn = require('./updateTurn')
const redistrOrder = require('./redistrOrder')

const resolvers = [addGame, updateTurn, redistrOrder]

module.exports = merge(...resolvers)
