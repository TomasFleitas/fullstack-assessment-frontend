import axios, { AxiosError } from 'axios';
import { QueryFunction, QueryKey, UseMutationOptions } from 'react-query';
import { VITE_APP_API_URL_LOCAL } from 'utilities/const';

export type ApiError = {
  message?: string;
  status?: string;
};

export type MutateApiAxiosError = AxiosError<{
  errors?: ApiError[];
}>;

export type QueryApiService<ResponseType = unknown> = {
  queryFn: QueryFunction<ResponseType, string[]>;
  queryKey?: QueryKey;
};

export type MutateApiService<
  ResponseType = unknown,
  RequestType = unknown,
  ResponseError = MutateApiAxiosError,
> = UseMutationOptions<ResponseType, ResponseError, RequestType, unknown>;

export default axios.create({
  baseURL: VITE_APP_API_URL_LOCAL,
});
