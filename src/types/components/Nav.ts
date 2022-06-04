import { ReactNode } from 'react';

type menuItems = {
  link?: string;
  title: string;
  icon: ReactNode;
};

export interface NavProps {
  menuItems: menuItems[];
}
