import { render, screen } from '@testing-library/react';

import { FaHeart, FaPhoneAlt } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

import { Nav } from '.';

describe('< Nav /> ', () => {
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

  it('should render the heading', () => {
    const { container } = render(<Nav menuItems={menuItems} />);

    expect(
      screen.getByRole('heading', {
        name: /Nav/i,
      })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
