import Link from 'next/link';
import { useEffect, useState } from 'react';

import { useSearch } from '~/hooks/Search';
import { useFavorites } from '~/hooks/Favorites';
import { normalizeFilterOfSearch } from '~/utils/normalizeFilterOfSearch';
import { BreadCrumb, ProductCard, RemoveFavoriteButton } from '~/components';
import * as S from '~/styles/pages/favorites.styles';

export default function Favorites() {
  const { search } = useSearch();
  const { favorites, handleRemoveFavorite } = useFavorites();

  const [productsFavorite, setProductsFavorite] = useState(favorites);

  const breadCrumbItems = [
    {
      title: 'Home',
      separator: '>',
      link: '/',
    },

    {
      title: 'Favoritos',
      link: '/favoritos',
    },
  ];

  useEffect(() => {
    setProductsFavorite(() => {
      if (!search) {
        return favorites;
      }

      const filteredProductsFavorite = productsFavorite.filter((favorite) =>
        normalizeFilterOfSearch(favorite.title).includes(
          normalizeFilterOfSearch(search)
        )
      );

      return filteredProductsFavorite;
    });
  }, [search, favorites]);

  return (
    <S.Container>
      <S.Wrapper>
        <BreadCrumb breadCrumbItems={breadCrumbItems} />

        <S.WrapperProducts>
          {productsFavorite.map((favorite) => (
            <ProductCard
              key={favorite.id}
              alt={favorite.title}
              price={favorite.price}
              title={favorite.title}
              // image={favorite.image}
              image="/images/svg/illustration.svg"
              buttonRight={
                <RemoveFavoriteButton
                  onClick={() => handleRemoveFavorite(favorite.id)}
                />
              }
            />
          ))}

          {!favorites?.length && (
            <S.WrapperErrors>
              <h2>Nenhum item ainda em sua lista de desejo! {':('}</h2>

              <h3>
                Clique
                <Link href="/">
                  <a>aqui</a>
                </Link>
                e escolha seus favoritos!
              </h3>
            </S.WrapperErrors>
          )}
        </S.WrapperProducts>
      </S.Wrapper>
    </S.Container>
  );
}
