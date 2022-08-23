import { useState, createContext, useEffect, ReactNode } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext<userContextData>(
  {} as userContextData
);

interface IUserProps {
  children: ReactNode;
}
//React.FunctionComponent<AnimatePresenceProps>

export interface IDataRegister {
  email: string;
  password: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
  confirmePassword: string;
}

export interface IDataLogin {
  email: string;
  password: string;
}

interface IListTech {
  techs: [];
  works: [];
}

interface IAvatar {
  avatar_url?: string;
}

export interface UserData {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs?: IListTech;
  works?: IListTech;
  created_at: Date;
  updated_at: Date;
  avatar_url?: IAvatar;
}

interface userContextData {
  userRegister: (IDataRegister: IDataRegister) => void;
  userLogin: (IDataLogin: IDataLogin) => void;
  user: UserData;
}

export const UserProvider = ({ children }: IUserProps) => {
  const localUser = localStorage.getItem("userObject");
  const [user, setUser] = useState(JSON.parse(localUser!));
  const navigate = useNavigate();

  const userRegister = (data: IDataRegister) => {
    api
      .post("/users", data)
      .then((response) => {
        response.status === 201 && navigate("/");
        toast.success("Conta criada com sucesso!");
      })
      .catch(() => toast.error("E-mail já cadastrado!"));
  };

  const userLogin = (data: IDataLogin) => {
    api
      .post("/sessions", data)
      .then((response) => {
        localStorage.setItem("@TOKEN", response.data.token);
        localStorage.setItem("@USERID", response.data.user.id);
        setUser(response.data.user);
        localStorage.setItem("userObject", JSON.stringify(response.data.user));
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
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("@USERID");
          localStorage.removeItem("@TOKEN");
        });
    }
  }, []);

  return (
    <UserContext.Provider value={{ userRegister, userLogin, user }}>
      {children}
    </UserContext.Provider>
  );
};
