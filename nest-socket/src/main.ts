import { NestFactory } from '@nestjs/core';
import { SocketIoAdapter } from './adapters/socket-io.adapter';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useWebSocketAdapter(new SocketIoAdapter(app));

  await app.listen(3000);
}
bootstrap();
