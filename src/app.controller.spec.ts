import { Test, TestingModule } from '@nestjs/testing';
import { AppControllerUser } from './controllers/user/app.user.controller';
import { AppServiceUser } from './services/user/app.user.service';
import { beforeEach, describe, it } from 'node:test';

describe('AppController', () => {
  let appController: AppControllerUser;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppControllerUser],
      providers: [AppServiceUser],
    }).compile();

    appController = app.get<AppControllerUser>(AppControllerUser);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
