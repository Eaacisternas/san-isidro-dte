"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.environmentSchema = void 0;
const Joi = __importStar(require("joi"));
exports.environmentSchema = Joi.object({
    NODE_ENV: Joi.string()
        .valid('local', 'dev', 'test', 'qa', 'prod')
        .default('local'),
    PORT: Joi.number().default(3000),
    DB_HOST: Joi.string().required(),
    DB_NAME: Joi.string(),
    DB_PASSWORD: Joi.string().required(),
    DB_PORT: Joi.number().required(),
    DB_USERNAME: Joi.string().required(),
    SOAP_URL: Joi.string().uri().required(),
    SOAP_API_KEY: Joi.string().required(),
    SII_RESOLUTION: Joi.number().required(),
    COMPANY_ID: Joi.number().required(),
});
//# sourceMappingURL=environment.schema.js.map