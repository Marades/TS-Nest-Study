import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LangchainModule } from './modules/langchain/langchain.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    LangchainModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
