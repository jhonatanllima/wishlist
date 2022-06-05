import { screen } from '@testing-library/react';

import { renderWithTheme } from '~/utils/tests/helpers';

import { FavoriteButton } from '.';

const clickFavoriteButton = jest.fn();

describe('< FavoriteButton /> ', () => {
  it('should render the favorite Button', () => {
    const { container } = renderWithTheme(
      <FavoriteButton onClick={() => clickFavoriteButton} activeButton={1} />
    );

    expect(screen.getByRole('button')).toBeInTheDocument();

    expect(screen.getByLabelText('Favoritar')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
