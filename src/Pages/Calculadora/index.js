import { Main, InputArea, ButtonStyle, Conatiner } from "./style";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Preco from "./preco";
import Imposto from "./imposto";
import Calcular from "./calcularPreco";
import Lucros from "./margemLucro";
import Unidade from "./Unidades";
import Resultado from "./resultado";
import Adicional from "./Adicional";
import AdicionalPorcentagem from "./AdicionalPorcentagem";
import Logo from "./img/LogoPlaceUP.svg";
import { HeaderComerciante } from "../../Components/HeaderComerciantes/HeaderComerciante";
import { InputDarkMode } from "../../Components/inputDark";

export function Calculator() {
  const [imposto, setImposto] = useState("");
  const [preco, setpreco] = useState("");
  const [result, setResultado] = useState("");
  const [lucro, setlucro] = useState("");
  const [adicional, setadicional] = useState("");
  const [adicionalPorcentagem, setadicionalPorcentagem] = useState("");
  const [Product, setProduct] = useState("");
  const [unidade, setUnidade] = useState(1);
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  function del() {
    setImposto("");
    setpreco("");
    setResultado("");
    setlucro("");
    setadicional("");
    setadicionalPorcentagem("");
    setUnidade(1);
  }
  const formatterPorcent = new Intl.NumberFormat("pt-BR", {});

  return (
    <>
      <HeaderComerciante />
      <InputDarkMode />
      <Main>
        <Conatiner>
          <div className="container">
            <div className="header">
              <div className="textArea">
                <img src={Logo} alt="Logo" />
                <h1>Calculadora de precificação</h1>
                <p>Calcular um produto nunca foi tão fácil.</p>
                <Link to="/calculadora">
                  <ButtonStyle className="btn">
                    <p>Aprenda a usar a calculadora </p>
                  </ButtonStyle>
                </Link>
              </div>
            </div>
            <div className="ContainerCalculator">
              <div>
                <InputArea>
                  {/* Divisao entra o nome do produto e o botao para outra page */}

                  <h1> Coloque o nome do produto</h1>

                  <input
                    type="text"
                    maxLength="16"
                    value={Product}
                    placeholder="Nome do produto"
                    onChange={(entrada) => {
                      setProduct(entrada.target.value);
                    }}
                  />
                </InputArea>
                <Imposto imposto={imposto} setImpostos={setImposto} />
                <Lucros lucro={lucro} setlucros={setlucro} />
                <Preco preco={preco} setprecos={setpreco} />
                <Adicional adicional={adicional} setadicional={setadicional} />
                <AdicionalPorcentagem
                  adicionalPorcentagem={adicionalPorcentagem}
                  setadicionalPorcentagem={setadicionalPorcentagem}
                />
                <Unidade setUnidade={setUnidade} />

                <Calcular
                  unidade={unidade}
                  adicionalPorcentagem={adicionalPorcentagem}
                  adicional={adicional}
                  lucro={lucro}
                  preco={preco}
                  imposto={imposto}
                  setResultado={setResultado}
                  setUnidade={setUnidade}
                />
              </div>
              <div className="ResulteWhite">
                <h1>{Product}</h1>
                <div className="InformationsDescription">
                  <p>
                    Imposto:{" "}
                    {!imposto ? "" : formatterPorcent.format(imposto) + "%"}
                  </p>
                  <p>
                    Margem de lucro:{" "}
                    {!lucro ? "" : formatterPorcent.format(lucro) + "%"}
                  </p>
                  <p>Valor pago: {!preco ? "" : formatter.format(preco)} </p>
                  <p>
                    Custo Adicional: {""}
                    {!adicional ? "" : formatter.format(adicional)}
                  </p>
                  <p>
                    Custo Adicional:{" "}
                    {!adicionalPorcentagem
                      ? ""
                      : formatterPorcent.format(adicionalPorcentagem) + "%"}
                  </p>
                </div>
                <Resultado
                  resultado={
                    !result
                      ? ""
                      : result.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })
                  }
                />

                <span className="span-total">
                  Valor unitário:{" "}
                  {!(result / unidade)
                    ? "" && 0
                    : formatter.format(result / unidade) &&
                      unidade / result === 0
                    ? "valor zerado"
                    : formatter.format(result / unidade)}
                </span>

                <div className="buttonContainer">
                  <ButtonStyle onClick={del}>
                    <p>Redefinir</p>
                  </ButtonStyle>
                </div>
              </div>
            </div>
            <div className="TableSimilarPrices">
              <div className="TableTitle">
                <h1> Tabela PlaceUp</h1>

                {/* <p>Última atualização: </p> */}
              </div>
              <div className="TableContainer">
                <div className="TableTitleList">
                  <span>Produto: {Product}</span>
                  <span>
                    Preço gerado: {!result ? "" : formatter.format(result)}
                  </span>
                  <p>Mínimo</p>
                  <p>Média</p>
                  <p>Máximo</p>
                </div>
                <div className="TablePlaceUP">
                  <p>
                    {!unidade ? "" : formatter.format(unidade - unidade / 5)}
                  </p>
                  <p>
                    {!unidade ? "" : formatter.format(unidade + unidade / 5)}
                  </p>
                  <p>
                    {!unidade ? "" : formatter.format(unidade + unidade / 3)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Conatiner>
      </Main>
    </>
  );
}
