import { Client } from 'discord.js';
import DiscordMessage from 'src/domains/discord/discord-message';
import Reply from './message-reply';

export default class FooReply extends Reply {
  key = 'foo';
  client: Client;
  message: DiscordMessage;
  constructor(client: Client, message: DiscordMessage) {
    super();
    this.client = client;
    this.message = message;
  }

  send() {
    this.message.reply(`foo`);
  }
}
