import * as NestJsGraphql from '@nestjs/graphql'
import { UsersService } from './users.service'
import { Users } from 'src/models/users.models'
import { AffectedRowsOutput, AggregateUsers, UsersGroupBy } from './users.output'
import {
  AggregateUsersArgs,
  CreateManyUsersArgs,
  CreateUsersArgs,
  DeleteManyUsersArgs,
  DeleteUsersArgs,
  FindFirstUsersArgs,
  FindManyUsersArgs,
  FindUniqueUsersArgs,
  GroupByUsersArgs,
  UpdateManyUsersArgs,
  UpdateUsersArgs,
  UpsertUsersArgs
} from './users.args'

@NestJsGraphql.Resolver(() => Users)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @NestJsGraphql.Query(() => Users, { nullable: false })
  findFirstUsers(@NestJsGraphql.Args() args: FindFirstUsersArgs) {
    return this.usersService.findFirst(args)
  }

  @NestJsGraphql.Query(() => Users, { nullable: false })
  findUniqueUsers(@NestJsGraphql.Args() args: FindUniqueUsersArgs) {
    return this.usersService.findUnique(args)
  }

  @NestJsGraphql.Query(() => [Users], { nullable: false })
  findManyUsers(@NestJsGraphql.Args() args: FindManyUsersArgs) {
    return this.usersService.findMany(args)
  }

  @NestJsGraphql.Query(() => [UsersGroupBy], { nullable: false })
  groupByUsers(@NestJsGraphql.Args() args: GroupByUsersArgs) {
    return this.usersService.groupBy(args)
  }

  @NestJsGraphql.Query(() => AggregateUsers, { nullable: false })
  aggregateUsers(@NestJsGraphql.Args() args: AggregateUsersArgs) {
    return this.usersService.aggregate(args)
  }

  @NestJsGraphql.Mutation(() => Users, { nullable: true })
  createUsers(@NestJsGraphql.Args() args: CreateUsersArgs) {
    return this.usersService.create(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  createManyUsers(@NestJsGraphql.Args() args: CreateManyUsersArgs) {
    return this.usersService.createMany(args)
  }

  @NestJsGraphql.Mutation(() => Users, { nullable: true })
  updateUsers(@NestJsGraphql.Args() args: UpdateUsersArgs) {
    return this.usersService.update(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  updateManyUsers(@NestJsGraphql.Args() args: UpdateManyUsersArgs) {
    return this.usersService.updateMany(args)
  }

  @NestJsGraphql.Mutation(() => Users, { nullable: true })
  upsertUsers(@NestJsGraphql.Args() args: UpsertUsersArgs) {
    return this.usersService.upsert(args)
  }

  @NestJsGraphql.Mutation(() => Users, { nullable: true })
  deleteUsers(@NestJsGraphql.Args() args: DeleteUsersArgs) {
    return this.usersService.delete(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  deleteManyUsers(@NestJsGraphql.Args() args: DeleteManyUsersArgs) {
    return this.usersService.deleteMany(args)
  }
}
