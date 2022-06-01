import styled from 'styled-components';

import { colors } from '~/styles/colors';

export const Container = styled.div`
  gap: 1rem;
  display: flex;
  align-items: center;

  a {
    gap: 1rem;
    display: flex;
    align-items: center;

    text-decoration: none;
    color: ${colors.black};
    text-transform: capitalize;
  }

  strong {
    font-size: 2rem;
    text-transform: capitalize;

    text-decoration: none;
  }
`;
