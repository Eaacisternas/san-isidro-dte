import {
  ErrorTemplate,
  InternalErrorTemplate,
  InternalErrorsTemplate,
  InternalErrorType,
} from '@application/templates';

export const FilesInternalErrors: InternalErrorsTemplate = {
  NOT_FOUND_FILE: { code: 'NF-F', description: 'Not found file' },
};

export interface InternalErrorData {
  code: string;
  description: string;
}
export class AppError extends Error implements ErrorTemplate {
  constructor(
    public readonly errorType: InternalErrorType,
    public readonly errorData: InternalErrorTemplate,
  ) {
    super(errorData.description);
    Object.setPrototypeOf(this, AppError.prototype);
  }
}
