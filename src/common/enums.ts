import * as NestJsGraphql from '@nestjs/graphql'

export enum QueryMode {
  'default' = 'default',
  insensitive = 'insensitive'
}
NestJsGraphql.registerEnumType(QueryMode, {
  name: 'QueryMode',
  description: undefined
})

export enum SortOrder {
  asc = 'asc',
  desc = 'desc'
}
NestJsGraphql.registerEnumType(SortOrder, {
  name: 'SortOrder',
  description: undefined
})
