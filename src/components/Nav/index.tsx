import Link from 'next/link';
import { Fragment } from 'react';

import { useSearch } from '../../hooks/Search';
import { useFavorites } from '../../hooks/Favorites';

import * as S from './styles';

import { NavProps } from '~/types/components/Nav';

export function Nav({ menuItems }: NavProps) {
  const { setSearch } = useSearch();
  const { favorites } = useFavorites();

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

                  <span>
                    <p>{favorites?.length}</p>
                  </span>
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
        aria-label="Campo de busca"
        onChange={(e) => setSearch(e.target.value)}
      />
    </S.Container>
  );
}
