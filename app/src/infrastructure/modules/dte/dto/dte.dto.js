"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateDteBody = exports.DteBody = void 0;
const openapi = require("@nestjs/swagger");
class DteBody {
    static _OPENAPI_METADATA_FACTORY() {
        return { id_service: { required: true, type: () => Number }, id_process: { required: true, type: () => String } };
    }
}
exports.DteBody = DteBody;
class GenerateDteBody extends DteBody {
    static _OPENAPI_METADATA_FACTORY() {
        return { folio: { required: true, type: () => Number } };
    }
}
exports.GenerateDteBody = GenerateDteBody;
//# sourceMappingURL=dte.dto.js.map