"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationModule = void 0;
const common_1 = require("@nestjs/common");
const adapters_1 = require("./adapters");
const environment_1 = require("./environment");
const filters_1 = require("./filters");
const interceptors_1 = require("./interceptors");
const middlewares_1 = require("./middlewares");
const pipes_1 = require("./pipes");
let ApplicationModule = exports.ApplicationModule = class ApplicationModule {
};
exports.ApplicationModule = ApplicationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            adapters_1.AdaptersModule,
            environment_1.EnvironmentModule,
            filters_1.FiltersModule,
            interceptors_1.InterceptorsModule,
            middlewares_1.MiddlewaresModule,
            pipes_1.PipesModule,
        ],
    })
], ApplicationModule);
//# sourceMappingURL=application.module.js.map