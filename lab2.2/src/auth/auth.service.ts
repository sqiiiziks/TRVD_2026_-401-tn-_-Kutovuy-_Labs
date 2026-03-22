import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signUp(email: string, pass: string) {
    const existingUser = await this.usersService.findOne(email);
    if (existingUser) throw new ConflictException('Користувач вже існує');

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(pass, salt);
    const user = await this.usersService.create(email, hashedPassword);
    
    return { message: 'Реєстрація успішна', userId: user.id };
  }

  async signIn(email: string, pass: string) {
    const user = await this.usersService.findOne(email);
    const isMatch = await bcrypt.compare(pass, user?.password || '');

    if (!isMatch) throw new UnauthorizedException('Невірний логін або пароль');

    const payload = { sub: user.id, email: user.email, role: user.role };
    return { access_token: await this.jwtService.signAsync(payload) };
  }
}