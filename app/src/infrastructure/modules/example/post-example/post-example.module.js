"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostExampleModule = void 0;
const common_1 = require("@nestjs/common");
const post_example_controller_1 = require("./post-example.controller");
const post_example_service_1 = require("./post-example.service");
const example_1 = require("../../../../domain/example");
let PostExampleModule = exports.PostExampleModule = class PostExampleModule {
};
exports.PostExampleModule = PostExampleModule = __decorate([
    (0, common_1.Module)({
        controllers: [post_example_controller_1.PostExampleController],
        providers: [
            example_1.PostExampleUseCase,
            {
                provide: example_1.POST_EXAMPLE_ADAPTER,
                useClass: post_example_service_1.PostExampleService,
            },
        ],
    })
], PostExampleModule);
//# sourceMappingURL=post-example.module.js.map