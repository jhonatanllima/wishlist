import { FaHeart } from 'react-icons/fa';

import { useFavorites } from '~/hooks/Favorites';

import * as S from './styles';
import { colors } from '~/styles/colors';

import { FavoriteButtonProps } from '~/types/components/FavoriteButton';

export function FavoriteButton({ onClick, activeButton }: FavoriteButtonProps) {
  const { favoritesIds } = useFavorites();

  return (
    <S.Button onClick={onClick}>
      <FaHeart
        size={24}
        color={
          favoritesIds.includes(activeButton) ? colors.red[500] : colors.white
        }
      />
    </S.Button>
  );
}
