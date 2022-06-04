import {
  useState,
  ReactNode,
  useEffect,
  useContext,
  createContext,
  SetStateAction,
} from 'react';
import { toast } from 'react-toastify';

import { ProductProps } from '~/types/services/getProducts';

type FavoritesContextData = {
  favoritesIds: number[];
  favorites: ProductProps[];
  handleRemoveFavorite: (id: number) => void;
  setFavorites: (props: SetStateAction<ProductProps[]>) => void;
};

interface FavoritesProviderProps {
  children: ReactNode;
}

const FavoritesContext = createContext({} as FavoritesContextData);

const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<ProductProps[]>([]);

  const removedFavoriteToast = () =>
    toast.success('Item removido com sucesso!');

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

  function handleRemoveFavorite(id: number) {
    const filteredFavorites = favorites.filter(
      (favorite) => favorite.id !== id
    );

    setFavorites(filteredFavorites);
    localStorage.setItem('myLocalFavorites', JSON.stringify(filteredFavorites));
    removedFavoriteToast();
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, setFavorites, favoritesIds, handleRemoveFavorite }}
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
