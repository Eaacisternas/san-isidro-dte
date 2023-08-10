export interface ISqlAdapter {
  query(query: string): Promise<unknown>;
}
