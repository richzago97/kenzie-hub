import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #121214;
  width: 100vw;
  overflow-x: hidden;
  height: 100vh;
  box-sizing: border-box;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  width: 300px;
  padding: 1rem;

  h1 {
    color: #ff577f;
    margin-left: 1.7rem;
    font-size: 1.2rem;
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

export const DivDescr = styled.div`
  margin-top: 2rem;
  background-color: #212529;
  .titleConta {
    color: white;
    font-size: 1rem;
  }
  .titleDescrp {
    color: #868e96;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #212529;
  align-items: center;
  max-width: 400px;
  width: 90vw;

  .divContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 0.5rem;
  }

  .divTitle {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    color: white;
  }

  .divSelect {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 0.5rem;
  }

  .divSelectSpan {
    color: white;
  }

  h6 {
    color: red;
    margin: 0;
  }
  input {
    border: none;
    background: #343b41;
    border: 0.973988px solid #343b41;
    border-radius: 3.19812px;
    padding: 0.7rem;
    width: 15rem;
    margin-top: 1rem;
  }

  select {
    background-color: #343b41;
    border: none;
    border: 1.2182px solid #343b41;
    border-radius: 4px;
    color: white;

    width: 16.6rem;
    height: 2.6rem;
  }
  option {
    background-color: #343b41;
    border: none;
    border: 1.2182px solid #343b41;
    border-radius: 4px;
    color: white;
  }

  .divBtnRegister {
    height: 5rem;
  }
  button {
    border: none;
    height: 2rem;
    width: 16rem;
    background: #59323f;
    border: 1.2182px solid #59323f;
    border-radius: 4px;
    color: white;
    margin-top: 1rem;
  }

  button:hover {
    background: #ff427f;
  }
`;
