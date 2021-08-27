import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
  height: 13.3rem;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  justify-content: space-between;
  display: flex;
  align-items: center;

  button {
    font-size: 1rem;
    border: 0;
    padding: 0 2rem;

    background: var(--blue-light);
    color: var(--background);
    height: 3rem;

    border-radius: 0.25rem;

    &:hover {
      filter: brightness(0.9);
    }
  }

  img {
    width: 10.75rem;
    height: 2.5rem;
  }
`;
