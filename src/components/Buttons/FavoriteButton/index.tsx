import { FaHeart } from 'react-icons/fa';

import { FavoriteButtonProps } from '~/types/components/FavoriteButton';

import { useFavorites } from '../../../hooks/Favorites';
import * as S from './styles';
import { colors } from '../../../styles/colors';

export function FavoriteButton({ onClick, activeButton }: FavoriteButtonProps) {
  const { favoritesIds } = useFavorites();

  function handleColorButton() {
    return favoritesIds?.includes(activeButton || 0)
      ? colors.red[500]
      : colors.white;
  }

  return (
    <S.Button onClick={onClick} aria-label="Favoritar">
      <FaHeart size={24} color={handleColorButton()} />
    </S.Button>
  );
}
