import { Message } from 'discord.js';

export default class DiscordMessage {
  message: Message;
  prefix = '<@1076880268910145606>';

  constructor(message: Message) {
    this.message = message;
  }

  forThisBot(): boolean {
    if (this.message.author.bot) {
      return false;
    }

    if (!this.message.content.startsWith(this.prefix)) {
      return false;
    }

    if (this.message.content.slice(0, this.prefix.length) !== this.prefix) {
      return false;
    }

    return true;
  }

  get args(): string[] {
    return this.message.content.slice(this.prefix.length).trim().split(/ +/g);
  }

  get command(): string {
    return this.args.shift().toLowerCase();
  }

  get reply() {
    return this.message.reply.bind(this.message);
  }
}
