import Link from 'next/link';
import { ReactNode, Fragment } from 'react';

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
          <Fragment key={index}>
            {itemMenu.link ? (
              <Link href={itemMenu.link}>
                <a>
                  {itemMenu.icon}
                  {itemMenu.title}
                </a>
              </Link>
            ) : (
              <li>
                {itemMenu.icon}
                {itemMenu.title}
              </li>
            )}
          </Fragment>
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
