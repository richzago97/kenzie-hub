import { toast } from "react-toastify";
import api from "../../services/api";
import { createContext } from "react";
export const TechContext = createContext({});

function TechProvider({ children }) {
  const createTech = (data, techModal) => {
    const token = localStorage.getItem("@TOKEN");
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success("Tecnologia criada com sucesso!");
        techModal();
      })
      .catch((err) => {
        console.log(err);

        toast.error("Ops! algo deu errado");
      });
  };

  const deleteTech = (id) => {
    const token = localStorage.getItem("@TOKEN");
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success("Tecnologia deletada com sucesso!");
      })

      .catch(() => toast.error("Ops! algo deu errado"));
  };

  return (
    <TechContext.Provider value={{ createTech, deleteTech }}>
      {children}
    </TechContext.Provider>
  );
}
export default TechProvider;
