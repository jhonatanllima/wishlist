import { GetStaticProps } from 'next';

import { ProductProps } from '~/types/services/getProducts';
import { getProducts } from '~/services/functions/getProducts';

import { useFavorites } from '~/hooks/Favorites';

import { BreadCrumb, ProductCard, FavoriteButton } from '~/components';

import * as S from '~/styles/pages/home.styles';

interface HomeProductsProps {
  products: ProductProps[];
}

export default function Home({ products }: HomeProductsProps) {
  const { favorites, setFavorites, favoritesIds } = useFavorites();

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
          {products.map((product: ProductProps) => (
            <ProductCard
              key={product.id}
              price={product.price}
              title={product.title}
              image="/images/svg/illustration.svg"
              buttonLeft={
                <FavoriteButton
                  activeButton={product.id}
                  onClick={() =>
                    !favoritesIds.includes(product.id) &&
                    setFavorites([...favorites, product])
                  }
                />
              }
            />
          ))}
        </S.WrapperProducts>
      </S.Wrapper>
    </S.Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await getProducts();

  return {
    props: { products },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
