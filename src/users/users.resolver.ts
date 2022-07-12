import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Users } from './users.models'
import { UsersService } from './users.service'

@Resolver((of) => Users)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => [Users], { nullable: true })
  users() {
    return this.usersService.findAll()
  }

  @Query(() => Users, { nullable: true })
  user(@Args('id', { type: () => ID }) id: string) {
    return this.usersService.findOneById(id)
  }

  @Mutation(() => Users, { nullable: true })
  async createUser(@Args('firstName') firstName: string, @Args('lastName') lastName: string) {
    return this.usersService.create(firstName, lastName)
  }
}
