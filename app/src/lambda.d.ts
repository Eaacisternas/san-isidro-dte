import { Handler } from 'aws-lambda';
type EventType = {
    path: string;
    requestContext: {
        stage: string;
    };
};
export declare const handler: Handler<EventType>;
export {};
