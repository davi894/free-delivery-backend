import { Module } from '@nestjs/common';
import { AppControllerUser } from './controllers/user/app.user.controller';
import { AppServiceUser } from './services/user/app.user.service';
import { PrismaService } from 'prisma/services/app.prisma.service';
@Module({
  imports: [],
  controllers: [AppControllerUser],
  providers: [AppServiceUser, PrismaService],
})
export class AppModule {}
