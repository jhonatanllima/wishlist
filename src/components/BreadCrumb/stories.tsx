import { Story, Meta } from '@storybook/react/types-6-0';

import { BreadCrumb } from '.';

export default {
  title: 'BreadCrumb',
  component: BreadCrumb,
} as Meta;

export const Basic: Story = (args) => <BreadCrumb />;
