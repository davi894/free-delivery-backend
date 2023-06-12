import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Param,
  Req,
  Res,
  Query,
} from '@nestjs/common';
import { AppServiceUser } from '../../services/user/app.user.service';
import { Request, Response } from 'express';

@Controller('user')
export class AppControllerUser {
  constructor(private readonly appServiceUser: AppServiceUser) {}

  @Post('')
  async postUserController(@Req() req: Request, @Res() res: Response) {
    const { body } = req;
    const newUser = await this.appServiceUser.postUserService(body);
    return res.status(201).json(newUser);
  }

  @Get(':id')
  async getUserController(
    @Query('user_info') user_info: string,
    @Param('id') id: string,
    @Res() res: Response,
  ) {
    console.log(user_info);
    const user = await this.appServiceUser.getUserService(id);
    return res.status(200).json(user);
  }

  @Delete(':id')
  async deleteUserController(@Param('id') id: string, @Res() res: Response) {
    await this.appServiceUser.deleteUserService(id);
    return res.status(204).send();
  }

  @Patch(':id')
  async patchUserController(
    @Param('id') id: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const { body } = req;
    const updatedUser = await this.appServiceUser.patchUserService(id, body);
    return res.status(200).json(updatedUser);
  }
}
