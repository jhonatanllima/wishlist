import styled from 'styled-components';

import { colors } from '../../../styles/colors';

export const Button = styled.button`
  position: relative;

  width: 3rem;
  height: 4rem;
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
    border-left: 1.5rem solid transparent;
    border-right: 1.6rem solid transparent;
    border-bottom: 0.7rem solid ${colors.white};
  }
`;
