import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Param,
  Req,
  Res,
} from '@nestjs/common';
import { AppServiceUser } from '../../services/user/app.user.service';
import { Request, Response } from 'express';

@Controller('user')
export class AppControllerUser {
  constructor(private readonly appService: AppServiceUser) {}

  @Post('')
  async postUserController(@Req() req: Request, @Res() res: Response) {
    const { body } = req;
    const newUser = await this.appService.postUserService(body);
    return res.status(201).json(newUser);
  }

  @Get(':id')
  async getUserController(@Param('id') id: string, @Res() res: Response) {
    const user = await this.appService.getUserService(id);
    return res.status(200).json(user);
  }

  @Delete(':id')
  async deleteUserController(@Param('id') id: string, @Res() res: Response) {
    await this.appService.deleteUserService(id);
    return res.status(204).send();
  }

  @Patch(':id')
  async patchUserController(
    @Param('id') id: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const { body } = req;
    const updatedUser = await this.appService.patchUserService(id, body);
    return res.status(200).json(updatedUser);
  }
}
