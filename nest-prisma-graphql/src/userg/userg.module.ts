import { Module } from '@nestjs/common';
import { UsergService } from './userg.service';
import { UsergResolver } from './userg.resolver';

@Module({
  providers: [UsergResolver, UsergService]
})
export class UsergModule {}
