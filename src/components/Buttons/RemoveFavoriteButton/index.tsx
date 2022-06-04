import { AiOutlineCloseCircle } from 'react-icons/ai';

import * as S from './styles';
import { colors } from '~/styles/colors';

import { RemoveFavoriteButtonProps } from '~/types/components/RemoveFavoriteButton';

export function RemoveFavoriteButton({ onClick }: RemoveFavoriteButtonProps) {
  return (
    <S.Button onClick={onClick} aria-label="Remover favorito">
      <AiOutlineCloseCircle size={25} color={colors.black} />
    </S.Button>
  );
}
