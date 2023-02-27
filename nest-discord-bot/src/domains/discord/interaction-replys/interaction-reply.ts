import { ChatInputCommandInteraction, Client } from 'discord.js';

export default class InteractionReply {
  name: string;
  description: string;

  send(): void {}
}
