import {
  BrowserRouter,
  Route,
  Routes as Switch,
  Navigate,
} from "react-router-dom";
import { Classificado } from "../pages/classificados/Classificados";
import { NovoClassificados } from "../pages/novoclassificados/NovoClassificados";
import { Login } from "../pages/login/Login";
import { Cadastro } from "../pages/login/cadastro/Cadastro";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Login />} />
        <Route path="/cadastrar" element={<Cadastro />} />
        <Route path="/classificado" element={<Classificado />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
