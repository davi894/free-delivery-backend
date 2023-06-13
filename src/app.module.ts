import { Module } from '@nestjs/common';
import { AppControllerUser } from './controllers/user/app.user.controller';
import { AppServiceUser } from './services/user/app.user.service';
import { PrismaService } from 'prisma/services/app.prisma.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [AppControllerUser],
  providers: [AppServiceUser, PrismaService],
})
export class AppModule {}
