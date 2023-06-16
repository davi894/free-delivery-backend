import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppControllerUser } from './controllers/user/app.user.controller';
import { AppServiceUser } from './services/user/app.user.service';
import { PrismaService } from 'src/services/prisma/app.prisma.service';
import { LoginModule } from './modules/login/login.module';
import { CustomError } from './errors/error';
import { CustomMiddleware } from './middlewares/middleware.verify.token';

@Module({
  imports: [LoginModule],
  controllers: [AppControllerUser],
  providers: [AppServiceUser, PrismaService, CustomError, CustomMiddleware],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CustomMiddleware)
      .exclude({ path: 'user', method: RequestMethod.POST })
      .forRoutes(AppControllerUser);
  }
}
