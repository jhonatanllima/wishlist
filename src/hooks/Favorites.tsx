import {
  useState,
  ReactNode,
  useContext,
  createContext,
  SetStateAction,
  useEffect,
} from 'react';
import { toast } from 'react-toastify';

import { ProductProps } from '~/types/services/getProducts';

type FavoritesContextData = {
  favoritesIds: number[];
  favorites: ProductProps[];
  setFavorites: (props: SetStateAction<ProductProps[]>) => void;
  setItemToRemoveFavorite: (props: SetStateAction<number | null>) => void;
};

interface FavoritesProviderProps {
  children: ReactNode;
}

const FavoritesContext = createContext({} as FavoritesContextData);

const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<ProductProps[]>([]);
  const [itemToRemoveFavorite, setItemToRemoveFavorite] = useState<
    number | null
  >(null);

  const removedFavoriteToast = () =>
    toast.success('Item Removido com Sucesso!');
  const favoritesIds = favorites.map((favorite) => favorite.id);

  useEffect(() => {
    if (favorites.length !== 0) {
      localStorage.setItem('myLocalFavorites', JSON.stringify(favorites));
    }
  }, [favorites]);

  useEffect(() => {
    if (localStorage.getItem('myLocalFavorites')) {
      const handleFavoritesOnLocalStorage =
        localStorage.getItem('myLocalFavorites');

      const myLocalFavorites = JSON.parse(
        String(handleFavoritesOnLocalStorage)
      );

      if (favorites.length === 0 && !!myLocalFavorites) {
        setFavorites(myLocalFavorites);
      }
    }
  }, []);

  useEffect(() => {
    if (itemToRemoveFavorite !== null) {
      const removedFavorite = favorites.filter(
        (favorite) => favorite.id !== itemToRemoveFavorite
      );

      if (removedFavorite !== favorites) {
        setFavorites(removedFavorite);
        localStorage.setItem(
          'myLocalFavorites',
          JSON.stringify(removedFavorite)
        );
        removedFavoriteToast();
      }
    }
  }, [itemToRemoveFavorite]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, setFavorites, favoritesIds, setItemToRemoveFavorite }}
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
