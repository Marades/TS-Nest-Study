import { Module } from '@nestjs/common';
import { EventModule } from './events/events.module';

@Module({
  imports: [EventModule],
})
export class AppModule {}
