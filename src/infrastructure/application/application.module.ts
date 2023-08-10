import { Module } from '@nestjs/common';
import { AdaptersModule } from './adapters';
import { EnvironmentModule } from './environment';
import { FiltersModule } from './filters';
import { InterceptorsModule } from './interceptors';
import { MiddlewaresModule } from './middlewares';
import { PipesModule } from './pipes';

@Module({
  imports: [
    AdaptersModule,
    EnvironmentModule,
    FiltersModule,
    InterceptorsModule,
    MiddlewaresModule,
    PipesModule,
  ],
})
export class ApplicationModule {}
