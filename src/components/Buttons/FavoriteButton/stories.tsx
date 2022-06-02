import { Story, Meta } from '@storybook/react/types-6-0';

import { FavoriteButton } from '.';

export default {
  title: 'FavoriteButton',
  component: FavoriteButton,
} as Meta;

export const Basic: Story = (args) => <FavoriteButton />;
