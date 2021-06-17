import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthService } from '../auth.service';

@Injectable()
export class BasicAuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const headers = ctx.getContext().request.headers;

    try {
      const [_, base64Auth] = headers.authorization.split(' ');
      const [username, password] = Buffer.from(base64Auth, 'base64')
        .toString()
        .split(':');

      const authenticated = this.authService.validateBasicAuth({
        username,
        password,
      });
      if (authenticated) return true;
      else throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    } catch (err) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
  }
}
