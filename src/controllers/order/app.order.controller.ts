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
import { Request, Response } from 'express';
import { AppServiceOrder } from '../../providers/services/order/app.order.service';

@Controller('order')
export class AppControllerOrder {
  constructor(private readonly appServiceOrder: AppServiceOrder) {}

  @Post('')
  async postOrderController() {
    return '';
  }

  @Get('')
  async getOrderController() {
    return '';
  }

  @Patch('')
  async patchOrderController() {
    return '';
  }

  @Delete('')
  async deletetOrderController() {
    return '';
  }
}
