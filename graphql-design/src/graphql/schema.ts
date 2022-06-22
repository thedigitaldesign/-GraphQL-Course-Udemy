// Schema's are the data structures and what the data will be formatted as
// const { gql } = require('apollo-server')
const { resolvers } = require('./resolvers')
import { makeExecutableSchema } from '@graphql-tools/schema'
import { buildSchema } from 'graphql'
import { typeDef as Car } from './schemas/Car'
import { typeDef as Group } from './schemas/Group'


const Query = `
  type Query {
    hello: String
  }
`

exports.typeDefs = makeExecutableSchema({
  typeDefs: [Query, Car, Group]
})

// const schema = `
//   ${Car}
// `

// module.exports = buildSchema(schema)
