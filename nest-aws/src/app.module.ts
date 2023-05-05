import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SqsModule } from './sqs/sqs.module';

@Module({
  imports: [SqsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
