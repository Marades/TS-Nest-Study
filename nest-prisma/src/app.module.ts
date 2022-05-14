import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserService } from './user/user.service';
import { PostService } from './post/post.service';

@Module({
  imports: [PrismaModule],
  controllers: [AppController],
  providers: [AppService, UserService, PostService],
})
export class AppModule {}
