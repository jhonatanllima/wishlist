import { BreadCrumb, ProductCard, RemoveFavoriteButton } from '~/components';

import * as S from '~/styles/pages/favorites.styles';

export default function Favorites() {
  const mockProducts = Array.from({ length: 12 });

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
          {mockProducts.map((_, index) => (
            <ProductCard
              key={index}
              price="R$ 400,00"
              title="Roupa de Adulto"
              image="/images/svg/illustration.svg"
              buttonRight={<RemoveFavoriteButton />}
            />
          ))}
        </S.WrapperProducts>
      </S.Wrapper>
    </S.Container>
  );
}
