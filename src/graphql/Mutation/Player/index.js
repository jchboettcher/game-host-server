const merge = require('lodash.merge')
const addPlayer = require('./addPlayer')
const subresolvers = require('./subresolvers')

const resolvers = [addPlayer, subresolvers]

module.exports = merge(...resolvers)
