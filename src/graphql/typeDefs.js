const gameTypeDefs = require('./gameTypeDefs')
const playerTypeDefs = require('./playerTypeDefs')

const merge = lst => {
  const f = (acc, str) => {
    const first = str.indexOf('type Mutation {')
    const second = str.indexOf('}',first)
    const third = str.indexOf('type Query {')
    const fourth = str.indexOf('}',third)
    const fifth = str.indexOf('{',fourth+1)
    const sixth = str.lastIndexOf('\n',fifth)
    const mut = str.substring(first+18,second)
    const que = str.substring(third+15,fourth)
    const ext = fifth === -1 ? '' : '\n  ' + str.substring(sixth+3)
    return [
      acc[0] + mut,
      acc[1] + que,
      acc[2] + ext,
    ]
  }
  const merged = lst.reduce(f, ['', '', ''])
  return `
  type Mutation {
  ${merged[0]}}
  
  type Query {
  ${merged[1]}}
${merged[2]}`
}

module.exports = merge([
  gameTypeDefs,
  playerTypeDefs,
])