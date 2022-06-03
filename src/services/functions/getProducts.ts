import { api } from '~/services/config';

interface ProductsProps {
  id: number;
  title: string;
  price: string;
  image: string;
  currencyId?: string;
  currencyFormat?: string;
}

export async function getProducts(): Promise<ProductsProps[]> {
  try {
    const {
      data: { products },
    } = await api.get<{ products: ProductsProps[] }>(
      `/66063904-d43c-49ed-9329-d69ad44b885e`
    );

    const formattedProducts = products.map((product) => {
      return {
        id: product.id,
        title: product.title,
        image: product.image,
        price: `${product.currencyFormat} - ${Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: product.currencyId,
        }).format(Number(product.price))}`,
      };
    });

    return formattedProducts;
  } catch (error) {
    throw new Error('Erro ao listar os produtos');
  }
}
