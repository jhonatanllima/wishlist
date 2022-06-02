import * as S from '~/styles/pages/home.styles';

import {
  BreadCrumb,
  ProductCard,
  FavoriteButton,
  RemoveFavoriteButton,
} from '~/components';

export default function Home() {
  const mockProducts = Array.from({ length: 12 });

  const breadCrumbItems = [
    {
      title: 'Home',
      link: '/',
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
              price="R$ 4,00"
              title="Roupa de bebê"
              image="/images/svg/illustration.svg"
              buttonLeft={<FavoriteButton />}
            />
          ))}
        </S.WrapperProducts>
      </S.Wrapper>
    </S.Container>
  );
}
