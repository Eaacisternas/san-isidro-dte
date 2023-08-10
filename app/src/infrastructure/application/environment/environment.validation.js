"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEnvironment = void 0;
const class_transformer_1 = require("class-transformer");
const environment_schema_1 = require("./environment.schema");
const environment_type_1 = require("./environment.type");
function validateEnvironment(configuration) {
    const environment = (0, class_transformer_1.plainToInstance)(environment_type_1.Environment, configuration);
    const validation = environment_schema_1.environmentSchema.validate(environment, {
        allowUnknown: true,
        abortEarly: false,
    });
    if (validation.error)
        throw new Error(validation.error.message);
    return validation.value;
}
exports.validateEnvironment = validateEnvironment;
//# sourceMappingURL=environment.validation.js.map