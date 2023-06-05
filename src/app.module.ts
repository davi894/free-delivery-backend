import { Module } from '@nestjs/common';
import { AppControllerUser } from './controllers/user/app.controller';
import { AppServiceUser } from './services/user/app.service';
@Module({
  imports: [],
  controllers: [AppControllerUser],
  providers: [AppServiceUser],
})
export class AppModule {}
