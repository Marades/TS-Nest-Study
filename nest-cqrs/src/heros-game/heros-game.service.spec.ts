import { Test, TestingModule } from '@nestjs/testing';
import { HerosGameService } from './heros-game.service';

describe('HerosGameService', () => {
  let service: HerosGameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HerosGameService],
    }).compile();

    service = module.get<HerosGameService>(HerosGameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
