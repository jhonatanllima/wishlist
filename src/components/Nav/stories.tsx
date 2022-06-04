import { Story, Meta } from '@storybook/react/types-6-0';

import { IoLocationSharp } from 'react-icons/io5';
import { FaHeart, FaPhoneAlt } from 'react-icons/fa';

import { Nav } from '.';

export default {
  title: 'Nav',
  component: Nav,
} as Meta;

const menuItems = [
  {
    title: 'Cidade: São Paulo',
    icon: <IoLocationSharp />,
  },

  {
    title: 'Central de Atendimento',
    icon: <FaPhoneAlt />,
  },

  {
    title: 'Lista de Desejos',
    icon: <FaHeart />,
    link: '/favoritos',
  },
];

export const Basic: Story = () => <Nav menuItems={menuItems} />;
