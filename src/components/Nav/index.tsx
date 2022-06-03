import Link from 'next/link';
import { Fragment } from 'react';

import { useSearch } from '~/hooks/Search';

import * as S from './styles';

import { NavProps } from '~/types/components/Nav';

export function Nav({ menuItems }: NavProps) {
  const { setSearch } = useSearch();

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
        onChange={(e) => setSearch(e.target.value)}
      />
    </S.Container>
  );
}
