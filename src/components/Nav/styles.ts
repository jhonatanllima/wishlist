import styled from 'styled-components';

import { colors } from '~/styles/colors';

export const Container = styled.nav`
  width: 100%;
  height: 100%;

  input {
    width: 100%;
    border: none;
    padding: 1rem;
    height: 3.5rem;
    border-radius: 2px;
    margin-top: 1.5rem;
  }

  a {
    :hover {
      cursor: pointer;
    }
  }
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

  a {
    position: relative;

    display: flex;
    align-items: center;

    font-style: none;
    font-size: 1.6rem;
    text-decoration: none;
    color: ${colors.white};

    svg {
      margin-right: 0.5rem;
    }

    span {
      top: -1rem;
      left: -1rem;
      position: absolute;

      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      text-align: center;
      font-size: 0.9rem;
      background: ${colors.red[500]};

      p {
        margin-left: -0.1rem;
      }
    }
  }

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
