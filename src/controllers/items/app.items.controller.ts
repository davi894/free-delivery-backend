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
import { AppServiceItems } from '../../providers/services/items/app.items.service';

@Controller('items')
export class AppControllerItem {
  constructor(private readonly appServiceItems: AppServiceItems) {}
}
