import { DataSource } from "typeorm";
import {User} from './entities/User';
import {databaseConfig} from './config';

export const AppDataSource = new DataSource({
  type: "mysql",
  host: databaseConfig.host,
  port: databaseConfig.port,
  username: databaseConfig.username,
  password: databaseConfig.password,
  database: databaseConfig.database,
  synchronize: true,
  logging: true,
  entities: [User],
});