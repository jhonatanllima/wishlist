import styled from 'styled-components';

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
  align-items: flex-start;
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
