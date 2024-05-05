import { InjectQueue, Process, Processor } from '@nestjs/bull';
import { Injectable, Module } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
@Processor('user_queue')
export class UsersWorker {
  constructor() {}

  @Process()
  public async handle(job: any) {
    console.log('job : ', job);
  }
}
