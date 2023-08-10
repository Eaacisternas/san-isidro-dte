import { Inject, Injectable } from '@nestjs/common';
import { AxiosInstance } from 'axios';
import { HttpAdapter, HttpAdapterOptions } from '../http-adapter.interface';
import { AXIOS_INSTANCE } from './axios-instance.token';

@Injectable()
export class AxiosAdapterService implements HttpAdapter {
  constructor(
    @Inject(AXIOS_INSTANCE)
    private readonly axiosInstance: AxiosInstance,
  ) {}

  async get<T = unknown>(
    url: string,
    options?: HttpAdapterOptions,
  ): Promise<T> {
    const { data } = await this.axiosInstance.get<T>(url, options);
    return data;
  }

  async post<T = unknown>(
    url: string,
    postData: Record<string, unknown>,
    options?: HttpAdapterOptions,
  ): Promise<T> {
    const { data } = await this.axiosInstance.post<T>(url, postData, options);
    return data;
  }

  async put<T = unknown>(
    url: string,
    putData: Record<string, unknown>,
    options: HttpAdapterOptions,
  ): Promise<T> {
    const { data } = await this.axiosInstance.put<T>(url, putData, options);
    return data;
  }

  async delete<T = unknown>(
    url: string,
    options?: HttpAdapterOptions,
  ): Promise<T> {
    const { data } = await this.axiosInstance.delete<T>(url, options);
    return data;
  }
}
