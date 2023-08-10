"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FAQS_FILE_PATH = exports.PHONE_API_TAG = exports.FILES_API_TAG = exports.VERSION_CONTROL_API_TAG = exports.HEALTH_API_TAG = void 0;
exports.HEALTH_API_TAG = 'BFF status';
exports.VERSION_CONTROL_API_TAG = 'Supported app versions';
exports.FILES_API_TAG = 'Files';
exports.PHONE_API_TAG = 'Phone';
exports.FAQS_FILE_PATH = {
    get: {
        params: {
            fileName: 'fileName',
        },
        path: ':fileName',
    },
    root: 'file',
};
//# sourceMappingURL=swagger-tags.constants.js.map