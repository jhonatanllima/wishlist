import * as S from '~/styles/pages/home.styles';

import { BreadCrumb, FavoriteButton } from '~/components';

export default function Home() {
  const breadCrumbItems = [
    {
      title: 'Home',
      link: '/',
    },
  ];

  return (
    <S.Container>
      <S.Wrapper>
        <BreadCrumb breadCrumbItems={breadCrumbItems} />
        <h1>Home</h1>

        <FavoriteButton />
      </S.Wrapper>
    </S.Container>
  );
}
