"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModulesModule = void 0;
const common_1 = require("@nestjs/common");
const health_1 = require("./health");
const dte_1 = require("./dte");
const soap_1 = require("./soap");
let ModulesModule = exports.ModulesModule = class ModulesModule {
};
exports.ModulesModule = ModulesModule = __decorate([
    (0, common_1.Module)({
        imports: [health_1.HealthModule, dte_1.DteModule, soap_1.SoapModule],
    })
], ModulesModule);
//# sourceMappingURL=modules.module.js.map