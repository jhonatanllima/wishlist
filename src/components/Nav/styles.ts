import styled from 'styled-components';

import { colors } from '~/styles/colors';

export const Container = styled.nav`
  width: 100%;
  height: 100%;
`;

export const MenuItems = styled.ul`
  width: 100%;
  height: auto;
  margin-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  list-style: none;
  font-weight: bold;
  font-size: 1.6rem;
  color: ${colors.white};

  li {
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.5rem;
    }
  }

  @media (max-width: 767px) {
    gap: 1rem;
    flex-direction: column;
    align-items: flex-end;
  }
`;
