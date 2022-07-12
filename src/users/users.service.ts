import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { Prisma } from '@prisma/client'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.UsersCreateInput) {
    return this.prisma.users.create({ data })
  }

  findAll(where?: Prisma.UsersWhereInput) {
    return this.prisma.users.findMany({ where })
  }

  findOne(where: Prisma.UsersWhereUniqueInput) {
    return this.prisma.users.findUnique({ where })
  }

  update(where: Prisma.UsersWhereUniqueInput, data: Prisma.XOR<Prisma.UsersUpdateInput, Prisma.UsersUncheckedUpdateInput>) {
    return this.prisma.users.update({ data, where })
  }

  remove(where: Prisma.UsersWhereUniqueInput) {
    return this.prisma.users.delete({ where })
  }
}
