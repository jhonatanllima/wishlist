import * as S from '~/styles/pages/home.styles';

import { BreadCrumb } from '~/components';

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
      </S.Wrapper>
    </S.Container>
  );
}
