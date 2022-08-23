import { toast } from "react-toastify";
import api from "../../services/api";
import { createContext, ReactNode } from "react";
import { useState } from "react";
interface ITechProps {
  children: ReactNode;
}

interface IDataRegister {
  title: string;
  status: string;
}

export interface IDataTech extends IDataRegister {
  id: number;
}

export const TechContext = createContext<TechContextData>(
  {} as TechContextData
);

interface TechContextData {
  createTech: (IDataRegister: IDataRegister) => void;
  deleteTech: (IDataDelete: number) => void;
  techModal: () => void;
  createTechModal: boolean;
}

function TechProvider({ children }: ITechProps) {
  const createTech = (data: IDataRegister) => {
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

  const deleteTech = (id: number) => {
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

  const [createTechModal, setcreateTechModal] = useState(false);

  function techModal() {
    setcreateTechModal(!createTechModal);
  }

  return (
    <TechContext.Provider
      value={{ createTech, deleteTech, techModal, createTechModal }}
    >
      {children}
    </TechContext.Provider>
  );
}
export default TechProvider;
