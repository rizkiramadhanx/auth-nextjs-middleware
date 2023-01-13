import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient } from '@tanstack/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { ApiService } from '../service/api';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  ApiService.init();
  // ApiService.handle401Inteceptor();

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
