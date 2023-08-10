import { PayloadExampleDataDto } from './dto';
import { ResponsePostExampleDto } from './dto';
import { PostExamplePort } from '@domain/example';
export declare class PostExampleService implements PostExamplePort {
    addData(data: PayloadExampleDataDto): ResponsePostExampleDto;
}
