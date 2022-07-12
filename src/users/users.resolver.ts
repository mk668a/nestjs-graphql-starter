import { Args, ID, Query, Resolver } from '@nestjs/graphql'
import { Users } from './users.models'
import { UsersService } from './users.service'

@Resolver()
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => [Users], { nullable: 'items' })
  findAll() {
    return this.usersService.findAll()
  }

  @Query(() => Users)
  findOneById(@Args('id', { type: () => ID }) id: string) {
    return this.usersService.findOneById(id)
  }
}
