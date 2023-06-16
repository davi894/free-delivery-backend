import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';

import { AppControllerUser } from './controllers/user/app.user.controller';

import { CustomError } from './providers/errors/error';
import { TokenVerifyMiddleware } from './providers/middlewares/middleware.verify.token';

import { UserModule } from './modules/user/user.module';
import { LoginModule } from './modules/login/login.module';

@Module({
  imports: [UserModule, LoginModule],
  providers: [CustomError, TokenVerifyMiddleware],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TokenVerifyMiddleware)
      .exclude({ path: 'user', method: RequestMethod.POST })
      .forRoutes(AppControllerUser);
  }
}
