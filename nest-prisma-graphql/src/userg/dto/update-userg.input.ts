import { CreateUsergInput } from './create-userg.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUsergInput extends PartialType(CreateUsergInput) {
  @Field(() => Int)
  id: number;
}
