import Link from 'next/link';
import { ReactNode } from 'react';

import * as S from './styles';

type menuItems = {
  link?: string;
  title: string;
  icon: ReactNode;
};

interface NavProps {
  menuItems: menuItems[];
}

export function Nav({ menuItems }: NavProps) {
  return (
    <S.Container>
      <S.MenuItems>
        {menuItems.map((itemMenu, index) => (
          <>
            {itemMenu.link ? (
              <a key={index}>
                {itemMenu.icon}
                <Link href={itemMenu.link}>{itemMenu.title}</Link>
              </a>
            ) : (
              <li key={index}>
                {itemMenu.icon}
                {itemMenu.title}
              </li>
            )}
          </>
        ))}
      </S.MenuItems>

      <input
        type="text"
        placeholder="Buscar"
        onChange={(e) => console.log(e.target.value)}
      />
    </S.Container>
  );
}
