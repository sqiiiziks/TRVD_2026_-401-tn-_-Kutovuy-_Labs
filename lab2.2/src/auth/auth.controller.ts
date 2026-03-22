import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  @ApiOperation({ summary: 'Реєстрація нового користувача' })
  signUp(@Body() dto: AuthDto) {
    return this.authService.signUp(dto.email, dto.password);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  @ApiOperation({ summary: 'Вхід у систему' })
  signIn(@Body() dto: AuthDto) {
    return this.authService.signIn(dto.email, dto.password);
  }
}