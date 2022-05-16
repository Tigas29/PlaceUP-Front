import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Login } from "./Components/Login/Index";
import { CadastroUser } from "./Pages/cadastroUsuario";
import { IndexCalculadora } from "./Pages/PageCalculadora/index";
import { Pagina404 } from "./Components/Error404";

function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Oi</h1>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/CadastroUser" element={<CadastroUser />} />
          <Route
            path="/Como-Funciona-Calculadora"
            element={<IndexCalculadora />}
          />
          <Route path="*" element={<Pagina404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Rotas;
