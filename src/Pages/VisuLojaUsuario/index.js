import { Main } from "./style";
import { Header } from "../../Components/HeaderUsuario/HeaderUser";
import { BarraBusca } from "../../Components/BarraDePesquisa/index";
import { Box } from "../../Components/VisualizacaoUsuarioBox/index";
import { MenuPrincipal } from "../../Components/NavVisualizacaoUsuario/index";

export function VisualizacaoUsuario() {
    return (
        <>
            <Header />
            <Main>
                <div className="Container1">
                    <BarraBusca />
                    <Box />
                </div>
                <div className="Container2">
                    <MenuPrincipal />
                </div>
            </Main>
        </>
    );
}