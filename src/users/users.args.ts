import * as NestJsGraphql from '@nestjs/graphql'
import { UsersScalarFieldEnum } from './users.enum'
import {
  UsersCreateInput,
  UsersCreateManyInput,
  UsersOrderByWithAggregationInput,
  UsersOrderByWithRelationInput,
  UsersScalarWhereWithAggregatesInput,
  UsersUpdateInput,
  UsersUpdateManyMutationInput,
  UsersWhereInput,
  UsersWhereUniqueInput
} from './users.input'

@NestJsGraphql.ArgsType()
export class FindFirstUsersArgs {
  @NestJsGraphql.Field(() => UsersWhereInput, { nullable: true })
  where?: UsersWhereInput | undefined

  @NestJsGraphql.Field(() => [UsersOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UsersOrderByWithRelationInput> | undefined

  @NestJsGraphql.Field(() => UsersWhereUniqueInput, { nullable: true })
  cursor?: UsersWhereUniqueInput | undefined

  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  take?: number | undefined

  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  skip?: number | undefined

  @NestJsGraphql.Field(() => [UsersScalarFieldEnum], { nullable: true })
  distinct?: Array<'id' | 'first_name' | 'last_name' | 'gender' | 'created_at' | 'updated_at'> | undefined
}

@NestJsGraphql.ArgsType()
export class FindUniqueUsersArgs {
  @NestJsGraphql.Field(() => UsersWhereUniqueInput)
  where!: UsersWhereUniqueInput
}

@NestJsGraphql.ArgsType()
export class FindManyUsersArgs {
  @NestJsGraphql.Field(() => UsersWhereInput, { nullable: true })
  where?: UsersWhereInput | undefined

  @NestJsGraphql.Field(() => [UsersOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UsersOrderByWithRelationInput> | undefined

  @NestJsGraphql.Field(() => UsersWhereUniqueInput, { nullable: true })
  cursor?: UsersWhereUniqueInput | undefined

  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  take?: number | undefined

  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  skip?: number | undefined

  @NestJsGraphql.Field(() => [UsersScalarFieldEnum], { nullable: true })
  distinct?: Array<'id' | 'first_name' | 'last_name' | 'gender' | 'created_at' | 'updated_at'> | undefined
}

@NestJsGraphql.ArgsType()
export class GroupByUsersArgs {
  @NestJsGraphql.Field(() => UsersWhereInput, { nullable: true })
  where?: UsersWhereInput | undefined

  @NestJsGraphql.Field(() => [UsersOrderByWithAggregationInput], { nullable: true })
  orderBy: Array<UsersOrderByWithAggregationInput> | undefined

  @NestJsGraphql.Field(() => [UsersScalarFieldEnum])
  by!: Array<'id' | 'first_name' | 'last_name' | 'gender' | 'created_at' | 'updated_at'>

  @NestJsGraphql.Field(() => UsersScalarWhereWithAggregatesInput, { nullable: true })
  having?: UsersScalarWhereWithAggregatesInput | undefined

  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  take?: number | undefined

  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  skip?: number | undefined
}

@NestJsGraphql.ArgsType()
export class AggregateUsersArgs {
  @NestJsGraphql.Field(() => UsersWhereInput, { nullable: true })
  where?: UsersWhereInput | undefined

  @NestJsGraphql.Field(() => [UsersOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UsersOrderByWithRelationInput> | undefined

  @NestJsGraphql.Field(() => UsersWhereUniqueInput, { nullable: true })
  cursor?: UsersWhereUniqueInput | undefined

  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  take?: number | undefined

  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  skip?: number | undefined
}

@NestJsGraphql.ArgsType()
export class CreateUsersArgs {
  @NestJsGraphql.Field(() => UsersCreateInput)
  data!: UsersCreateInput
}

@NestJsGraphql.ArgsType()
export class CreateManyUsersArgs {
  @NestJsGraphql.Field(() => [UsersCreateManyInput])
  data!: Array<UsersCreateManyInput>

  @NestJsGraphql.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined
}

@NestJsGraphql.ArgsType()
export class UpdateUsersArgs {
  @NestJsGraphql.Field(() => UsersUpdateInput)
  data!: UsersUpdateInput

  @NestJsGraphql.Field(() => UsersWhereUniqueInput)
  where!: UsersWhereUniqueInput
}

@NestJsGraphql.ArgsType()
export class UpdateManyUsersArgs {
  @NestJsGraphql.Field(() => UsersUpdateManyMutationInput)
  data!: UsersUpdateManyMutationInput

  @NestJsGraphql.Field(() => UsersWhereInput, { nullable: true })
  where?: UsersWhereInput | undefined
}

@NestJsGraphql.ArgsType()
export class UpsertUsersArgs {
  @NestJsGraphql.Field(() => UsersWhereUniqueInput)
  where!: UsersWhereUniqueInput

  @NestJsGraphql.Field(() => UsersCreateInput)
  create!: UsersCreateInput

  @NestJsGraphql.Field(() => UsersUpdateInput)
  update!: UsersUpdateInput
}

@NestJsGraphql.ArgsType()
export class DeleteUsersArgs {
  @NestJsGraphql.Field(() => UsersWhereUniqueInput)
  where!: UsersWhereUniqueInput
}

@NestJsGraphql.ArgsType()
export class DeleteManyUsersArgs {
  @NestJsGraphql.Field(() => UsersWhereInput, { nullable: true })
  where?: UsersWhereInput | undefined
}
