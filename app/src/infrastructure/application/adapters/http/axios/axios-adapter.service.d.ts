import { AxiosInstance } from 'axios';
import { HttpAdapter, HttpAdapterOptions } from '../http-adapter.interface';
export declare class AxiosAdapterService implements HttpAdapter {
    private readonly axiosInstance;
    constructor(axiosInstance: AxiosInstance);
    get<T = unknown>(url: string, options?: HttpAdapterOptions): Promise<T>;
    post<T = unknown>(url: string, postData: Record<string, unknown>, options?: HttpAdapterOptions): Promise<T>;
    put<T = unknown>(url: string, putData: Record<string, unknown>, options: HttpAdapterOptions): Promise<T>;
    delete<T = unknown>(url: string, options?: HttpAdapterOptions): Promise<T>;
}
