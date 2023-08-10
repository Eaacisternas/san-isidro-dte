"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponsePostExampleDto = void 0;
const openapi = require("@nestjs/swagger");
class ResponsePostExampleDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { status: { required: true, type: () => String }, message: { required: true, type: () => String } };
    }
}
exports.ResponsePostExampleDto = ResponsePostExampleDto;
//# sourceMappingURL=response-post-example.dto.js.map