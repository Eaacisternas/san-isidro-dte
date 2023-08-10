import { RequestGetFileData, ResponseGetFiles } from './../dto';
export interface GetFilePort {
    getFile(filename: RequestGetFileData): ResponseGetFiles;
}
