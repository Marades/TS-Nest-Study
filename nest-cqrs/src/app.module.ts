import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HerosGameModule } from './heros-game/heros-game.module';

@Module({
  imports: [HerosGameModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
