import styled from 'styled-components';

import { colors } from '~/styles/colors';

export const Container = styled.header`
  width: 100%;
  height: 15rem;
  border-top: 0.8rem solid ${colors.purple[800]};

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${colors.purple[500]};
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem 1rem;
  max-width: 140rem;

  gap: 10rem;
  display: flex;
  justify-content: center;

  h1 {
    font-size: 3rem;
    color: ${colors.white};
  }
`;

export const Nav = styled.nav`
  width: 100%;
  height: 100%;

  background: blue;
`;
