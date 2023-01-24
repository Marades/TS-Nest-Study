import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { UsergModule } from './userg/userg.module';
import { UsergModule } from './userg/userg.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/chema.gql'), // Code First
    }),
    UserModule,
    PostModule,
    UsergModule,
    // ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
