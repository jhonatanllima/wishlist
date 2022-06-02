import styled from 'styled-components';

import { colors } from '~/styles/colors';

export const Container = styled.button`
  position: relative;

  width: 4rem;
  height: 5rem;
  border: none;
  border-radius: 0.3rem;

  background: ${colors.black};

  :hover {
    cursor: pointer;
  }

  :after {
    left: 0;
    bottom: 0;
    position: absolute;

    width: 0;
    height: 0;

    content: '';
    border-left: 2rem solid transparent;
    border-right: 2.1rem solid transparent;
    border-bottom: 1rem solid ${colors.white};
  }
`;
