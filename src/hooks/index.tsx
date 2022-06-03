import { ReactNode } from 'react';

import { SearchProvider } from './Search';

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return <SearchProvider>{children}</SearchProvider>;
}
