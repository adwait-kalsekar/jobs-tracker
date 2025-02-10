import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma-clients/jobs-auth';

import { PrismaService } from '../prisma-db/prisma.service';
import { hash } from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prismaService.user.create({
      data: { ...data, password: await hash(data.password, 10) },
    });
  }

  async getUsers() {
    return this.prismaService.user.findMany();
  }

  async getUser(args: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prismaService.user.findUniqueOrThrow({
      where: args,
    });
  }
}
