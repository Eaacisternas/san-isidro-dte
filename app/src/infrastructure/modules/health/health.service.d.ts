import { PackageJson } from '@infrastructure/shared';
export declare class HealthService {
    private readonly packageJson;
    constructor(packageJson: PackageJson);
    getStatus(): {
        status: string;
    };
}
