import { useFavorites } from '~/hooks/Favorites';

import { BreadCrumb, ProductCard, RemoveFavoriteButton } from '~/components';

import * as S from '~/styles/pages/favorites.styles';

export default function Favorites() {
  const { favorites } = useFavorites();

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
              buttonRight={<RemoveFavoriteButton />}
            />
          ))}
        </S.WrapperProducts>
      </S.Wrapper>
    </S.Container>
  );
}
