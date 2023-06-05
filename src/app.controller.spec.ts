import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './controllers/user/app.user.controller';
import { AppService } from './services/user/app.user.service';
import { beforeEach, describe, it } from 'node:test';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
