import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Form } from "../Login/styles";
import { useNavigate } from "react-router-dom";

import { useState, useContext } from "react";
import { BiShow } from "react-icons/bi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { UserContext } from "../../Providers/Register e Login";

const Login = () => {
  const { userLogin } = useContext(UserContext);
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Campo obrigatório")
      .email("E-mail inválido")
      .matches(/\S+@\S+\.\S+/),
    password: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/,

        "Deve conter 8 caraceteres, uma maiúscula, uma minúscula, um número e um caracter especial"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const [load, setLoad] = useState(false);
  let navigate = useNavigate();

  const onSubmitFunction = async (data) => {
    setLoad(true);
    await userLogin(data);
    setLoad(false);
  };
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Container>
        <h1>Kenzie Hub</h1>

        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <div className="login">
            <h2>Login</h2>
          </div>
          <div className="divContainer">
            <div className="divTitle">
              <span>Email</span>
              <input
                placeholder="Digite aqui seu email"
                {...register("email")}
              />
            </div>
            <p>{errors.email?.message}</p>
          </div>

          <div className="divContainer">
            <div className="divTitle">
              <span>Senha</span>
              <div className="divPassword">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Digite aqui sua senha"
                  {...register("password")}
                />
                {!showPassword ? (
                  <BiShow onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <AiOutlineEyeInvisible
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>
            </div>

            <p>{errors.password?.message}</p>
          </div>

          <div className="divBtns">
            <button className="btnEntrar" type="submit" disabled={load}>
              {load ? "Carregando..." : "Entrar"}
            </button>

            <h6>Ainda não possui uma conta?</h6>

            <button
              type="button"
              onClick={() => navigate("/register")}
              className="btnCadastre"
            >
              Cadastre-se
            </button>
          </div>
        </Form>
      </Container>
    </>
  );
};
export default Login;
