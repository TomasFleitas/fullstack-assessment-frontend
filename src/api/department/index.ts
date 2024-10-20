import { AxiosResponse } from 'axios';
import api, { QueryApiService } from '..';
import { BASE_URL } from './department.keys';

const getDepartments = (): QueryApiService<AxiosResponse<Department[]>> => {
  return {
    queryKey: [BASE_URL],
    queryFn: () => api.get(BASE_URL),
  };
};

export const deparmentsApi = {
  getDepartments,
};
