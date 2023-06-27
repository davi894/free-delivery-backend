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
    return '';
  }

  @Get(':id')
  async getAddressControler(@Param('id') id: string, @Res() res: Response) {
    return '';
  }

  @Patch(':id')
  async patchAddressControler(
    @Param('id') id: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    return '';
  }

  @Delete(':id')
  async deleteAddressControler() {
    return '';
  }
}
