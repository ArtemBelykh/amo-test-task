import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async auth() {
    this.httpService
      .post('https://artembelykh.amocrm.ru/oauth2/access_token')
      .subscribe((res) => res.data.json());
  }

}
