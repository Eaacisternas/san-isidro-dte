"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdaptersModule = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = __importDefault(require("axios"));
const http_1 = require("./http");
const axios_2 = require("./http/axios");
const typeorm_1 = require("@nestjs/typeorm");
const environment_1 = require("../environment");
const database_1 = require("./database");
const sql_service_1 = require("./database/sql.service");
let AdaptersModule = exports.AdaptersModule = class AdaptersModule {
};
exports.AdaptersModule = AdaptersModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [environment_1.EnvironmentService],
                useFactory: (environmentService) => ({
                    type: 'mysql',
                    host: environmentService.get('DB_HOST'),
                    port: environmentService.get('DB_PORT'),
                    username: environmentService.get('DB_USERNAME'),
                    password: environmentService.get('DB_PASSWORD'),
                    database: environmentService.get('DB_NAME'),
                    waitForConnections: true,
                    connectionLimit: 10,
                    queueLimit: 0,
                }),
            }),
            typeorm_1.TypeOrmModule.forFeature([]),
        ],
        providers: [
            { provide: axios_2.AXIOS_INSTANCE, useValue: axios_1.default.create() },
            { provide: http_1.HTTP_ADAPTER, useClass: axios_2.AxiosAdapterService },
            { provide: database_1.SQL_ADAPTER, useClass: sql_service_1.SqlService },
        ],
        exports: [http_1.HTTP_ADAPTER, database_1.SQL_ADAPTER],
    })
], AdaptersModule);
//# sourceMappingURL=adapters.module.js.map