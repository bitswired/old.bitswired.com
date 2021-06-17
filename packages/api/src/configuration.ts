import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

interface DatabaseConfig {
  type: string;
  host: string;
  database: string;
  port: number;
  username: string;
  password: string;
}

export interface BasicAuth {
  username: string;
  password: string;
}

export interface Config {
  database: DatabaseConfig;
  basicAuth: BasicAuth;
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
  };
  return config;
};
