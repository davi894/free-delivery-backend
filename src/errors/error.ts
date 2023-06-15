import { HttpException, HttpStatus } from '@nestjs/common';
import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';
import { AppModule } from 'src/app.module';
import { NestFactory } from '@nestjs/core';

export class Error extends HttpException {
  constructor(mensagem: string, statusCode: HttpStatus) {
    super(mensagem, statusCode);
  }
}

@Catch(Error)
export class CustomError implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const statusCode = exception.getStatus();
    const mensagemErro = exception.message;

    response.status(statusCode).json({
      mensagem: mensagemErro,
    });
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new CustomError());
  await app.listen(3000);
}
bootstrap();
