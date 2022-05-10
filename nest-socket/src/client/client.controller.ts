import { Controller, Get, Render } from '@nestjs/common';

@Controller('client')
export class ClientController {
  @Get()
  @Render('index')
  index() {
    return;
  }
}
