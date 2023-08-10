import { EntityManager } from 'typeorm';
import { ISqlAdapter } from './sql.adapter';
export declare class SqlService implements ISqlAdapter {
    private entityManager;
    constructor(entityManager: EntityManager);
    query(query: string): Promise<unknown>;
}
