export const BASE_URL = 'employees';

export const getAllKey = [BASE_URL];

export const getKey = (id: string | number) => [BASE_URL, id];

export const getDepartmentsHistoryKey = (id: number | string) => [
  BASE_URL,
  id,
  'department-history',
];
