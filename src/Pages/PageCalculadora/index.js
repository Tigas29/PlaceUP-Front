import React from "react";
import { Link } from "react-router-dom";
import { HeaderComerciante } from "../../Components/HeaderComerciantes/HeaderComerciante";
import { FooterGeral } from "../../Components/FooterGeral/footer";
import YoutubeEmbed from "./EmbedVideoYT";
import { Main, Container, Cards, ContCards } from "./styles";
import Banner from "../../Img/Calculadora/BannerCalculadora.svg";
import Porcent2 from "../../Img/Calculadora/PorcentagemIcon2.svg";
import Porcent from "../../Img/Calculadora/PorcentagemIcon.svg";
import BackgroundFinal from "../../Img/Calculadora/FinalParte.svg";
import { calculadoraCards } from "../../mock/CardCalculadora";
import { InputDarkMode } from "../../Components/inputDark";

export function IndexCalculadora() {
  return (
    <>
      <HeaderComerciante />
      <InputDarkMode />
      <Main>
        <Container>
          <div className="ContainerBanner">
            <div className="TextArea">
              <h1>
                Pega a caneta e vem <br />
                calcular com
                <br /> a gente!
              </h1>
              <p>Calcular um produto nunca foi tão fácil.</p>
              <Link to="/calcular">
                <button>Voltar para a calculadora</button>
              </Link>
            </div>
            <div className="ImageArea">
              <img src={Banner} alt="." />
            </div>
          </div>
          <div className="HowToUseCalculatorP1">
            <div className="Tittle">
              <h1>Descomplicando a calculadora</h1>
              <hr />
            </div>
            <div className="paragraph">
              <p>
                A calculadora de precificação da PlaceUp é bem simples de usar.
                Mas antes disso, vamos mostrar como se preparar para utilizar
                essa ferramenta.
                <br />
                <br />
                Utilizamos a fórmula de Markup para ajudar o comerciante gerar
                um preço confiável por meio da nossa calculadora.
                <br />
                <br />
                <p>
                  Markup é a diferença de custo entre o preço de venda e o preço
                  de custo do produto ou mercadoria. O markup diz qual é o lucro
                  total ou lucro bruto obtido em uma venda, sendo uma
                  porcentagem sobre o preço de custo.
                </p>
              </p>
            </div>
          </div>
          <div className="BackgroundCardsParts">
            <div className="CardsPart">
              <div className="AreaTittle">
                <h1>O que compõe o markup</h1>
                <span>
                  <p>Veja os pilares para formar o markup </p>
                  <hr />
                </span>
              </div>
              <img className="PorcentIcon icon1" src={Porcent2} alt="" />
              <ContCards>
                {calculadoraCards.map((item) => {
                  const { id, img, title, Description, alt } = item;
                  return (
                    <Cards>
                      <div className="CardsTittle">
                        <span>{id}</span>
                        <h1>{title}</h1>
                      </div>

                      <div className="AreaWhite">
                        <div className="IntoCard">
                          <div className="IconCard">
                            <img className="igmCard" src={img} alt={alt} />
                          </div>
                          <div className="Textarea">
                            <p>{Description}</p>
                          </div>
                        </div>
                      </div>
                    </Cards>
                  );
                })}
              </ContCards>
            </div>
            <img className="PorcentIcon icon2" src={Porcent} alt="" />
          </div>
          <div className="HowToUseCalculatorP1 t2">
            <div className="Tittle">
              <h1>Cuidado com a margem de lucro!</h1>
              <hr />
            </div>
            <div className="paragraph">
              <p>
                É importante lembrar que a margem de lucro sobre o preço de
                venda nunca poderá ser superior a 100%. Você verá que se fizer o
                cálculo com uma magrem de lucro muito alta, próxima de 90%, 95%,
                o resultado se torna exponencial, cada vez mais alto.
                <br />
                <br />
                <p>
                  Por isso, atenção, não confunda o lucro esperado sobre o seu
                  custo com a margem de lucro esperada sobre o preço de venda.
                </p>
                <br />
                <br />
                <p>
                  Como o valor do lucro está embutido no valor do preço final de
                  vendas, a margem percentual nunca poderá ser maior do que
                  100%.
                </p>
              </p>
            </div>
          </div>
          <div className="HowToUseCalculatorP1 t1">
            <div className="Tittle">
              <h1>Você sabia?</h1>
              <hr />
            </div>
            <div className="paragraph">
              <p>
                O markup, embora não seja o único, é um dos métodos preferidos
                dos economistas e especialistas financeiros para calcular a
                precificação dos produtos e serviços.
                <br />
                <br />
                <p>
                  Na prática, falamos de um índice que fornece segurança, já que
                  é baseado em uma fórmula simples e de fácil aplicação,
                  independente do negócio.
                </p>
                <br />
                <br />
                <p>
                  É, inclusive, um dos métodos preferidos de prestadores de
                  serviços, porque é fácil de usar e ajuda a criar uma visão
                  completa de todos os custos que compõem um serviço — e que
                  muitas vezes passam despercebidos.
                </p>
              </p>
            </div>
          </div>

          

          <div className="StartBackground">
            <div className="FinalPart">
              <div className="TittleFinalPart">
                <h1>Vamos Começar ?</h1>
                <p>
                  Com essas dicas, você esta pronto para usar da melhor forma
                  possível nossa calculadora de precificação
                </p>
              </div>
              <div className="BtnPart">
                <Link to="/calcular">
                  <button>Preparado?</button>
                </Link>
                <div className="ImageFinalContent">
                  <img src={BackgroundFinal} alt=";" />
                </div>
              </div>
            </div>
          </div>
        </Container>
        <FooterGeral />
      </Main>
    </>
  );
}
