import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';

import { ProductProps } from '~/types/services/getProducts';
import { getProducts } from '~/services/functions/getProducts';

import { useSearch } from '~/hooks/Search';
import { useFavorites } from '~/hooks/Favorites';

import { normalizeFilterOfSearch } from '~/utils/normalizeFilterOfSearch';

import { BreadCrumb, ProductCard, FavoriteButton } from '~/components';

import * as S from '~/styles/pages/home.styles';

interface HomeProductsProps {
  products: ProductProps[];
}

export default function Home(props: HomeProductsProps) {
  const { search } = useSearch();
  const { favorites, setFavorites, favoritesIds } = useFavorites();

  const [products, setProducts] = useState<ProductProps[]>(props.products);

  const breadCrumbItems = [
    {
      title: 'Home',
      link: '/',
    },
  ];

  useEffect(() => {
    setProducts(() => {
      if (!search) {
        return props.products;
      }

      const filteredProducts = props.products.filter((product) =>
        normalizeFilterOfSearch(product.title).includes(
          normalizeFilterOfSearch(search)
        )
      );

      return filteredProducts;
    });
  }, [search, props.products]);

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
