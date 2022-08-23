import styled from "styled-components";

export const Teste = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #00000080;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Container = styled.div`
  padding: 1rem;
  margin-top: 11.5rem;
`;

export const Header = styled.div`
  background: #343b41;
  border-radius: 3px;

  width: 93vw;
  max-width: 400px;
  height: 3rem;
  gap: 4rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  .exit {
    border: none;
    color: #868e96;
    background: transparent;
  }

  h4 {
    color: white;
    font-weight: bolder;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 0 1.5rem;
  background: #212529;
  align-items: center;
  gap: 10px;

  .divContainer {
    display: flex;
    flex-direction: column;
    height: 50px;
  }

  .divTitle {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 1rem;
    gap: 1rem;
  }

  .divSelect {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding-top: 2rem;
    gap: 1rem;
  }

  span {
    color: #fff;
    font-size: 0.7rem;
  }

  input {
    background: #343b41;
    border-radius: 4px;
    border: 1px solid #f8f9fa;
    color: white;
    height: 2rem;
    width: 16rem;
    z-index: 9999;
  }

  select {
    background: #343b41;
    border-radius: 4px;
    border: 1px solid #f8f9fa;
    color: white;
    width: 16.5rem;
    height: 2rem;
  }
  button {
    color: white;
    background: #ff577f;

    border: none;
    border: 1.2182px solid #ff577f;
    border-radius: 4.06066px;

    font-weight: bolder;
    height: 2rem;
    width: 16rem;

    margin-top: 1rem;

    cursor: pointer;
  }

  button:hover {
    cursor: pointer;
    background-color: #e2305b;
    transition: 1s;
  }
`;
