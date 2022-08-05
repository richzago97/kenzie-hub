import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow-x: hidden;
  width: 100vw;
  background-color: #121214;

  h1 {
    color: #ff577f;
    font-size: 1.5rem;
  }

  h2 {
    color: #ffff;
    margin: 0;
  }

  span {
    color: #ffff;
    font-size: 0.8rem;
  }

  h6 {
    color: #868e96;
  }

  .login {
    margin: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: #212529;
  width: 82vw;
  max-width: 300px;
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 3.20867px;
  padding: 1rem 0;
  gap: 10px;

  .divContainer {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .divTitle {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 3px;
    gap: 10px;
  }

  .divPassword {
    position: relative;
    svg {
      position: absolute;
      top: 7px;
      right: 8px;
      color: white;
    }
  }
  p {
    color: white;
  }
  input {
    border: none;
    background: #343b41;
    border: 0.9772px solid #f8f9fa;
    border-radius: 3.20867px;
    height: 1.7rem;
    width: 14rem;
  }

  .divBtns {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .btnEntrar {
    background: #ff577f;
    border: 1.2182px solid #ff577f;
    border-radius: 4.06066px;
    border: none;
    color: white;
    height: 2.5rem;
    width: 15rem;
    margin-top: 1rem;
  }

  .btnCadastre {
    border: none;
    background: #868e96;
    border: 1.2182px solid #868e96;
    border-radius: 4px;
    color: white;
    height: 2.5rem;
    width: 15rem;
  }
`;
