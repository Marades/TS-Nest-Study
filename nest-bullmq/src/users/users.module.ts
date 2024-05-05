import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersWorker } from './users.worker';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'user_queue',
      redis: {
        host: 'localhost',
        port: 6380,
      },
    }),
  ],
  providers: [UsersService, UsersWorker],
  controllers: [UsersController],
})
export class UsersModule {}
