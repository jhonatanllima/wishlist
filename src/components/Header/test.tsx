import { screen } from '@testing-library/react';
import { renderWithTheme } from '~/utils/tests/helpers';

import { Header } from '.';

describe('<Header />', () => {
  it('should render the correctly', () => {
    const { container } = renderWithTheme(<Header logo="logo" />);

    expect(screen.getByRole('heading', { name: /logo/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/seta para a esquerda/i)).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
