import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppControllerUser } from './controllers/user/app.user.controller';
import { PrismaService } from 'src/providers/services/prisma/app.prisma.service';
import { LoginModule } from './modules/login/login.module';
import { CustomError } from './providers/errors/error';
import { CustomMiddleware } from './providers/middlewares/middleware.verify.token';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [UserModule, LoginModule],
  providers: [CustomError, CustomMiddleware],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CustomMiddleware)
      .exclude({ path: 'user', method: RequestMethod.POST })
      .forRoutes(AppControllerUser);
  }
}
