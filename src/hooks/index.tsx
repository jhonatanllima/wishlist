import { ReactNode } from 'react';

import { SearchProvider } from './Search';
import { FavoritesProvider } from './Favorites';
interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <SearchProvider>
      <FavoritesProvider>{children}</FavoritesProvider>
    </SearchProvider>
  );
}
