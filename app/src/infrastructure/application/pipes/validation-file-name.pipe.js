"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationFileNameParams = void 0;
const errors_1 = require("../../../domain/shared/errors");
const constants_1 = require("../constants");
const templates_1 = require("../templates");
class ValidationFileNameParams {
    transform(value) {
        if (typeof value !== 'string') {
            throw new errors_1.AppError(templates_1.InternalErrorType.INVALID_INPUT_DATA, errors_1.FilesInternalErrors.NOT_FOUND_FILE);
        }
        const upperCasedValue = value.toUpperCase();
        if (!this.isValidName(upperCasedValue)) {
            throw new errors_1.AppError(templates_1.InternalErrorType.INVALID_INPUT_DATA, errors_1.FilesInternalErrors.NOT_FOUND_FILE);
        }
        return upperCasedValue;
    }
    isValidName(name) {
        return Object.values(constants_1.FilesName).includes(name);
    }
}
exports.ValidationFileNameParams = ValidationFileNameParams;
//# sourceMappingURL=validation-file-name.pipe.js.map