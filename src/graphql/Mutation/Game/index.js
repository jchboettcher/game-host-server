const merge = require('lodash.merge')
const addGame = require('./addGame')
const updateTurn = require('./updateTurn')

const resolvers = [addGame, updateTurn]

module.exports = merge(...resolvers)
