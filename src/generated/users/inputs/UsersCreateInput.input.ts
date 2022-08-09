import * as NestJsGraphQL from '@nestjs/graphql'
import { PostCreateNestedManyWithoutAuthorInput } from '../../post/inputs/PostCreateNestedManyWithoutAuthorInput.input'

@NestJsGraphQL.InputType('UsersCreateInput', { isAbstract: true })
export class UsersCreateInput {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined

  @NestJsGraphQL.Field(() => String)
  first_name!: string

  @NestJsGraphQL.Field(() => String)
  last_name!: string

  @NestJsGraphQL.Field(() => String)
  email!: string

  @NestJsGraphQL.Field(() => String, { nullable: true })
  gender?: string | undefined

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  created_at?: Date | undefined

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updated_at?: Date | undefined

  @NestJsGraphQL.Field(() => PostCreateNestedManyWithoutAuthorInput, { nullable: true })
  posts?: PostCreateNestedManyWithoutAuthorInput | undefined
}
