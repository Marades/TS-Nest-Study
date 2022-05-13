import { Test, TestingModule } from '@nestjs/testing';
import { HerosGameController } from './heros-game.controller';
import { HerosGameService } from './heros-game.service';

describe('HerosGameController', () => {
  let controller: HerosGameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HerosGameController],
      providers: [HerosGameService],
    }).compile();

    controller = module.get<HerosGameController>(HerosGameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
