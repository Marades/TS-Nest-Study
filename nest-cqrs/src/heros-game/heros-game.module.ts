import { Module } from '@nestjs/common';
import { HerosGameService } from './heros-game.service';
import { HerosGameController } from './heros-game.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { HeroRepository } from './repository/hero.repository';
import { EventHandler } from './events/handlers';
import { CommandHandler } from './commands/handlers';

@Module({
  imports: [CqrsModule],
  controllers: [HerosGameController],
  providers: [
    HerosGameService,
    HeroRepository,
    ...CommandHandler,
    ...EventHandler,
  ],
})
export class HerosGameModule {}
