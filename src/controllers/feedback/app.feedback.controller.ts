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
import { AppServiceFeedback } from '../../providers/services/feedback/app.feedback.service';

@Controller('feedback')
export class AppControllerFeedback {
  constructor(private readonly appServiceFeedBack: AppServiceFeedback) {}
}
