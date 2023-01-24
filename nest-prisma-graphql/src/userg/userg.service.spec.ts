import { Test, TestingModule } from '@nestjs/testing';
import { UsergService } from './userg.service';

describe('UsergService', () => {
  let service: UsergService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsergService],
    }).compile();

    service = module.get<UsergService>(UsergService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
