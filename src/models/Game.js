const BaseModel = require('./BaseModel')

class Game extends BaseModel {
  static get tableName() {
    return 'games'
  }

  static get relationMappings() {
    return {}
  }
}

module.exports = Game
