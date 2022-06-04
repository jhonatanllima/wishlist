import { Story, Meta } from '@storybook/react/types-6-0';

import { ProductCard } from '.';

export default {
  title: 'ProductCard',
  alt: 'produto de bebe',
  price: 'R$ 4,00',
  image: '/images/svg/illustration.svg',
  component: ProductCard,
} as Meta;

export const Product: Story = (args) => (
  <ProductCard
    alt={args.title}
    title={args.alt}
    price={args.price}
    image={args.image}
  />
);
