import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUsergInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
