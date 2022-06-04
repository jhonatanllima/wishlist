import styled from 'styled-components';

import { colors } from '~/styles/colors';

export const Container = styled.div`
  position: relative;

  width: 15.5rem;
  padding: 1rem;
  min-height: 25rem;
  border-radius: 0.3rem;
  border: 1px solid ${colors.gray[500]};

  display: flex;
  align-items: center;
  flex-direction: column;

  background: ${colors.white};
  box-shadow: 0px 1px 5px 0px rgba(143, 143, 143, 0.6);
  -moz-box-shadow: 0px 1px 5px 0px rgba(143, 143, 143, 0.6);
  -webkit-box-shadow: 0px 1px 5px 0px rgba(143, 143, 143, 0.6);

  img {
    object-fit: cover;
  }

  strong {
    margin-top: 1rem;

    text-align: center;
    font-size: 1.3rem;
  }

  span {
    margin-top: 2.5rem;

    font-weight: bold;
    font-size: 1.3rem;
    color: ${colors.yellow[500]};
  }
`;

export const WrapperButtonLeft = styled.div`
  top: -0.3rem;
  left: 0.3rem;
  z-index: 5;
  position: absolute;
`;

export const WrapperButtonRight = styled.div`
  top: 0;
  right: 0;
  z-index: 5;
  position: absolute;
`;
