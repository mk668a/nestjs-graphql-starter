import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { UsersService } from './users.service'
import { Users } from 'src/models/users.models'
import { NotFoundException } from '@nestjs/common'

@Resolver(() => Users)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => Users, { name: 'user', nullable: true })
  async user(@Args('id', { type: () => Int }) id: number) {
    const where = { id }
    const user = await this.usersService.findOne(where)
    if (!user) {
      throw new NotFoundException(id)
    }
    return user
  }

  @Query(() => [Users], { name: 'users', nullable: true })
  users(
    @Args('id', { type: () => Int }) id: number,
    @Args('first_name', { nullable: true }) first_name?: string,
    @Args('last_name', { nullable: true }) last_name?: string,
    @Args('gender', { nullable: true }) gender?: string
  ) {
    const where = { id, first_name, last_name, gender }
    return this.usersService.findAll(where)
  }

  @Mutation(() => Users, { nullable: true })
  createUser(
    @Args('first_name', { nullable: true }) first_name?: string,
    @Args('last_name', { nullable: true }) last_name?: string,
    @Args('gender', { nullable: true }) gender?: string
  ) {
    const data = { first_name, last_name, gender, updated_at: String(new Date()), created_at: String(new Date()) }
    return this.usersService.create(data)
  }

  @Mutation(() => Users, { nullable: true })
  updateUser(
    @Args('id', { type: () => Int }) id: number,
    @Args('first_name', { nullable: true }) first_name?: string,
    @Args('last_name', { nullable: true }) last_name?: string,
    @Args('gender', { nullable: true }) gender?: string
  ) {
    const where = { id }
    const data = { first_name, last_name, gender, updated_at: String(new Date()) }
    return this.usersService.update(where, data)
  }

  @Mutation(() => Users, { nullable: true })
  removeUser(@Args('id', { type: () => Int }) id: number) {
    const where = { id }
    return this.usersService.remove(where)
  }
}
