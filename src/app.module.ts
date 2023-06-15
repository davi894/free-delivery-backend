import { Module } from '@nestjs/common';
import { AppControllerUser } from './controllers/user/app.user.controller';
import { AppServiceUser } from './services/user/app.user.service';
import { PrismaService } from 'src/services/prisma/app.prisma.service';
import { LoginModule } from './modules/login/login.module';
@Module({
  imports: [LoginModule],
  controllers: [AppControllerUser],
  providers: [AppServiceUser, PrismaService],
})
export class AppModule {}
