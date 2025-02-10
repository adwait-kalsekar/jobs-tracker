import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { User } from './models/user.model';
import { UsersService } from './users.service';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import CreateUserInput from './dto/create-user.input';
import JwtAuthGuard from '../auth/guards/jwt-auth.guard';
import TokenPayload from '../auth/interfaces/token-payload.interface';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.createUser(createUserInput);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [User], { name: 'users' })
  async getUsers(@CurrentUser() user: TokenPayload) {
    console.log(`User ID: ${user.userId}`);
    return this.usersService.getUsers();
  }
}
