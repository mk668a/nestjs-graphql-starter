/* eslint-disable */
import { Inject, Injectable, Module } from '@nestjs/common'
import * as NestJsGraphql from '@nestjs/graphql'
import { AffectedRowsOutput, BaseCrudService, PRISMA_CLIENT } from 'nestjs-prisma-graphql-crud-gen-runtime'
import { Post } from '../models/post.model'
import { AggregatePost } from './outputs/AggregatePost.output'
import { PostGroupBy } from './outputs/PostGroupBy.output'
import {
  AggregatePostArgs,
  CreateManyPostArgs,
  CreateOnePostArgs,
  DeleteManyPostArgs,
  DeleteOnePostArgs,
  FindFirstPostArgs,
  FindManyPostArgs,
  FindUniquePostArgs,
  GroupByPostArgs,
  UpdateManyPostArgs,
  UpdateOnePostArgs,
  UpsertOnePostArgs
} from './post.args'

@Injectable()
export class PostService extends BaseCrudService {
  constructor(@Inject(PRISMA_CLIENT) prisma: any) {
    super(prisma, 'post', { softDelete: false })
  }
}

@NestJsGraphql.Resolver(() => Post)
export class PostResolver {
  constructor(private readonly service: PostService) { }

  @NestJsGraphql.Query(() => Post, { nullable: false })
  findFirstPost(@NestJsGraphql.Args() args: FindFirstPostArgs) {
    return this.service.findFirst(args)
  }

  @NestJsGraphql.Query(() => Post, { nullable: false })
  findUniquePost(@NestJsGraphql.Args() args: FindUniquePostArgs) {
    return this.service.findUnique(args)
  }

  @NestJsGraphql.Query(() => [Post], { nullable: false })
  findManyPost(@NestJsGraphql.Args() args: FindManyPostArgs) {
    return this.service.findMany(args)
  }

  @NestJsGraphql.Query(() => [PostGroupBy], { nullable: false })
  groupByPost(@NestJsGraphql.Args() args: GroupByPostArgs) {
    return this.service.groupBy(args)
  }

  @NestJsGraphql.Query(() => AggregatePost, { nullable: false })
  aggregatePost(@NestJsGraphql.Args() args: AggregatePostArgs) {
    return this.service.aggregate(args)
  }

  @NestJsGraphql.Mutation(() => Post, { nullable: true })
  createPost(@NestJsGraphql.Args() args: CreateOnePostArgs) {
    return this.service.create(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  createManyPost(@NestJsGraphql.Args() args: CreateManyPostArgs) {
    return this.service.createMany(args)
  }

  @NestJsGraphql.Mutation(() => Post, { nullable: true })
  updatePost(@NestJsGraphql.Args() args: UpdateOnePostArgs) {
    return this.service.update(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  updateManyPost(@NestJsGraphql.Args() args: UpdateManyPostArgs) {
    return this.service.updateMany(args)
  }

  @NestJsGraphql.Mutation(() => Post, { nullable: true })
  upsertPost(@NestJsGraphql.Args() args: UpsertOnePostArgs) {
    return this.service.upsert(args)
  }

  @NestJsGraphql.Mutation(() => Post, { nullable: true })
  deletePost(@NestJsGraphql.Args() args: DeleteOnePostArgs) {
    return this.service.delete(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  deleteManyPost(@NestJsGraphql.Args() args: DeleteManyPostArgs) {
    return this.service.deleteMany(args)
  }
}

@Module({ providers: [PostService, PostResolver], exports: [PostService] })
export class PostModule { }
