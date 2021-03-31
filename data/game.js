const casual = require('casual')

casual.define('game', () => ({
  id: casual.uuid,
  roomCode: casual.uuid.substring(0,5),
  type: "BANG!",
  public: casual.boolean,
}))

const gameData = []

for (let i = 0; i < 2; ++i) {
  gameData.push(casual.game)
}

module.exports = gameData
