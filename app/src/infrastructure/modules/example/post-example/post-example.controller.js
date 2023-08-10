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
exports.PostExampleController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const dto_1 = require("./dto");
const example_1 = require("../../../../domain/example");
let PostExampleController = exports.PostExampleController = class PostExampleController {
    constructor(postPortUseCase) {
        this.postPortUseCase = postPortUseCase;
    }
    addData(data) {
        return this.postPortUseCase.addData(data);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.PayloadExampleDataDto]),
    __metadata("design:returntype", void 0)
], PostExampleController.prototype, "addData", null);
exports.PostExampleController = PostExampleController = __decorate([
    (0, common_1.Controller)('post-example'),
    __metadata("design:paramtypes", [example_1.PostExampleUseCase])
], PostExampleController);
//# sourceMappingURL=post-example.controller.js.map