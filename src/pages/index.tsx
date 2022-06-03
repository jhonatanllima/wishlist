import { GetStaticProps } from 'next';

import { getProducts } from '~/services/functions/getProducts';

import { ProductProps } from '~/types/services/getProducts';

import { BreadCrumb, ProductCard, FavoriteButton } from '~/components';

import * as S from '~/styles/pages/home.styles';

interface HomeProductsProps {
  products: ProductProps[];
}

export default function Home(products: HomeProductsProps) {
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
          {products.products.map((product: ProductProps) => (
            <ProductCard
              key={product.id}
              price={product.price}
              title={product.title}
              image="/images/svg/illustration.svg"
              buttonLeft={<FavoriteButton />}
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
