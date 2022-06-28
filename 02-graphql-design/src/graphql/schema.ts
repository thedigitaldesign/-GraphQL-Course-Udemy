// Schema's are the data structures and what the data will be formatted as
// const { gql } = require('apollo-server')
const { resolvers } = require('./resolvers')
import { makeExecutableSchema } from '@graphql-tools/schema'
import { buildSchema } from 'graphql'
import { typeDef as Car } from './schemas/Car'
import { typeDef as Group } from './schemas/Group'
import { typeDef as Feature } from './schemas/Feature'
import { typeDef as Image } from './schemas/Image'

const Query = `
  type Query {
    hello: String
    cars: [Car!]!
    
  }
`

exports.typeDefs = makeExecutableSchema({
  typeDefs: [Query, Car, Group, Feature, Image]
})

// const schema = `
//   ${Car}
// `

// module.exports = buildSchema(schema)
