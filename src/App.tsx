import React, { FC, ReactElement } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { customTheme } from './themes/customTheme';
import { Dashboard } from './pages/dashboard';
import ComposeContext from './context/compose.context';
import { rootContext } from './context/root.context';

// Create a client
const queryClient = new QueryClient();

const App: FC = (): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <ComposeContext components={rootContext}>
        <ThemeProvider theme={customTheme}>
          <CssBaseline />
          <Dashboard />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </ComposeContext>
    </QueryClientProvider>
  );
};

export default App;
