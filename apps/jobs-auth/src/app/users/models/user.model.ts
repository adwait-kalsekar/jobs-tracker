import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractModel } from '@jobs-tracker/nest-js';

@ObjectType()
export class User extends AbstractModel {
  @Field()
  email: string;
}
