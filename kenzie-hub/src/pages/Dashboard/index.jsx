import { Header, Container, Main } from "../Dashboard/styles";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";

const Dashboard = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const id = localStorage.getItem("@USERID");
    api
      .get(`/users/${id}`)
      .then((response) => setUser(response.data))
      .catch((err) => console.log(err));
  }, []);
  let navigate = useNavigate();
  return (
    <Container>
      <Header>
        <h1>Kenzie Hub</h1>
        <button
          onClick={() => {
            navigate("/");
            localStorage.removeItem("@TOKEN");
          }}
        >
          Sair
        </button>
      </Header>

      <Main>
        <div className="description">
          <h2>Olá, {user.name}</h2>
          <p>{user.course_module}</p>
        </div>

        <div className="moreInfo">
          <h3>Que pena! estamos em desenvolvimento </h3>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </div>
      </Main>
    </Container>
  );
};
export default Dashboard;
