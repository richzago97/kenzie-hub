import { useState, createContext, useEffect } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userObject")) || {}
  );
  const navigate = useNavigate();

  const userRegister = (data) => {
    api
      .post("/users", data)
      .then((response) => {
        response.status === 201 && navigate("/");
        toast.success("Conta criada com sucesso!");
      })
      .catch(() => toast.error("Ops! algo deu errado"));
  };

  const userLogin = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        localStorage.setItem("@TOKEN", response.data.token);
        localStorage.setItem("@USERID", response.data.user.id);
        setUser(response.data.user);
        navigate("/dashboard");
      })
      .catch(() => {
        toast.error("Login ou senha incorreta");
      });
  };
  useEffect(() => {
    const UserID = localStorage.getItem("@USERID");
    const token = localStorage.getItem("@TOKEN");
    if (UserID && token) {
      api
        .get(`/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUser(response.data);
          localStorage.setItem("userObject", JSON.stringify(response.data));
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("@USERID");
          localStorage.removeItem("@TOKEN");
        });
    }
  }, []);

  const [createTechModal, setcreateTechModal] = useState(false);

  function techModal() {
    setcreateTechModal(!createTechModal);
  }

  return (
    <UserContext.Provider
      value={{ userRegister, userLogin, user, techModal, createTechModal }}
    >
      {children}
    </UserContext.Provider>
  );
};
