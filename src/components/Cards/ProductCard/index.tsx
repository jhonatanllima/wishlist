import Image from 'next/image';

import * as S from './styles';

import { ProductCardProps } from '../../../types/components/ProductCard';

export function ProductCard({
  alt,
  image,
  title,
  price,
  buttonLeft,
  buttonRight,
}: ProductCardProps) {
  return (
    <S.Container>
      {buttonLeft && <S.WrapperButtonLeft>{buttonLeft}</S.WrapperButtonLeft>}

      {buttonRight && (
        <S.WrapperButtonRight>{buttonRight}</S.WrapperButtonRight>
      )}

      <Image src={image} width={300} height={300} alt={alt} />

      <strong>{title}</strong>

      <span>{price}</span>
    </S.Container>
  );
}
