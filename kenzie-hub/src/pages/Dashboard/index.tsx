import { Header, Container, Main } from "./styles";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../Providers/Register e Login";
import Modal from "../../components/AddModal";
import { BsFillTrashFill } from "react-icons/bs";
import api from "../../services/api";
import { useState } from "react";
import {
  IDataTech,
  TechContext,
} from "../../Providers/TechContext/TechContext";
import { motion } from "framer-motion";
const Dashboard = () => {
  const { user } = useContext(UserContext);
  const { deleteTech, techModal, createTechModal } = useContext(TechContext);
  const [atualizarTech, setatualizarTech] = useState<IDataTech[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const UserID = localStorage.getItem("@USERID");
    if (UserID) {
      api
        .get(`/users/${UserID}`)
        .then((response) => {
          setatualizarTech(response.data.techs);
        })
        .catch(() => {
          localStorage.removeItem("@USERID");
          localStorage.removeItem("@TOKEN");
        });
    } else {
      navigate("/");
    }
  }, [atualizarTech]);

  return (
    <motion.div
      initial={{ opacity: 0.9 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Container>
        <Header>
          <h1>Kenzie Hub</h1>
          <button
            onClick={() => {
              navigate("/");
              localStorage.removeItem("@TOKEN");
              localStorage.removeItem("@USERID");
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

          <div className="headerList">
            <h5>Tecnologias</h5>
            <button className="btnMore" onClick={() => techModal()}>
              +
            </button>
          </div>
          {createTechModal && <Modal techModal={techModal} />}

          <>
            {atualizarTech?.length > 0 && (
              <ul className="containerList">
                {atualizarTech?.map((tech, index) => (
                  <li key={index} className="listTech">
                    <div className="listTechName">
                      <h3>{tech.title}</h3>
                      <h4>{tech.status}</h4>
                    </div>
                    <div className="listTechBtn">
                      <button
                        className="btnTechTrash"
                        onClick={() => deleteTech(tech.id)}
                      >
                        <BsFillTrashFill />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </>
        </Main>
      </Container>
    </motion.div>
  );
};
export default Dashboard;
