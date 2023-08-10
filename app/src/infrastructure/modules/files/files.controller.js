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
var FileController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const constants_1 = require("../../application/constants");
const files_1 = require("../../../domain/files");
const dto_1 = require("./dto");
const request_get_file_dto_1 = require("./dto/request-get-file-dto");
let FileController = exports.FileController = FileController_1 = class FileController {
    constructor(getFile) {
        this.getFile = getFile;
        this.logger = new common_1.Logger(FileController_1.name);
    }
    file(fileName) {
        common_1.Logger.log(fileName);
        return this.getFile.filename(fileName);
    }
};
__decorate([
    (0, common_1.Get)(constants_1.FAQS_FILE_PATH.get.path),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'File Url',
        type: dto_1.GetFileDto,
    }),
    (0, swagger_1.ApiOperation)({
        summary: 'The corresponding file is brought according to the name provided.',
    }),
    openapi.ApiResponse({ status: 200, type: require("./dto/file.dto").GetFileDto }),
    __param(0, (0, common_1.Param)(constants_1.FAQS_FILE_PATH.get.params.fileName)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_get_file_dto_1.RequestGetFileDto]),
    __metadata("design:returntype", dto_1.GetFileDto)
], FileController.prototype, "file", null);
exports.FileController = FileController = FileController_1 = __decorate([
    (0, swagger_1.ApiTags)(constants_1.FILES_API_TAG),
    (0, common_1.Controller)(constants_1.FAQS_FILE_PATH.root),
    __metadata("design:paramtypes", [files_1.GetFileUseCase])
], FileController);
//# sourceMappingURL=files.controller.js.map