// const { gql } = require('apollo-boost')

module.exports = `
  type Mutation {
    addGame(input: AddGame!): Game!
    updateTurn(id: ID!, newTurn: Int!): Game!
    redistrOrder(id: ID!): Game!
  }

  type Query {
    allGames: [Game!]!
    gameByCode(roomCode: String!): Game
  }

  type Game {
    id: ID!
    roomCode: String!
    type: String!
    numPlayers: Int!
    turn: Int!
    public: Boolean!
    createdAt: String!
  }

  input AddGame {
    roomCode: String!
    type: String!
    public: Boolean!
  }
`