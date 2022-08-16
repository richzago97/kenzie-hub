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
    cursor: pointer;
  }
  button:hover {
    background-color: #f8f9fa;
    color: black;
    transition: 1s;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  .description {
    border: 1px solid #212529;
    width: 100vw;
  }
  .headerList {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 8rem;
  }

  .container {
    display: flex;
    width: 95vw;
    max-width: 400px;

    background: #212529;
    border-radius: 4px;

    box-sizing: border-box;
  }

  .containerList {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0;
    width: 90vw;
    max-width: 800px;
    margin: 0 auto;
    background: #212529;
    box-sizing: border-box;
    padding-top: 1rem;
  }

  .listTech {
    background: #121214;
    border-radius: 4px;
    margin-bottom: 1rem;
    gap: 1rem;
    width: 90%;

    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 5px;
  }

  .listTech:hover {
    background: #343b41;
    border-radius: 4px;
    transition: 1s;
  }

  .listTechName {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-left: 1rem;
  }

  .listTechBtn {
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
  }

  .btnTechTrash {
    border: none;
    background-color: transparent;
    color: white;
    cursor: pointer;
  }

  h2,
  h3,
  h5 {
    color: #fff;
  }
  h4 {
    color: #868e96;
    font-weight: 400;
  }
  p {
    color: #868e96;
    font-size: 0.8rem;
  }

  .btnMore {
    border: none;
    background: #212529;
    color: white;
    font-size: 1.5rem;
    font-weight: 600px;
    border-radius: 4px;
    cursor: pointer;
  }
`;
