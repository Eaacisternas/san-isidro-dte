"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = exports.FilesInternalErrors = void 0;
exports.FilesInternalErrors = {
    NOT_FOUND_FILE: { code: 'NF-F', description: 'Not found file' },
};
class AppError extends Error {
    constructor(errorType, errorData) {
        super(errorData.description);
        this.errorType = errorType;
        this.errorData = errorData;
        Object.setPrototypeOf(this, AppError.prototype);
    }
}
exports.AppError = AppError;
//# sourceMappingURL=app-error.js.map