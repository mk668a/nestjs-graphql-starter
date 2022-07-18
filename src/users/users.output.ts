import * as NestJsGraphql from '@nestjs/graphql'

@NestJsGraphql.ObjectType('UsersSumAggregate', { isAbstract: true })
export class UsersSumAggregate {
  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  id!: number | null
}

@NestJsGraphql.ObjectType('UsersMinAggregate', { isAbstract: true })
export class UsersMinAggregate {
  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  id!: number | null

  @NestJsGraphql.Field(() => String, { nullable: true })
  first_name!: string | null

  @NestJsGraphql.Field(() => String, { nullable: true })
  last_name!: string | null

  @NestJsGraphql.Field(() => String, { nullable: true })
  gender!: string | null

  @NestJsGraphql.Field(() => String, { nullable: true })
  created_at!: string | null

  @NestJsGraphql.Field(() => String, { nullable: true })
  updated_at!: string | null
}

@NestJsGraphql.ObjectType('UsersMaxAggregate', { isAbstract: true })
export class UsersMaxAggregate {
  @NestJsGraphql.Field(() => NestJsGraphql.Int, { nullable: true })
  id!: number | null

  @NestJsGraphql.Field(() => String, { nullable: true })
  first_name!: string | null

  @NestJsGraphql.Field(() => String, { nullable: true })
  last_name!: string | null

  @NestJsGraphql.Field(() => String, { nullable: true })
  gender!: string | null

  @NestJsGraphql.Field(() => String, { nullable: true })
  created_at!: string | null

  @NestJsGraphql.Field(() => String, { nullable: true })
  updated_at!: string | null
}

@NestJsGraphql.ObjectType('UsersCountAggregate', { isAbstract: true })
export class UsersCountAggregate {
  @NestJsGraphql.Field(() => NestJsGraphql.Int)
  id!: number

  @NestJsGraphql.Field(() => NestJsGraphql.Int)
  first_name!: number

  @NestJsGraphql.Field(() => NestJsGraphql.Int)
  last_name!: number

  @NestJsGraphql.Field(() => NestJsGraphql.Int)
  gender!: number

  @NestJsGraphql.Field(() => NestJsGraphql.Int)
  created_at!: number

  @NestJsGraphql.Field(() => NestJsGraphql.Int)
  updated_at!: number

  @NestJsGraphql.Field(() => NestJsGraphql.Int)
  _all!: number
}

@NestJsGraphql.ObjectType('UsersAvgAggregate', { isAbstract: true })
export class UsersAvgAggregate {
  @NestJsGraphql.Field(() => NestJsGraphql.Float, { nullable: true })
  id!: number | null
}

@NestJsGraphql.ObjectType('AggregateUsers', { isAbstract: true })
export class AggregateUsers {
  @NestJsGraphql.Field(() => UsersCountAggregate, { nullable: true })
  _count!: UsersCountAggregate | null

  @NestJsGraphql.Field(() => UsersAvgAggregate, { nullable: true })
  _avg!: UsersAvgAggregate | null

  @NestJsGraphql.Field(() => UsersSumAggregate, { nullable: true })
  _sum!: UsersSumAggregate | null

  @NestJsGraphql.Field(() => UsersMinAggregate, { nullable: true })
  _min!: UsersMinAggregate | null

  @NestJsGraphql.Field(() => UsersMaxAggregate, { nullable: true })
  _max!: UsersMaxAggregate | null
}

@NestJsGraphql.ObjectType('UsersGroupBy', { isAbstract: true })
export class UsersGroupBy {
  @NestJsGraphql.Field(() => NestJsGraphql.Int)
  id!: number

  @NestJsGraphql.Field(() => String)
  first_name!: string

  @NestJsGraphql.Field(() => String)
  last_name!: string

  @NestJsGraphql.Field(() => String, { nullable: true })
  gender!: string | null

  @NestJsGraphql.Field(() => String)
  created_at!: string

  @NestJsGraphql.Field(() => String)
  updated_at!: string

  @NestJsGraphql.Field(() => UsersCountAggregate, { nullable: true })
  _count!: UsersCountAggregate | null

  @NestJsGraphql.Field(() => UsersAvgAggregate, { nullable: true })
  _avg!: UsersAvgAggregate | null

  @NestJsGraphql.Field(() => UsersSumAggregate, { nullable: true })
  _sum!: UsersSumAggregate | null

  @NestJsGraphql.Field(() => UsersMinAggregate, { nullable: true })
  _min!: UsersMinAggregate | null

  @NestJsGraphql.Field(() => UsersMaxAggregate, { nullable: true })
  _max!: UsersMaxAggregate | null
}

@NestJsGraphql.ObjectType('AffectedRowsOutput', { isAbstract: true })
export class AffectedRowsOutput {
  @NestJsGraphql.Field(() => NestJsGraphql.Int)
  count!: number
}
