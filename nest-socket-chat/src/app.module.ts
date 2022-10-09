import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [ChatModule, ClientModule],
})
export class AppModule {}
