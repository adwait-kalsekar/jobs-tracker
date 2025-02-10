import { Module } from '@nestjs/common';

import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { PrismaModule } from '../prisma-db/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
