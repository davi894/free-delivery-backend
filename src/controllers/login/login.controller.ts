import { Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { LoginService } from 'src/services/login/login.service';
@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
  @Post('')
  async login(@Req() req: Request, @Res() res: Response) {
    const { body } = req;

    const token = await this.loginService.loginService(body);

    return res.status(200).json({ token: token });
  }
}
