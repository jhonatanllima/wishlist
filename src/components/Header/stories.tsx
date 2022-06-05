import { Story, Meta } from '@storybook/react/types-6-0';

import { Header } from './index';

export default {
  title: 'Header',
  component: Header,
} as Meta;

export const Default: Story = (args) => <Header {...args} />;

Default.args = {
  logo: 'MagaNets',
};
