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
    <S.Container onClick={() => setActiveFavorite(!activeFavorite)}>
      <FaHeart
        color={activeFavorite ? colors.red[500] : colors.white}
        size={24}
      />
    </S.Container>
  );
}
