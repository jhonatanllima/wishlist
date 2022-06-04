import { Story, Meta } from '@storybook/react/types-6-0';

import { ProductCard } from '.';

export default {
  title: 'ProductCard',
  component: ProductCard,
} as Meta;

export const Basic: Story = (args) => (
  <ProductCard
    alt="produto de bebe"
    title="produto de bebe"
    price="R$ 4,00"
    image="/images/svg/illustration.svg"
  />
);
