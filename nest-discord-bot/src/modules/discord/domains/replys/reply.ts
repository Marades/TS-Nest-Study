import DiscordMessage from '../discord-message';

export default class Reply {
  key: string;
  message: DiscordMessage;
  constructor(message: DiscordMessage) {
    this.message = message;
  }

  send(): void {}
}
