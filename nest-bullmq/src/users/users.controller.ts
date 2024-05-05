import { InjectQueue } from '@nestjs/bull';
import { Controller, Get, Injectable, Module } from '@nestjs/common';
import { Queue } from 'bull';
import { UsersService } from './users.service';

@Injectable()
@Controller('/user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/')
  public async test() {
    console.log('controller');
    await this.usersService.set();
  }
}
