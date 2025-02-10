import { Field, ObjectType } from '@nestjs/graphql';

import { AbstractModel } from '@jobs-tracker/nest-js';

@ObjectType()
export class Job extends AbstractModel {
  @Field()
  name: string;

  @Field()
  description: string;
}
