const merge = require('lodash.merge')
const playersInRoom = require('./playersInRoom')

const resolvers = [playersInRoom]

module.exports = merge(...resolvers)
