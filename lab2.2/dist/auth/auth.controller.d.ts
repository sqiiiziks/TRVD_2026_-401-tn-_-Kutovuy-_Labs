import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(dto: AuthDto): Promise<{
        message: string;
        userId: number;
    }>;
    signIn(dto: AuthDto): Promise<{
        access_token: string;
    }>;
}
