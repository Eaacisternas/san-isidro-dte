import { ErrorTemplate, InternalErrorTemplate, InternalErrorsTemplate, InternalErrorType } from '@application/templates';
export declare const FilesInternalErrors: InternalErrorsTemplate;
export interface InternalErrorData {
    code: string;
    description: string;
}
export declare class AppError extends Error implements ErrorTemplate {
    readonly errorType: InternalErrorType;
    readonly errorData: InternalErrorTemplate;
    constructor(errorType: InternalErrorType, errorData: InternalErrorTemplate);
}
