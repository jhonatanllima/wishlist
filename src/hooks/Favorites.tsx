import {
  useState,
  ReactNode,
  useContext,
  createContext,
  SetStateAction,
  useEffect,
} from 'react';

import { ProductProps } from '~/types/services/getProducts';

type FavoritesContextData = {
  favoritesIds: number[];
  favorites: ProductProps[];
  setFavorites: (props: SetStateAction<ProductProps[]>) => void;
};

interface FavoritesProviderProps {
  children: ReactNode;
}

const FavoritesContext = createContext({} as FavoritesContextData);

const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<ProductProps[]>([]);

  const favoritesIds = favorites.map((favorite) => favorite.id);

  useEffect(() => {
    if (favorites.length !== 0) {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    if (localStorage.getItem('favorites')) {
      const handleFavoritesOnLocalStorage = localStorage.getItem('favorites');

      const myLocalFavorites = JSON.parse(
        String(handleFavoritesOnLocalStorage)
      );

      if (favorites.length === 0 && !!myLocalFavorites) {
        setFavorites(myLocalFavorites);
      }
    }
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, setFavorites, favoritesIds }}
    >
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
