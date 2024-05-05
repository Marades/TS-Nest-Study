import { InjectQueue } from '@nestjs/bull';
import { Injectable, Module } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class UsersService {
  constructor(@InjectQueue('user_queue') private readonly userQueue: Queue) {}

  public async set() {
    console.log('service');
    await this.userQueue.add('hi');
  }
}
