import { ChatInputCommandInteraction, Message } from 'discord.js';

export default class DiscordInteraction {
  interaction: ChatInputCommandInteraction;

  constructor(interaction: ChatInputCommandInteraction) {
    this.interaction = interaction;
  }

  validate(): boolean {
    if (!this.interaction.isChatInputCommand()) {
      return false;
    }

    return true;
  }

  get commandName() {
    return this.interaction.commandName;
  }

  get reply() {
    return this.interaction.reply.bind(this.interaction);
  }
}
