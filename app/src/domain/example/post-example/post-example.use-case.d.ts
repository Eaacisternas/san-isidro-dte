import { PostExamplePort } from './port';
import { PayloadExampleData } from './dto';
export declare class PostExampleUseCase {
    private readonly postExamplePort;
    constructor(postExamplePort: PostExamplePort);
    addData(data: PayloadExampleData): import("./dto").ResponsePostExample;
}
