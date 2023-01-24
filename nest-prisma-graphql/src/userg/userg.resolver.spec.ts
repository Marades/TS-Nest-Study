import { Test, TestingModule } from '@nestjs/testing';
import { UsergResolver } from './userg.resolver';
import { UsergService } from './userg.service';

describe('UsergResolver', () => {
  let resolver: UsergResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsergResolver, UsergService],
    }).compile();

    resolver = module.get<UsergResolver>(UsergResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
