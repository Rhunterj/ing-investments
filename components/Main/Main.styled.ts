import styled from 'styled-components';

export const Main = styled.main`
  min-height: 100vh;
  padding: 1rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1, h2 {
    color: rgb(255, 98, 0);
  }

  h2 {
    margin-top: 0;
  }

  a {
    text-decoration: underline;
    color: rgb(0, 0, 238);
  }
`