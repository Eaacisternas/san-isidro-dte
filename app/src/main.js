"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrap = void 0;
const application_1 = require("./infrastructure/application");
const shared_1 = require("./infrastructure/shared");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    (0, application_1.setGlobalPrefix)(app);
    (0, application_1.enableVersioning)(app);
    (0, application_1.setSwagger)(app, shared_1.packageJson);
    const express = app.getHttpAdapter().getInstance();
    express.set('etag', false);
    const environmentService = app.get(application_1.EnvironmentService);
    const port = environmentService.get('PORT');
    await app.listen(port, () => {
        common_1.Logger.log(`${shared_1.packageJson.name} is running on port ${port}`);
        common_1.Logger.log(`Please remember read README file and delete this line (./src/main.ts:line 30-32)`);
    });
}
exports.bootstrap = bootstrap;
bootstrap();
//# sourceMappingURL=main.js.map