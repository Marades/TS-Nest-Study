import { ObjectType, Field, Int } from '@nestjs/graphql';
@ObjectType()
export class ProductDto {
  @Field()
  readonly id?: number;
  @Field()
  readonly title!: string;
  @Field(() => Int)
  readonly price!: number;
}
