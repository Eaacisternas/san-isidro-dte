"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DteService = void 0;
const common_1 = require("@nestjs/common");
const database_1 = require("../../application/adapters/database");
let DteService = exports.DteService = class DteService {
    constructor(sqlService) {
        this.sqlService = sqlService;
    }
    async prepareDte(dteBody) {
        try {
            return await this.sqlService.query(`CALL sssi2.SP_GEN_AUX_DTE(${dteBody.id_service}, '${dteBody.id_process}');`);
        }
        catch (error) {
            common_1.Logger.error(error);
            throw new Error(`Error preparing DTE`);
        }
    }
    async accountDetail(dteBody) {
        try {
            return await this.sqlService.query(`CALL sssi2.SP_DETALLE_CUENTA(${dteBody.id_service}, '${dteBody.id_process}');`);
        }
        catch (error) {
            common_1.Logger.error(error);
            throw new Error('Error detail account DTE');
        }
    }
    async generateDte(generateDte) {
        try {
            return await this.sqlService.query(`CALL sssi2.SP_DTE_4_5(${generateDte.id_service}, '${generateDte.id_process}', ${generateDte.folio});`);
        }
        catch (error) {
            common_1.Logger.error(error);
            throw new Error('Error generating DTE');
        }
    }
};
exports.DteService = DteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(database_1.SQL_ADAPTER)),
    __metadata("design:paramtypes", [database_1.SqlService])
], DteService);
//# sourceMappingURL=dte.service.js.map