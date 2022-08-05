import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #121214;
  width: 100vw;

  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;

  h1 {
    color: #ff577f;
    margin-left: 1rem;
    font-size: 1.5rem;
  }

  button {
    background: #212529;
    border-radius: 4px;
    border: none;
    color: white;
    padding: 0.4rem;
    width: 5rem;
    margin-right: 1rem;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  .description {
    border: 1px solid #212529;
    width: 100vw;
  }

  h2 {
    color: #fff;
  }

  p {
    color: #868e96;
    font-size: 0.8rem;
  }

  h3 {
    color: white;
  }
`;
