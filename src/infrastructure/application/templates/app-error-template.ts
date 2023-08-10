export const FilesInternalErrors: InternalErrorsTemplate = {
  NOT_FOUND_FILE: { code: 'NF-F', description: 'Not found file' },
};
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
export enum InternalErrorType {
  NOT_FOUND_ENTITY = 'NOT_FOUND',
  INVALID_INPUT_DATA = 'INVALID_INPUT_DATA',
}
