import { Module } from '@nestjs/common';
import { sqlLiteProvider } from './sqlite.provider';

@Module({
  providers: [sqlLiteProvider],
  exports: [sqlLiteProvider],
})
export class DrizzleModule {}
