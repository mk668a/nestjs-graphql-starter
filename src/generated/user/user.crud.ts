/* eslint-disable */
import { Inject, Injectable, Module } from '@nestjs/common'
import * as NestJsGraphql from '@nestjs/graphql'
import { AffectedRowsOutput, BaseCrudService, PRISMA_CLIENT } from 'nestjs-prisma-graphql-crud-gen-runtime'
import { User } from '../models/user.model'
import { AggregateUser } from './outputs/AggregateUser.output'
import { UserGroupBy } from './outputs/UserGroupBy.output'
import {
  AggregateUserArgs,
  CreateManyUserArgs,
  CreateOneUserArgs,
  DeleteManyUserArgs,
  DeleteOneUserArgs,
  FindFirstUserArgs,
  FindManyUserArgs,
  FindUniqueUserArgs,
  GroupByUserArgs,
  UpdateManyUserArgs,
  UpdateOneUserArgs,
  UpsertOneUserArgs
} from './user.args'

@Injectable()
export class UserService extends BaseCrudService {
  constructor(@Inject(PRISMA_CLIENT) prisma: any) {
    super(prisma, 'users', { softDelete: false })
  }
}

@NestJsGraphql.Resolver(() => User)
export class UserResolver {
  constructor(private readonly service: UserService) { }

  @NestJsGraphql.Query(() => User, { nullable: false })
  findFirstUser(@NestJsGraphql.Args() args: FindFirstUserArgs) {
    return this.service.findFirst(args)
  }

  @NestJsGraphql.Query(() => User, { nullable: false })
  findUniqueUser(@NestJsGraphql.Args() args: FindUniqueUserArgs) {
    return this.service.findUnique(args)
  }

  @NestJsGraphql.Query(() => [User], { nullable: false })
  findManyUser(@NestJsGraphql.Args() args: FindManyUserArgs) {
    return this.service.findMany(args)
  }

  @NestJsGraphql.Query(() => [UserGroupBy], { nullable: false })
  groupByUser(@NestJsGraphql.Args() args: GroupByUserArgs) {
    return this.service.groupBy(args)
  }

  @NestJsGraphql.Query(() => AggregateUser, { nullable: false })
  aggregateUser(@NestJsGraphql.Args() args: AggregateUserArgs) {
    return this.service.aggregate(args)
  }

  @NestJsGraphql.Mutation(() => User, { nullable: true })
  createUser(@NestJsGraphql.Args() args: CreateOneUserArgs) {
    return this.service.create(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  createManyUser(@NestJsGraphql.Args() args: CreateManyUserArgs) {
    return this.service.createMany(args)
  }

  @NestJsGraphql.Mutation(() => User, { nullable: true })
  updateUser(@NestJsGraphql.Args() args: UpdateOneUserArgs) {
    return this.service.update(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  updateManyUser(@NestJsGraphql.Args() args: UpdateManyUserArgs) {
    return this.service.updateMany(args)
  }

  @NestJsGraphql.Mutation(() => User, { nullable: true })
  upsertUser(@NestJsGraphql.Args() args: UpsertOneUserArgs) {
    return this.service.upsert(args)
  }

  @NestJsGraphql.Mutation(() => User, { nullable: true })
  deleteUser(@NestJsGraphql.Args() args: DeleteOneUserArgs) {
    return this.service.delete(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  deleteManyUser(@NestJsGraphql.Args() args: DeleteManyUserArgs) {
    return this.service.deleteMany(args)
  }
}

@Module({ providers: [UserService, UserResolver], exports: [UserService] })
export class UserModule { }
