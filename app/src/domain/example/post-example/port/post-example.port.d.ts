import { ResponsePostExample, PayloadExampleData } from '../dto';
export declare const POST_EXAMPLE_ADAPTER = "PostExampleAdapter";
export interface PostExamplePort {
    addData(data: PayloadExampleData): ResponsePostExample;
}
