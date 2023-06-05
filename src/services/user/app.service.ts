import { Injectable } from '@nestjs/common';

@Injectable()
export class AppServiceUser {
  postUserService(): string {
    return 'Hello World!';
  }
  getUserService(): string {
    return 'Hello World!';
  }
  patchUserService(): string {
    return 'Hello World!';
  }
  deleteUserService(): string {
    return 'Hello World!';
  }
}
