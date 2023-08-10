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
exports.AxiosAdapterService = void 0;
const common_1 = require("@nestjs/common");
const axios_instance_token_1 = require("./axios-instance.token");
let AxiosAdapterService = exports.AxiosAdapterService = class AxiosAdapterService {
    constructor(axiosInstance) {
        this.axiosInstance = axiosInstance;
    }
    async get(url, options) {
        const { data } = await this.axiosInstance.get(url, options);
        return data;
    }
    async post(url, postData, options) {
        const { data } = await this.axiosInstance.post(url, postData, options);
        return data;
    }
    async put(url, putData, options) {
        const { data } = await this.axiosInstance.put(url, putData, options);
        return data;
    }
    async delete(url, options) {
        const { data } = await this.axiosInstance.delete(url, options);
        return data;
    }
};
exports.AxiosAdapterService = AxiosAdapterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(axios_instance_token_1.AXIOS_INSTANCE)),
    __metadata("design:paramtypes", [Function])
], AxiosAdapterService);
//# sourceMappingURL=axios-adapter.service.js.map