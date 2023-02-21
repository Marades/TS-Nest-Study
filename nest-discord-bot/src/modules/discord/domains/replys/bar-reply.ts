import DiscordMessage from 'src/modules/discord/domains/discord-message';
import Reply from './reply';

export default class BarReply extends Reply {
  key = 'bar';
  constructor(message: DiscordMessage) {
    super(message);
  }

  send() {
    this.message.reply(`bar`);
  }
}
