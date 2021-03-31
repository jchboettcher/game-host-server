// const { gql } = require('apollo-boost')

module.exports = `
  type Mutation {
    addPlayer(input: AddPlayer!): Player!
  }

  type Query {
    playersInRoom(roomCode: String!): [Player!]!
  }

  type Player {
    id: ID!
    name: String!
    playerNumber: Int!
    joinedAt: String!
    game: Game!
  }

  input AddPlayer {
    name: String!
    roomCode: String!
  }
`