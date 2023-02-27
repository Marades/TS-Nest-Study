import { ChatInputCommandInteraction, Client } from 'discord.js';
import DiscordInteraction from '../discord-interaction';
import InteractionReply from './interaction-reply';

export default class PingReply extends InteractionReply {
  name = 'ping';
  description: 'discord Ping';
  client: Client;
  interaction: DiscordInteraction;
  constructor(client: Client, interaction: DiscordInteraction) {
    super();
    this.client = client;
    this.interaction = interaction;
  }

  send() {
    this.interaction.reply(`${this.client.ws.ping}ms Pong!`);
  }
}
