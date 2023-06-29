import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Param,
  Req,
  Body,
  Res,
} from '@nestjs/common';
import { AppServiceAddress } from '../../providers/services/address/app.address.service';
import { Prisma } from '@prisma/client';
import { Request, Response } from 'express';

@Controller('address')
export class AppControllerAddress {
  constructor(private readonly appServiceAddress: AppServiceAddress) {}

  @Post('')
  async postAddressControler(
    @Body() body: Prisma.AddressCreateInput,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const newAddress = await this.appServiceAddress.postAddressService(body);

    return res.status(201).json(newAddress);
  }

  @Get(':id')
  async getAddressControler(
    @Param('id') id: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const { user } = req;
    const { id: userId } = user;

    const addressesData = this.appServiceAddress.getAddressService(userId);

    return res.status(200).json(addressesData);
  }

  @Patch(':id')
  async patchAddressControler(
    @Param('id') id: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const { body } = req;

    const patchAddress = this.appServiceAddress.patchAddressService(id, body);

    return res.status(200).json(patchAddress);
  }

  @Delete(':id')
  async deleteAddressControler(@Param('id') id: string, @Res() res: Response) {
    this.appServiceAddress.deleteAddressService(id);

    return res.status(204).send();
  }
}
