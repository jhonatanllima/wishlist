import { Story, Meta } from '@storybook/react/types-6-0';

import { Nav } from '.';

export default {
  title: 'Nav',
  component: Nav,
} as Meta;

export const Basic: Story = (args) => <Nav />;
