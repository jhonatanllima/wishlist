import { Story, Meta } from '@storybook/react/types-6-0';

import { ProductCard } from '.';

export default {
  title: 'ProductCard',
  component: ProductCard,
} as Meta;

export const Basic: Story = (args) => <ProductCard />;
