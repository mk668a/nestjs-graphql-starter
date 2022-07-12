import { Injectable, NotFoundException } from '@nestjs/common'
import { Status, Users } from './users.models'

@Injectable()
export class UsersService {
  private users: Users[] = [
    { id: '1', gender: '', firstName: 'aaa', lastName: 'bbb', status: Status.ACTIVE, createdAt: new Date(), updatedAt: new Date() },
    { id: '2', gender: '', firstName: 'aaa2', lastName: 'bbb2', status: Status.ACTIVE, createdAt: new Date(), updatedAt: new Date() }
  ]

  findAll(): Users[] {
    return this.users
  }

  findOneById(id: string): Users {
    const result = this.users.find((todo) => id === todo.id)
    if (!result) throw new NotFoundException()
    return result
  }
}
