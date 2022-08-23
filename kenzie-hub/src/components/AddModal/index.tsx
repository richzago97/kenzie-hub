import { Container, Header, Form, Teste } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  IDataTech,
  TechContext,
} from "../../Providers/TechContext/TechContext";
import { useContext, useState } from "react";

interface ITechModalProps {
  techModal: () => void;
}

function Modal({ techModal }: ITechModalProps) {
  const { createTech } = useContext(TechContext);
  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataTech>({
    resolver: yupResolver(formSchema),
  });

  const [load, setLoad] = useState(false);

  const onSubmitFunction = (data: IDataTech) => {
    setLoad(true);
    createTech(data);
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
