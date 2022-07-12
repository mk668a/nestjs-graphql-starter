import { Injectable } from '@nestjs/common'
import dayjs from 'dayjs'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.users.findMany()
  }

  async findOneById(id: string) {
    return await this.prisma.users.findUnique({ where: { id: Number(id) } })
  }

  async create(firstName: string, lastName: string) {
    return this.prisma.users.create({ data: { first_name: firstName, last_name: lastName, created_at: dayjs().toString(), updated_at: dayjs().toString() } })
  }
}
