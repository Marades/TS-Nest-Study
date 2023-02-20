import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, Collection, GatewayIntentBits } from 'discord.js';

interface DiscordClient extends Client {
  commands?: Collection<any, any>;
}

@Injectable({})
export class DiscordService implements OnModuleInit {
  prefix = '!';
  client: DiscordClient;
  constructor() {
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
      if (msg.author.bot) return;
      if (!msg.content.startsWith(this.prefix)) return;
      if (msg.content.slice(0, this.prefix.length) !== this.prefix) return;

      const args = msg.content.slice(this.prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();

      this.client.commands = new Collection();
      let cmd = this.client.commands.get(command);

      if (cmd) cmd.run(this.client, msg, args);
    });

    this.client.login(
      'MTA3Njg4MDI2ODkxMDE0NTYwNg.GzjcFR.NrBUcyKl9bBvXzegvTeu7W-GpoHg2KMCSJEQK0',
    );
  }
}
