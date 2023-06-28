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
import { AppServiceAddress } from '../../providers/services/address/app.address.service';

@Controller('address')
export class AppControllerAddress {
  constructor(private readonly appServiceAddress: AppServiceAddress) {}

  @Post('')
  async postAddressControler(@Req() req: Request, @Res() res: Response) {
    const { body } = req;
    const newAddress = this.appServiceAddress.postAddressService(body);

    return res.status(201).json(newAddress);
  }

  @Get(':id')
  async getAddressControler(@Param('id') id: string, @Res() res: Response) {
    this.appServiceAddress.getAddressService()

    return '';
  }

  @Patch(':id')
  async patchAddressControler(
    @Param('id') id: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    this.appServiceAddress.patchAddressService()

    return '';
  }

  @Delete(':id')
  async deleteAddressControler(@Param('id') id: string, @Res() res: Response) {
    this.appServiceAddress.deleteAddressService()

    return '';
  }
}
