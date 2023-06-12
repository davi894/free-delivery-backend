import { Controler, Post, Get, Patch, Delete, Param, Req, Res, Query } from '@nest/common';
import { AppServiceAddress } from '../../services/address/app.address.service';

@Controler('address')
export class AppControlerAddress {
  constructor(private readonly appServiceAddress: AppServiceAddress) {}

  @Post('')
  async postAddressControler() { }

  @Get('')
  async getAddressControler() { }

  @Patch('')
  async patchAddressControler() {}

  @Delete('')
  async deleteAddressControler() {}
}
