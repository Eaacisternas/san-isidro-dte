import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { ISqlAdapter } from './sql.adapter';

@Injectable()
export class SqlService implements ISqlAdapter {
  constructor(@InjectEntityManager() private entityManager: EntityManager) {}

  async query(query: string): Promise<unknown> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await this.entityManager.query(query);
  }
}
