// src/todo/models/todo.models.ts
import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql'

export enum Status {
  ACTIVE,
  INACTIVE
}
registerEnumType(Status, {
  name: 'Status'
})

@ObjectType()
export class Users {
  @Field(() => ID)
  id: string

  @Field()
  first_name: string

  @Field()
  last_name: string

  @Field({ nullable: true })
  gender?: string

  @Field(() => Status)
  status: Status

  @Field()
  created_at: Date

  @Field()
  updated_at: Date
}
