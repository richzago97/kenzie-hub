import { Header, Form, Container, DivDescr } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { IDataRegister, UserContext } from "../../Providers/Register e Login";
import { motion } from "framer-motion";

const Registro = () => {
  const { userRegister } = useContext(UserContext);
  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup
      .string()
      .required("E-mail obrigatório")
      .email("E-mail inválido")
      .matches(/\S+@\S+\.\S+/),
    password: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/,
        "Deve conter 8 caraceteres, uma maiúscula, uma minúscula, um número e um caracter especial"
      ),
    confirmePassword: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref(`password`)], `As senhas devem ser as mesmas`),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataRegister>({
    resolver: yupResolver(formSchema),
  });

  const navigate = useNavigate();

  const onSubmitFunction =  (data: IDataRegister) => {
     userRegister(data);
  };

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
          <button onClick={() => navigate("/")}>Voltar</button>
        </Header>
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <DivDescr>
            <h2 className="titleConta">Crie sua conta</h2>
            <p className="titleDescrp">Rapido e grátis, vamos nessa</p>
          </DivDescr>
          <div className="divContainer">
            <div className="divTitle">
              <span>Nome</span>
              <input placeholder="Digite aqui seu nome" {...register("name")} />
            </div>
            <h6>{errors.name?.message}</h6>
          </div>

          <div className="divContainer">
            <div className="divTitle">
              <span>Email</span>
              <input
                placeholder="Digite aqui seu email"
                {...register("email")}
              />
            </div>
            <h6>{errors.email?.message}</h6>
          </div>

          <div className="divContainer">
            <div className="divTitle">
              <span>Senha</span>

              <input
                type="password"
                placeholder="Digite aqui sua senha"
                {...register("password")}
              />
            </div>
            <h6>{errors.password?.message}</h6>
          </div>

          <div className="divContainer">
            <div className="divTitle">
              <span>Confirmar Senha</span>
              <input
                type="password"
                placeholder="Digite novamente sua senha"
                {...register("confirmePassword")}
              />
            </div>
            <h6>{errors.confirmePassword?.message}</h6>
          </div>

          <div className="divContainer">
            <div className="divTitle">
              <span>Bio</span>
              <input placeholder="Fale sobre você" {...register("bio")} />
            </div>

            <h6>{errors.bio?.message}</h6>
          </div>

          <div className="divContainer">
            <div className="divTitle">
              <span>Contato</span>
              <input placeholder="Opção de contato" {...register("contact")} />
            </div>
            <h6>{errors.contact?.message}</h6>
          </div>

          <div className="divSelect">
            <span className="divSelectSpan">Selecionar módulo</span>
            <select {...register("course_module")}>
              <option value="Primeiro módulo: (Introdução ao Frontend)">
                Primeiro Módulo
              </option>
              <option value="Segundo módulo: (Frontend Avançado)">
                Segundo Módulo
              </option>
              <option value="Terceiro módulo: (Introdução ao Backend)">
                Terceiro Módulo
              </option>
              <option value="Quarto Módulo: (Backend Avançado)">
                Quarto Módulo
              </option>
            </select>
          </div>

          <div className="divBtnRegister">
            <button type="submit">Cadastrar</button>
          </div>
        </Form>
      </Container>
    </motion.div>
  );
};
export default Registro;
