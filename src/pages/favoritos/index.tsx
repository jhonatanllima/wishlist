import Link from 'next/link';

import { useFavorites } from '~/hooks/Favorites';

import { BreadCrumb, ProductCard, RemoveFavoriteButton } from '~/components';

import * as S from '~/styles/pages/favorites.styles';

export default function Favorites() {
  const { favorites, setItemToRemoveFavorite } = useFavorites();

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

  return (
    <S.Container>
      <S.Wrapper>
        <BreadCrumb breadCrumbItems={breadCrumbItems} />

        <S.WrapperProducts>
          {favorites.map((favorite) => (
            <ProductCard
              key={favorite.id}
              price={favorite.price}
              title={favorite.title}
              image="/images/svg/illustration.svg"
              buttonRight={
                <RemoveFavoriteButton
                  onClick={() => setItemToRemoveFavorite(favorite.id)}
                />
              }
            />
          ))}

          {!favorites.length && (
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
