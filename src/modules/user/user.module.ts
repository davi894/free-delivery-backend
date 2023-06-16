import { Module } from '@nestjs/common';
import { AppControllerUser } from 'src/controllers/user/app.user.controller';
import { PrismaService } from 'src/providers/services/prisma/app.prisma.service';
import { AppServiceUser } from 'src/providers/services/user/app.user.service';

@Module({
  controllers: [AppControllerUser],
  providers: [AppServiceUser, PrismaService],
})
export class UserModule {}
