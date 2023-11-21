import { Controller, Get, Post } from "@nestjs/common";
import { AppService } from './app.service';

@Controller("amoLogin")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/login')
  async loginAmo() {
    return this.appService.auth()
  }
}
