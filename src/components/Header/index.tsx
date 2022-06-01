import * as S from './styles';

import { Nav } from '~/components';

export function Header() {
  return (
    <S.Container>
      <S.Wrapper>
        <h1>MagaNets</h1>

        <Nav />
      </S.Wrapper>
    </S.Container>
  );
}
