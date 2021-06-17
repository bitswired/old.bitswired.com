import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { isEqual } from 'lodash';
import { BasicAuth } from '../configuration';

@Injectable()
export class AuthService {
  constructor(private configService: ConfigService) {}

  validateBasicAuth(receivedAuth: BasicAuth) {
    const realAuth = this.configService.get('basicAuth');

    return isEqual(receivedAuth, realAuth);
  }
}
