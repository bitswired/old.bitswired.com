import { HcaptchaAuthGuard } from './hcaptcha-auth.guard';

describe('HcaptchaAuthGuard', () => {
  it('should be defined', () => {
    expect(new HcaptchaAuthGuard()).toBeDefined();
  });
});
