import { makeExecutableSchema } from '@graphql-tools/schema'
import { typeDef as Query } from './schemas/Query'

export const typeDefs = makeExecutableSchema({
  typeDefs: [Query]
})
