import * as NestJsGraphql from '@nestjs/graphql'

export enum UsersScalarFieldEnum {
  id = 'id',
  first_name = 'first_name',
  last_name = 'last_name',
  gender = 'gender',
  created_at = 'created_at',
  updated_at = 'updated_at'
}
NestJsGraphql.registerEnumType(UsersScalarFieldEnum, {
  name: 'UsersScalarFieldEnum',
  description: undefined
})
