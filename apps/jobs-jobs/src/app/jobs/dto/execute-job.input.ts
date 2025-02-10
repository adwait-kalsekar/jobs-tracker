import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export default class ExecuteJobInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  name: string;
}
