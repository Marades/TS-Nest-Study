import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiscordModule } from './modules/discord/discord.module';

@Module({
  imports: [DiscordModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
