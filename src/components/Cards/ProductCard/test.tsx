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

describe('<ProductCard /> ', () => {
  it('should render default component', () => {
    const { container } = renderWithTheme(
      <ProductCard
        {...defaultProps}
        buttonRight={<RemoveFavoriteButton onClick={() => clickButton} />}
      />
    );

    expect(screen.getByText(/title/i)).toBeInTheDocument();
    expect(screen.getByText('R$ 4,00')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('should render with favorite button', () => {
    const { container } = renderWithTheme(
      <ProductCard
        {...defaultProps}
        buttonLeft={
          <FavoriteButton activeButton={1} onClick={() => clickButton} />
        }
      />
    );

    expect(screen.getByLabelText(/favoritar/i)).toBeInTheDocument();
    expect(
      screen.queryByLabelText(/remover favorito/i)
    ).not.toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('should render with unfavorite button', () => {
    const { container } = renderWithTheme(
      <ProductCard
        {...defaultProps}
        buttonRight={<RemoveFavoriteButton onClick={() => clickButton} />}
      />
    );

    expect(screen.queryByLabelText(/favoritar/i)).not.toBeInTheDocument();
    expect(screen.getByLabelText(/remover favorito/i)).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('should render with both buttons', () => {
    const { container } = renderWithTheme(
      <ProductCard
        {...defaultProps}
        buttonRight={<RemoveFavoriteButton onClick={() => clickButton} />}
        buttonLeft={
          <FavoriteButton activeButton={1} onClick={() => clickButton} />
        }
      />
    );

    expect(screen.getByLabelText(/favoritar/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/remover favorito/i)).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
