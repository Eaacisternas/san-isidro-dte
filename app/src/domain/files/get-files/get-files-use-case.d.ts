import { GetFilePort } from './port';
import { RequestGetFileData } from './dto';
export declare class GetFileUseCase {
    private readonly fileService;
    constructor(fileService: GetFilePort);
    filename(fileName: RequestGetFileData): import("./dto").ResponseGetFiles;
}
