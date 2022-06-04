import styled from 'styled-components';

import { colors } from '~/styles/colors';

export const Container = styled.main`
  width: 100%;
  min-height: calc(100vh - 15rem);

  display: flex;

  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 2rem 1rem;
  max-width: 140rem;

  gap: 2rem;
  display: flex;
  flex-direction: column;
`;

export const WrapperProducts = styled.div`
  width: 100%;
  height: auto;

  gap: 2rem;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    align-items: center;
    justify-content: center;
  }
`;

export const WrapperErrors = styled.div`
  gap: 0.5rem;
  display: flex;
  flex-direction: column;

  a {
    margin: 0 0.5rem;

    font-weight: 900;
    text-decoration: none;
    text-transform: uppercase;
    color: ${colors.purple[500]};
  }
`;
