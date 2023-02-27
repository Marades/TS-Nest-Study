import { Client } from 'discord.js';
import DiscordInteraction from './discord-interaction';
import { InteractionReply, PingReply } from './interaction-replys';

export default class InteractionReplyFactory {
  client: Client;
  constructor(client: Client) {
    this.client = client;
  }

  createReply(interaction: DiscordInteraction): InteractionReply {
    switch (interaction.commandName) {
      case 'ping':
        return new PingReply(this.client, interaction);
      default:
        return new InteractionReply();
    }
  }
}
