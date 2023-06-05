import { Controller, Delete, Get, Patch, Post, Req, Res } from '@nestjs/common';
import { AppServiceUser } from '../../services/user/app.service';
import { Request, Response } from 'express';

@Controller('user')
export class AppControllerUser {
  constructor(private readonly appService: AppServiceUser) {}

  @Post('')
  postUserController(@Req() req: Request, @Res() res: Response) {
    return '';
  }

  @Get(':id')
  getUserController(@Req() req: Request, @Res() res: Response) {
    return '';
  }

  @Delete(':id')
  deleteUserController(@Req() req: Request, @Res() res: Response) {
    return '';
  }

  @Patch(':id')
  patchUserController(@Req() req: Request, @Res() res: Response) {
    return '';
  }
}
