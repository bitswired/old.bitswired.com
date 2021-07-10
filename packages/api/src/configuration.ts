import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

interface DatabaseConfig {
  type: string;
  host: string;
  database: string;
  port: number;
  username: string;
  password: string;
}

export interface BasicAuthConfig {
  username: string;
  password: string;
}

export interface HCaptchaConfig {
  secretKey: string;
}

export interface EmailConfig {
  apiKey: string;
}

export interface Config {
  database: DatabaseConfig;
  basicAuth: BasicAuthConfig;
  hcaptcha: HCaptchaConfig;
  email: EmailConfig;
}

export default (): Config => {
  const config = {
    database: {
      type: 'postgres',
      synchronize: true,
      host: process.env.POSTGRES_HOST,
      database: process.env.POSTGRES_DATABASE,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      namingStrategy: new SnakeNamingStrategy(),
    },
    basicAuth: {
      username: process.env.BASIC_AUTH_USERNAME,
      password: process.env.BASIC_AUTH_PASSWORD,
    },
    hcaptcha: {
      secretKey: process.env.HCAPTCHA_SECRET_KEY,
    },
    email: {
      apiKey: process.env.SENDINBLUE_API_KEY,
    },
  };
  return config;
};
