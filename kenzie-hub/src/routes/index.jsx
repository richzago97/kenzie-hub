import { Routes, Route } from "react-router-dom";
import Registro from "../pages/Registro";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Registro />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default RoutesMain;
