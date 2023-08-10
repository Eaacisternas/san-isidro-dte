import { PACKAGE_JSON, PackageJson } from '@infrastructure/shared';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  constructor(
    @Inject(PACKAGE_JSON) private readonly packageJson: PackageJson,
  ) {}

  getStatus() {
    return { status: 'OK' };
  }

  getVersion() {
    return {
      description: this.packageJson.description,
      name: this.packageJson.name,
      version: this.packageJson.version,
    };
  }
}
