import { ReactNode, useContext, createContext } from 'react';

type FavoritesContextData = {
  favorite: boolean;
};

interface FavoritesProviderProps {
  children: ReactNode;
}

const FavoritesContext = createContext({} as FavoritesContextData);

const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const favorite = true;

  return (
    <FavoritesContext.Provider value={{ favorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error('Favorites must exist to exibe favorites');
  }

  return context;
}

export { FavoritesProvider, useFavorites };
