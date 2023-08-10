import { ConfigService } from '@nestjs/config';
import { GetFileDto } from './dto';
import { GetFilePort } from '@domain/files';
import { RequestGetFileDto } from './dto/request-get-file-dto';
export declare class FilesService implements GetFilePort {
    private readonly configService;
    constructor(configService: ConfigService);
    getFile(data: RequestGetFileDto): GetFileDto;
}
