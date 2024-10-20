import { NotificationArgsProps } from 'antd';
import { QueryClient } from 'react-query';

export const { VITE_APP_API_URL_LOCAL } = import.meta.env;

export const CACHE_TIME = 30 * 60 * 1000; // 30 min

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: true,
      cacheTime: CACHE_TIME,
      staleTime: CACHE_TIME,
    },
  },
});

export const DEFAULT_NOTIFICAION_PROPS: Partial<NotificationArgsProps> = {
  placement: 'top',
  duration: 5000,
};

export const PRIMARY_COLOR = '#91d568';
