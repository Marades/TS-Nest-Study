import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class ClientController {
  @Get()
  @Render('index')
  index() {
    console.log('index');
  }
}
