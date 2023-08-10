import { GLOBAL_PREFIX, PackageJson } from '@infrastructure/shared';
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setSwagger(app: INestApplication, packageJson: PackageJson) {
  const config = new DocumentBuilder()
    .setTitle(packageJson.name)
    .setDescription(packageJson.description)
    .setVersion(packageJson.version)
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup(GLOBAL_PREFIX, app, document);
}
