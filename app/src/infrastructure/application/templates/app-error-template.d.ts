export declare const FilesInternalErrors: InternalErrorsTemplate;
export interface InternalErrorTemplate {
    code: string;
    description: string;
}
export interface InternalErrorsTemplate {
    [key: string]: InternalErrorTemplate;
}
export interface ErrorTemplate {
    errorType: InternalErrorType;
    errorData: InternalErrorTemplate;
}
export declare enum InternalErrorType {
    NOT_FOUND_ENTITY = "NOT_FOUND",
    INVALID_INPUT_DATA = "INVALID_INPUT_DATA"
}
