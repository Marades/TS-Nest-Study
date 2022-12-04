import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProductDto } from './product.dto';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: Repository<Product>,
  ) {}
  async createProduct(data: ProductDto) {
    return await this.productRepository.create(data).save();
  }
  async getProducts() {
    return await this.productRepository.find();
  }
}
