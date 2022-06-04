import { ReactNode } from 'react';

export interface ProductCardProps {
  alt: string;
  image: string;
  title: string;
  price: string;
  buttonLeft?: ReactNode;
  buttonRight?: ReactNode;
}
