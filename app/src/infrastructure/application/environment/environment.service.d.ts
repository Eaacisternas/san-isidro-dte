import { ConfigService } from '@nestjs/config';
import { Environment } from './environment.type';
export declare class EnvironmentService {
    private readonly configService;
    constructor(configService: ConfigService<Environment, true>);
    get<Key extends keyof Environment>(key: Key): Environment[Key];
}
