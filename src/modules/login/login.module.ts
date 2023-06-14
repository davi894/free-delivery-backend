import { Module } from '@nestjs/common';
import { LoginController } from 'src/controllers/login/login.controller';
import { LoginService } from 'src/services/login/login.service';

@Module({
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
