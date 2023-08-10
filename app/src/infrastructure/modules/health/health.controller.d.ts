import { HealthService } from './health.service';
export declare class HealthController {
    private readonly healthsService;
    constructor(healthsService: HealthService);
    getStatus(): {
        status: string;
    };
    getVersion(): {
        description: string;
        name: string;
        version: string;
    };
}
