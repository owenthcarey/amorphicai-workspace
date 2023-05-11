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

  @Get('users-firestore')
  @Render('users.hbs')
  async getUsersFromFirestore() {
    return { users: await this.appService.getUsersFromFirestore() };
  }
}
