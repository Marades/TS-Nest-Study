import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { DatabaseModule } from 'src/databases/database.module';
import { ProductProviders } from './product.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...ProductProviders, ProductResolver, ProductService],
})
export class ProductModule {}
