import { screen } from '@testing-library/react';
import { renderWithTheme } from '~/utils/tests/helpers';

import { RemoveFavoriteButton } from '.';

const clickButton = jest.fn();

describe('< RemoveFavoriteButton /> ', () => {
  it('should render the correctly', () => {
    const { container } = renderWithTheme(
      <RemoveFavoriteButton onClick={() => clickButton} />
    );

    expect(screen.getByRole('button')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
