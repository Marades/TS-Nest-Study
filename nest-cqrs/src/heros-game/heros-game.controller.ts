import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { HerosGameService } from './heros-game.service';
import { KillDragonDto } from './interfaces/kill-dragon-dto.interface';

@Controller('heros-game')
export class HerosGameController {
  constructor(private readonly herosGameService: HerosGameService) {}

  @Get(':id/kill')
  async killDragon(@Param('id') id: string, @Body() dto: KillDragonDto) {
    try {
      console.log('controller');
      dto = { dragonId: '1' };
      const result = await this.herosGameService.killDragon(id, dto.dragonId);
      console.log('result', result);
    } catch (e) {
      console.log('err');
      console.log(e);
    }
  }
}
