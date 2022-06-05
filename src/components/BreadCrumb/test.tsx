import { render, screen } from '@testing-library/react';
import { renderWithTheme } from '~/utils/tests/helpers';

import { BreadCrumb } from '.';

const breadCrumbItems = [
  {
    title: 'Home',
    link: '/',
  },
];

const multiplesBreadCrumbItems = [
  {
    title: 'Home',
    separator: '>',
    link: '/',
  },

  {
    title: 'Favoritos',
    link: '/favoritos',
  },
];

describe('< BreadCrumb /> ', () => {
  it('should render correctly.', () => {
    const { container } = renderWithTheme(
      <BreadCrumb breadCrumbItems={breadCrumbItems} />
    );

    expect(screen.getByText(/Home/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly multiple breadcrumbs.', () => {
    const { container } = render(
      <BreadCrumb breadCrumbItems={multiplesBreadCrumbItems} />
    );

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Favoritos/i)).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
