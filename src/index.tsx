import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

const root = document.getElementById('root');

if (!root) throw new Error('Not Found root div');

createRoot(root).render(
  <StrictMode>
    <></>
  </StrictMode>,
);
