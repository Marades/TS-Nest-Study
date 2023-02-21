import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiscordModule } from './modules/discord/discord.module';
import { ConfigModule } from './config/config/config.module';

@Module({
  imports: [DiscordModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
