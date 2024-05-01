import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}

  async getHello(): Promise<string> {
    const user = await this.prismaService.user.findFirst();
    console.log(user);
    return `Hello World! - ${user.name}`;
  }
}
