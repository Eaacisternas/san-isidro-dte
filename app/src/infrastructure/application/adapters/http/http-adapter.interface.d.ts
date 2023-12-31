export interface HttpAdapterOptions {
    headers?: Record<string, any>;
}
export interface HttpAdapter {
    get<T = unknown>(url: string, options?: HttpAdapterOptions): Promise<T>;
    post<T = unknown>(url: string, data: Record<string, unknown>, options?: HttpAdapterOptions): Promise<T>;
    put<T = unknown>(url: string, data: Record<string, unknown>, options: HttpAdapterOptions): Promise<T>;
    delete<T = unknown>(url: string, options?: HttpAdapterOptions): Promise<T>;
}
