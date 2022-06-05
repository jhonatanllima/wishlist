import { Story, Meta } from '@storybook/react/types-6-0';

import { ProductCard } from '.';

export default {
  title: 'ProductCard',
  component: ProductCard,
} as Meta;

export const Default: Story = (args) => <ProductCard {...args} />;

Default.args = {
  alt: 'alternativeText',
  image: '/images/svg/illustration.svg',
  title: 'Título',
  price: 'R$ 4,00',
  width: 300,
  height: 300,
};
