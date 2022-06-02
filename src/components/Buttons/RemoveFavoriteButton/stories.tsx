import { Story, Meta } from '@storybook/react/types-6-0';

import { RemoveFavoriteButton } from '.';

export default {
  title: 'RemoveFavoriteButton',
  component: RemoveFavoriteButton,
} as Meta;

export const Basic: Story = (args) => <RemoveFavoriteButton />;
