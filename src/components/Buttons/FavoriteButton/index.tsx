import { useState } from 'react';

import { FaHeart } from 'react-icons/fa';

import * as S from './styles';
import { colors } from '~/styles/colors';

interface FavoriteButtonProps {
  onClick?: () => void;
}

export function FavoriteButton({ onClick }: FavoriteButtonProps) {
  const [activeFavorite, setActiveFavorite] = useState<boolean>(false);

  return (
    <S.Button onClick={() => setActiveFavorite(!activeFavorite)}>
      <FaHeart
        size={24}
        color={activeFavorite ? colors.red[500] : colors.white}
      />
    </S.Button>
  );
}
