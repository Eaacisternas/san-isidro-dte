"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSwagger = void 0;
const shared_1 = require("../../../shared");
const swagger_1 = require("@nestjs/swagger");
function setSwagger(app, packageJson) {
    const config = new swagger_1.DocumentBuilder()
        .setTitle(packageJson.name)
        .setDescription(packageJson.description)
        .setVersion(packageJson.version)
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup(shared_1.GLOBAL_PREFIX, app, document);
}
exports.setSwagger = setSwagger;
//# sourceMappingURL=swagger.config.js.map