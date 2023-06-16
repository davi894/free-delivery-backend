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
import { AppServiceUser } from '../../providers/services/user/app.user.service';
import { Request, Response } from 'express';
@Controller('user')
export class AppControllerUser {
  constructor(private readonly appServiceUser: AppServiceUser) {}

  @Post('')
  async postUserController(@Req() req: Request, @Res() res: Response) {
    const { body } = req;

    const newUser = await this.appServiceUser.postUserService(body);

    const { password, ...userNotPassword } = newUser;

    return res.status(201).json({ ...userNotPassword });
  }

  @Get(':id')
  async getUserController(
    @Query('user_info') user_info: string,
    @Param('id') id: string,
    @Res() res: Response,
  ) {
    const user = await this.appServiceUser.getUserService(id);
    const { password, ...userNotPassword } = user;
    return res.status(200).json({ ...userNotPassword });
  }

  @Patch(':id')
  async patchUserController(
    @Param('id') id: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const { body } = req;

    const updatedUser = await this.appServiceUser.patchUserService(id, body);

    const { password, ...userNotPassword } = updatedUser;

    return res.status(200).json({ ...userNotPassword });
  }

  @Delete(':id')
  async deleteUserController(@Param('id') id: string, @Res() res: Response) {
    await this.appServiceUser.deleteUserService(id);
    return res.status(204).send();
  }
}
