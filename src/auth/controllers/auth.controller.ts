// import { Controller, Injectable, Post, Body } from '@nestjs/common';
// import { AuthService } from '../services/auth.service';
// import * as bcrypt from 'bcrypt';
// import * as dotenv from 'dotenv';
// import { Prisma, User, PrismaClient } from '@prisma/client';
// import { PrismaService } from 'prisma/services/app.prisma.service';
// dotenv.config();
// import * as LRAuthPrrovider from 'loginradius-sdk';

// const prisma = new PrismaClient({
//   datasources: {
//     db: {
//       url: 'file:./dev_qa.db',
//     },
//   },
// });

// const config = {
//   apiDomain: 'api.loginradius.com',
//   apiKey: process.env.API_KEY,
//   apiSecret: process.env.API_SECRET,
//   siteName: process.env.APP_NAME,
//   apiRequestSigning: false,
//   proxy: {
//     host: '',
//     port: '',
//     user: '',
//     password: '',
//   },
// };
// const lrv2 = LRAuthPrrovider(config);

// const sott = process.env.SOTT;

// export class UserDto {
//   email: string;
//   password: string;
// }

// @Injectable()
// @Controller('login')
// export class AuthController {
//   constructor(private readonly authService: AuthService) {}

//   @Post('login')
//   async login(@Body() loginUserDto: UserDto) {
//     try {
//       const userPrisma = prisma.user.findUnique({
//         where: { email: loginUserDto.email },
//       });

//       const emailAuthenticationModel = {
//         email: loginUserDto.email,
//         password: await bcrypt.compare(
//           loginUserDto.password,
//           (
//             await userPrisma
//           ).password,
//         ),
//       };
//       const user = await lrv2.authenticationApi.loginByEmail(
//         emailAuthenticationModel,
//       );
//       return {
//         accessToken: user.access_token,
//       };
//     } catch (error) {
//       return error;
//     }
//   }
// }
