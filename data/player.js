const casual = require('casual')
const gameData = require('./game')

casual.define('player', gameId => ({
  name: casual.first_name,
  playerNumber: casual.integer(from=0, to=10),
  gameId,
}))

const playerData = []

for (let i = 0; i < 10; ++i) {
  const gameId = casual.random_element(gameData).id
  playerData.push(casual.player(gameId))
}

module.exports = playerData
