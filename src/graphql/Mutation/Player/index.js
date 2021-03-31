const merge = require('lodash.merge')
const addPlayer = require('./addPlayer')

const resolvers = [addPlayer]

module.exports = merge(...resolvers)
