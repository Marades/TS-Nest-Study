import { BarReply, FooReply, Reply } from './replys';
import DiscordMessage from './discord-message';

export default class ReplyFactory {
  getReply(message: DiscordMessage): Reply {
    switch (message.command) {
      case 'foo':
        return new FooReply(message);
      case 'bar':
        return new BarReply(message);
      default:
        return new Reply(message);
    }
  }
}
