import { Controller, Get, Render } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('users')
  @Render('users.hbs')
  getUsers() {
    return { users: this.appService.getUsers() };
  }
}
