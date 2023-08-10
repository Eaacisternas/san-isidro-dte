import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
export declare class HttpExceptionFilter<TException extends HttpException> implements ExceptionFilter<TException> {
    catch(exception: TException, host: ArgumentsHost): void;
}
