import * as S from '~/styles/pages/favorites.styles';

import { BreadCrumb } from '~/components';

export default function Favorites() {
  const breadCrumbItems = [
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

  return (
    <S.Container>
      <S.Wrapper>
        <BreadCrumb breadCrumbItems={breadCrumbItems} />

        <h1>Favoritos</h1>
      </S.Wrapper>
    </S.Container>
  );
}
