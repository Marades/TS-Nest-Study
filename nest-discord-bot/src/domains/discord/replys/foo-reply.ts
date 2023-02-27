import DiscordMessage from 'src/domains/discord/discord-message';
import Reply from './reply';

export default class FooReply extends Reply {
  key = 'foo';
  constructor(message: DiscordMessage) {
    super(message);
  }

  send() {
    this.message.reply(`foo`);
  }
}
