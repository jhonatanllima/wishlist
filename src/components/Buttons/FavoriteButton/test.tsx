import { render, screen } from '@testing-library/react';

import { FavoriteButton } from '.';

describe('< FavoriteButton /> ', () => {
  it('should render the heading', () => {
    const { container } = render(<FavoriteButton />);

    expect(
      screen.getByRole('heading', {
        name: /FavoriteButton/i,
      })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
