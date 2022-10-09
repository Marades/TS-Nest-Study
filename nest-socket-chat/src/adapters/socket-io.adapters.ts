import { IoAdapter } from '@nestjs/platform-socket.io';
import { ServerOptions } from 'socket.io';

export class SocketIoAdapter extends IoAdapter {
  createIOServer(port: number, options?: ServerOptions): any {
    options.cors = {
      origin: '*',
    };

    const server = super.createIOServer(port, options);

    return server;
  }
}
