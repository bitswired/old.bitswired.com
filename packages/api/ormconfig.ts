import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

// TODO: Standardize configuration between TypeORM CLI and app configuration
export default {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  synchronize: false,
  namingStrategy: new SnakeNamingStrategy(),
  entities: ['src/**/*.entity.ts'],
  migrations: ['database/migrations/**/*.ts'],
  cli: {
    migrationsDir: 'database/migrations',
  },
};
