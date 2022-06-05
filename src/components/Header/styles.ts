import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const Container = styled.header`
  width: 100%;
  min-height: 15rem;
  border-top: 0.8rem solid ${colors.purple[800]};

  display: flex;
  justify-content: center;

  background: ${colors.purple[500]};
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 3rem 1rem;
  max-width: 140rem;

  gap: 10rem;
  display: flex;
  justify-content: center;

  h1 {
    font-size: 3rem;
    color: ${colors.white};
  }

  @media (max-width: 767px) {
    gap: 1rem;
    flex-direction: column;
  }
`;

export const WrapperLogo = styled.div`
  width: 100%;
  max-width: 20rem;
  margin-top: -3rem;

  gap: 0.5rem;
  display: flex;
  flex-direction: column;

  word-break: break-all;

  a {
    svg {
      :hover {
        cursor: pointer;
      }
    }
  }
`;
