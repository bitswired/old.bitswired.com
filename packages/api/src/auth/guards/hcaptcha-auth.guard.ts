import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpService,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GqlExecutionContext } from '@nestjs/graphql';
import { HCaptchaConfig } from '../../configuration';

@Injectable()
export class HcaptchaAuthGuard implements CanActivate {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    // FLAG: TESTING
    if (process.env.NODE_ENV === 'test') {
      return true;
    }
    const hcaptchaConfig = this.configService.get<HCaptchaConfig>('hcaptcha');

    const ctx = GqlExecutionContext.create(context);
    const headers = ctx.getContext().request.headers;

    const token = headers['captcha-token'];

    if (!token)
      throw new HttpException('Missing captcha token', HttpStatus.BAD_REQUEST);

    const verify: any = await this.httpService
      .post(
        'https://hcaptcha.com/siteverify',
        `secret=${hcaptchaConfig.secretKey}&response=${token}`,
        {
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
          },
        },
      )
      .toPromise()
      .then((x) => x.data);

    console.log(verify);

    if (!verify.success)
      throw new HttpException('Token invalid', HttpStatus.BAD_REQUEST);

    return true;
  }
}
