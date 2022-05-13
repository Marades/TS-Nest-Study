import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { KillDragonCommand } from './commands/impl/kill-dragon.command';

@Injectable()
export class HerosGameService {
  constructor(private readonly commandBus: CommandBus) {}

  async killDragon(heroId, enemyId) {
    console.log('service', heroId, enemyId);
    await this.commandBus.execute(new KillDragonCommand(heroId, enemyId));
  }
}
