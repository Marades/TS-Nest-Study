import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductDto } from './product.dto';
import { InputProduct } from './product.input';
import { ProductService } from './product.service';

@Resolver()
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}
  @Query(() => [ProductDto])
  async getProducts() {
    return await this.productService.getProducts();
  }
  @Mutation(() => ProductDto)
  async createProduct(@Args('data') data: InputProduct) {
    return await this.productService.createProduct(data);
  }
}
