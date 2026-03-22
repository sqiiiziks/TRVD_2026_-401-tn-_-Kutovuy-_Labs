import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signUp(email: string, pass: string): Promise<{
        message: string;
        userId: number;
    }>;
    signIn(email: string, pass: string): Promise<{
        access_token: string;
    }>;
}
