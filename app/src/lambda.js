"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const application_1 = require("./infrastructure/application");
const shared_1 = require("./infrastructure/shared");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const serverless_express_1 = __importDefault(require("@vendia/serverless-express"));
const app_module_1 = require("./app.module");
let server;
let stage = '';
const binaryMimeTypes = ['application/pdf'];
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    (0, application_1.setGlobalPrefix)(app);
    (0, application_1.enableVersioning)(app);
    (0, application_1.setSwagger)(app, shared_1.packageJson);
    const express = app.getHttpAdapter().getInstance();
    express.set('etag', false);
    await app.init();
    return (0, serverless_express_1.default)({ app: express, binaryMimeTypes });
}
const handler = async (event, context, callback) => {
    common_1.Logger.log(`Event: ${JSON.stringify(event)}`);
    common_1.Logger.log(`requestContext: ${JSON.stringify(event.requestContext)}`);
    if (!stage || stage === '')
        stage = event.requestContext.stage;
    common_1.Logger.log(`stage: ${stage}`);
    event.path = event.path.includes('swagger-ui')
        ? `api${event.path}`
        : event.path;
    server = server !== null && server !== void 0 ? server : (await bootstrap());
    return server(event, context, callback);
};
exports.handler = handler;
//# sourceMappingURL=lambda.js.map