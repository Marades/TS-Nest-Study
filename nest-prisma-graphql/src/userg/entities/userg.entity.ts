import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Userg {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
