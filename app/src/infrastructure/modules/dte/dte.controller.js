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
exports.DteController = void 0;
const openapi = require("@nestjs/swagger");
const dte_1 = require("../../../domain/dte");
const common_1 = require("@nestjs/common");
const dto_1 = require("./dto");
let DteController = exports.DteController = class DteController {
    constructor(dteUseCase) {
        this.dteUseCase = dteUseCase;
    }
    async prepareDte(serviceId, processId) {
        const dteBody = new dto_1.DteBody();
        dteBody.id_service = serviceId;
        dteBody.id_process = processId;
        return await this.dteUseCase.prepareDte(dteBody);
    }
    async accountDetail(serviceId, processId) {
        const dteBody = new dto_1.DteBody();
        dteBody.id_service = serviceId;
        dteBody.id_process = processId;
        return await this.dteUseCase.accountDetail(dteBody);
    }
    async generateDte(serviceId, processId, folio) {
        const generateDte = new dto_1.GenerateDteBody();
        generateDte.id_service = serviceId;
        generateDte.id_process = processId;
        generateDte.folio = folio;
        return await this.dteUseCase.generateDte(generateDte);
    }
};
__decorate([
    (0, common_1.Get)('pepareDte'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Query)('serviceId')),
    __param(1, (0, common_1.Query)('processId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], DteController.prototype, "prepareDte", null);
__decorate([
    (0, common_1.Get)('accountDetail'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Query)('serviceId')),
    __param(1, (0, common_1.Query)('processId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], DteController.prototype, "accountDetail", null);
__decorate([
    (0, common_1.Get)('generateDte'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Query)('serviceId')),
    __param(1, (0, common_1.Query)('processId')),
    __param(2, (0, common_1.Query)('folio')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Number]),
    __metadata("design:returntype", Promise)
], DteController.prototype, "generateDte", null);
exports.DteController = DteController = __decorate([
    (0, common_1.Controller)('dte'),
    __metadata("design:paramtypes", [dte_1.DteUseCase])
], DteController);
//# sourceMappingURL=dte.controller.js.map