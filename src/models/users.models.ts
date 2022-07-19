// src/todo/models/todo.models.ts
import * as NestJsGraphql from '@nestjs/graphql'

@NestJsGraphql.ObjectType('Users', { isAbstract: true })
export class Users {
  @NestJsGraphql.Field(() => NestJsGraphql.Int)
  id!: number

  @NestJsGraphql.Field(() => String)
  first_name!: string

  @NestJsGraphql.Field(() => String)
  last_name!: string

  @NestJsGraphql.Field(() => String, { nullable: true })
  gender?: string | null

  @NestJsGraphql.Field(() => Date)
  created_at!: Date

  @NestJsGraphql.Field(() => Date)
  updated_at!: Date
}
