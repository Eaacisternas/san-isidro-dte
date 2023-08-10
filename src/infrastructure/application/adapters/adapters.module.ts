import { Global, Module } from '@nestjs/common';
import axios from 'axios';
import { HTTP_ADAPTER } from './http';
import { AXIOS_INSTANCE, AxiosAdapterService } from './http/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvironmentService } from '../environment';
import { SQL_ADAPTER } from './database';
import { SqlService } from './database/sql.service';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [EnvironmentService],
      useFactory: (environmentService: EnvironmentService) => ({
        type: 'mysql',
        host: environmentService.get('DB_HOST'),
        port: environmentService.get('DB_PORT'),
        username: environmentService.get('DB_USERNAME'),
        password: environmentService.get('DB_PASSWORD'),
        database: environmentService.get('DB_NAME'),
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
      }),
    }),
    TypeOrmModule.forFeature([]),
  ],
  providers: [
    { provide: AXIOS_INSTANCE, useValue: axios.create() },
    { provide: HTTP_ADAPTER, useClass: AxiosAdapterService },
    { provide: SQL_ADAPTER, useClass: SqlService },
  ],
  exports: [HTTP_ADAPTER, SQL_ADAPTER],
})
export class AdaptersModule {}
