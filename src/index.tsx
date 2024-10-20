import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { QueryClientProvider } from 'react-query';
import { PRIMARY_COLOR, queryClient } from 'utilities/const';
import { Routers } from 'routers';
import './index.scss';
import { SessionProvider } from 'context/sessionContext';
import { ConfigProvider } from 'antd';

const root = document.getElementById('root');

if (!root) throw new Error('Not Found root div');

createRoot(root).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={{ token: { colorPrimary: PRIMARY_COLOR } }}>
        <SessionProvider>
          <Routers />
        </SessionProvider>
      </ConfigProvider>
    </QueryClientProvider>
  </StrictMode>,
);
