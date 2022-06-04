import { screen } from '@testing-library/react';

import { IoLocationSharp } from 'react-icons/io5';
import { FaHeart, FaPhoneAlt } from 'react-icons/fa';

import { renderWithTheme } from '~/utils/tests/helpers';

import { Nav } from '.';

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

describe('<Nav /> ', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Nav menuItems={menuItems} />);

    expect(screen.getByRole('nav')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
