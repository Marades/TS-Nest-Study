import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ChatInputCommandInteraction,
  Client,
  Collection,
  GatewayIntentBits,
  Message,
  REST,
  Routes,
} from 'discord.js';
import DiscordInteraction from 'src/domains/discord/discord-interaction';
import DiscordMessage from 'src/domains/discord/discord-message';
import InteractionReplyFactory from 'src/domains/discord/interaction-reply-factory';
import MessageReplyFactory from 'src/domains/discord/message-reply-factory';

interface DiscordClient extends Client {
  commands?: Collection<any, any>;
}

@Injectable()
export class DiscordService implements OnModuleInit {
  token: string;
  clientId: string;
  client: DiscordClient;
  constructor(private configService: ConfigService) {
    this.clientId = this.configService.get('discord.clientId');
    this.token = this.configService.get('discord.token');
    this.client = new Client({
      intents: [
        // Intent를 설정합니다. 설정하지 않으면 CLIENT_MISSING_INTENTS 오류가 발생합니다.
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.DirectMessages,
      ],
    });
  }

  async onModuleInit() {
    /** 연결 이벤트 등록 */
    this.client.on('ready', () =>
      console.log(`${this.client.user.tag} 에 로그인됨`),
    );

    const commands = [
      {
        name: 'ping',
        description: 'Replies with Pong!',
      },
    ];
    const rest = new REST().setToken(this.token);
    await rest.put(Routes.applicationCommands(this.clientId), {
      body: commands,
    });

    /** 봇 태그해서 보낸 메세지 이벤트 처리 */
    this.client.on('messageCreate', (aMessage: Message) => {
      const message = new DiscordMessage(aMessage);
      if (!message.forThisBot()) return;

      const factory = new MessageReplyFactory(this.client);
      const reply = factory.createReply(message);
      reply.send();
    });

    /** 명령어 이벤트 처리 */
    this.client.on(
      'interactionCreate',
      async (aInteraction: ChatInputCommandInteraction) => {
        const interaction = new DiscordInteraction(aInteraction);
        if (!interaction.validate()) return;

        const factory = new InteractionReplyFactory(this.client);
        const reply = factory.createReply(interaction);
        reply.send();
      },
    );

    this.client.login(this.token);
  }
}
