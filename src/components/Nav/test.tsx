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

// type TestElement = Document | Element | Window | Node | Function;

// function hasInputValue(e: TestElement, inputValue: string) {
//   return screen.getByDisplayValue(inputValue) === e;
// }

describe('<Nav /> ', () => {
  it('should render the correctly', () => {
    const { container } = renderWithTheme(<Nav menuItems={menuItems} />);

    expect(screen.getByText(/Cidade: São Paulo/i)).toBeInTheDocument();
    expect(screen.getByText(/Central de atendimento/i)).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /lista de desejos/i })
    ).toBeInTheDocument();

    expect(screen.getByPlaceholderText('Buscar')).toBeInTheDocument();

    expect(screen.getByLabelText('Campo de busca')).toBeInTheDocument();

    // fireEvent.change(input, { target: { value: '123' } });
    // expect(hasInputValue(input, '123')).toBe(true);

    expect(container).toMatchSnapshot();
  });
});
