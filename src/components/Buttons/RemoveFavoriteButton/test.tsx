import { render, screen } from '@testing-library/react';

import { RemoveFavoriteButton } from '.';

describe('< RemoveFavoriteButton /> ', () => {
  it('should render the heading', () => {
    const { container } = render(<RemoveFavoriteButton />);

    expect(
      screen.getByRole('heading', {
        name: /RemoveFavoriteButton/i,
      })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
