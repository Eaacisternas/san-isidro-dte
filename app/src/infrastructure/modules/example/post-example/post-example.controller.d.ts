import { PayloadExampleDataDto } from './dto';
import { PostExampleUseCase } from '@domain/example';
export declare class PostExampleController {
    private readonly postPortUseCase;
    constructor(postPortUseCase: PostExampleUseCase);
    addData(data: PayloadExampleDataDto): import("@domain/example").ResponsePostExample;
}
