// const { gql } = require('apollo-boost')

module.exports = `
  type Mutation {
    addPlayer(input: AddPlayer!): Player!
  }

  type Query {
  }

  type Player {
    id: ID!
    name: String!
    roomCode: String!
  }

  input AddPlayer {
    name: String!
    roomCode: String!
  }
`