"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseToSnakeInterceptor = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const rxjs_1 = require("rxjs");
const ts_case_convert_1 = require("ts-case-convert");
let ResponseToSnakeInterceptor = exports.ResponseToSnakeInterceptor = class ResponseToSnakeInterceptor {
    intercept(_, next) {
        return next
            .handle()
            .pipe((0, rxjs_1.map)((value) => ((0, class_validator_1.isObject)(value) ? (0, ts_case_convert_1.objectToSnake)(value) : value)));
    }
};
exports.ResponseToSnakeInterceptor = ResponseToSnakeInterceptor = __decorate([
    (0, common_1.Injectable)()
], ResponseToSnakeInterceptor);
//# sourceMappingURL=response-to-snake.interceptor.js.map