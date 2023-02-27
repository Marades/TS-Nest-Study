import { BarReply, FooReply, Reply } from './message-replys';
import DiscordMessage from './discord-message';
import { Client } from 'discord.js';

export default class MessageReplyFactory {
  client: Client;
  constructor(client: Client) {
    this.client = client;
  }

  createReply(message: DiscordMessage): Reply {
    switch (message.command) {
      case 'foo':
        return new FooReply(this.client, message);
      case 'bar':
        return new BarReply(this.client, message);
      default:
        return new Reply();
    }
  }
}
