import { Module } from '@nestjs/common';
import { LoginController } from 'src/controllers/login/login.controller';
import { LoginService } from 'src/services/login/login.service';
import { PrismaService } from 'src/services/prisma/app.prisma.service';

@Module({
  controllers: [LoginController],
  providers: [LoginService, PrismaService],
})
export class LoginModule {}
