"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enableVersioning = void 0;
const common_1 = require("@nestjs/common");
const enableVersioning = (app) => {
    app.enableVersioning({ type: common_1.VersioningType.URI, defaultVersion: '1' });
};
exports.enableVersioning = enableVersioning;
//# sourceMappingURL=versioning.config.js.map