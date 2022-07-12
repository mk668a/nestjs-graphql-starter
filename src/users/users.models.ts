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
  @Field((type) => ID)
  id: string

  @Field()
  firstName: string

  @Field()
  lastName: string

  @Field({ nullable: true })
  gender: string

  @Field((type) => Status)
  status: Status

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
}
