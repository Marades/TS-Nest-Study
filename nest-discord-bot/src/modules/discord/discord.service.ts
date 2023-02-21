import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client, Collection, GatewayIntentBits } from 'discord.js';
import DiscordMessage from 'src/modules/discord/domains/discord-message';
import ReplyFactory from 'src/modules/discord/domains/reply-factory';

interface DiscordClient extends Client {
  commands?: Collection<any, any>;
}

@Injectable()
export class DiscordService implements OnModuleInit {
  client: DiscordClient;
  constructor(private configService: ConfigService) {
    this.client = new Client({
      intents: [
        // Intent를 설정합니다. 설정하지 않으면 CLIENT_MISSING_INTENTS 오류가 발생합니다.
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
      ],
    });
  }

  onModuleInit() {
    this.client.commands = new Collection();
    this.client.on('ready', () =>
      console.log(`${this.client.user.tag} 에 로그인됨`),
    );

    this.client.on('messageCreate', (msg) => {
      const message = new DiscordMessage(msg);
      if (!message.forThisBot()) return;

      const factory = new ReplyFactory();
      const reply = factory.getReply(message);

      reply.send();
    });

    this.client.login(this.configService.get('discord.token'));
  }
}
