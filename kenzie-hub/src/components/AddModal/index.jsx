import { Container, Header, Form, Teste } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { TechContext } from "../../Providers/TechContext/TechContext";
import { useContext, useState } from "react";

function Modal({ techModal }) {
  const { createTech } = useContext(TechContext);
  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const [load, setLoad] = useState(false);

  const onSubmitFunction = async (data) => {
    setLoad(true);
    await createTech(data, techModal);
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  };

  return (
    <Teste>
      <Container>
        <Header>
          <h4>Cadastrar Tecnologia</h4>
          <button onClick={() => techModal()} className="exit">
            X
          </button>
        </Header>

        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <div className="divContainer">
            <div className="divTitle">
              <span>Nome</span>
              <input placeholder="Nome da tecnologia" {...register("title")} />
              <h6>{errors.title?.message}</h6>
            </div>
          </div>

          <div className="divSelect">
            <span className="divSelectSpan">Selecionar status</span>
            <select {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediario">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>

          <div className="divBtnRegister">
            <button type="submit" disabled={load}>
              {load ? "Carregando..." : "Cadastrar Tecnologia"}
            </button>
          </div>
        </Form>
      </Container>
    </Teste>
  );
}
export default Modal;
