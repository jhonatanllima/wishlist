import { ReactNode } from 'react';

export interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  buttonLeft?: ReactNode;
  buttonRight?: ReactNode;
}
