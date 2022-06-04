import { screen } from '@testing-library/react';
import { FavoriteButton, RemoveFavoriteButton } from '~/components/Buttons';
import { renderWithTheme } from '~/utils/tests/helpers';

const clickButton = jest.fn();

import { ProductCard } from '.';

const defaultProps = {
  title: 'title',
  price: 'R$ 4,00',
  alt: 'alt image',
  image: '/images/svg/illustration.svg',
};

describe('< ProductCard /> ', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(
      <ProductCard
        {...defaultProps}
        buttonLeft={
          <FavoriteButton activeButton={1} onClick={() => clickButton} />
        }
        buttonRight={<RemoveFavoriteButton onClick={() => clickButton} />}
      />
    );

    expect(screen.getByText(/title/i)).toBeInTheDocument();
    expect(screen.getByText('R$ 4,00')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
