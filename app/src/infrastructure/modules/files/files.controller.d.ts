import { GetFileUseCase } from '@domain/files';
import { GetFileDto } from './dto';
import { RequestGetFileDto } from './dto/request-get-file-dto';
export declare class FileController {
    private readonly getFile;
    private readonly logger;
    constructor(getFile: GetFileUseCase);
    file(fileName: RequestGetFileDto): GetFileDto;
}
