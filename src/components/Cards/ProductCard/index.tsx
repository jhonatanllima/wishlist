import Image from 'next/image';
import { ReactNode } from 'react';

import * as S from './styles';

interface ProductCardProps {
  image: string;
  title: string;
  price: string;

  buttonLeft?: ReactNode;
  buttonRight?: ReactNode;
}

export function ProductCard({
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

      <Image src={image} width={300} height={300} />
      <strong>{title}</strong>
      <span>{price}</span>
    </S.Container>
  );
}
