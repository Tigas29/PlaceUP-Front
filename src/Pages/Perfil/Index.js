import React from "react";
import {
  Main,
  Body,
  Photo,
  Inf,
  Locate,
  NameEdit,
  Inform,
  Sections,
  EndPage,
} from "./style";
import { Header } from "../../Components/HeaderUsuario/HeaderUser";
import Self from "./img/perfil.svg";
import teste from "./img/detalhe.svg";

export function Perfil() {
  return (
    <>
      <Header />
      <Main>
        <Body>
          <div className="Title">
            <p>Perfil</p>
          </div>

          <Inf>
            <Photo>
              <img src={Self} alt="Foto de Perfil Do Usuário" />
            </Photo>

            <Inform>
              <NameEdit>
                <div>
                  <p className="name">UserName</p>
                </div>

                <div className="edit">
                  <p className="edit">EDITAR PERFIL</p>
                </div>
              </NameEdit>

              <Locate>
                <p>Rua Endereço Numero Bairro Cidade Estado</p>
              </Locate>
            </Inform>
          </Inf>

          <Sections>
            <details className="Informações">
              <summary> Sobre </summary> <br />
              <div className="InfoPessoal">
                <p className="A">Informações Pessoais</p>
                <label>
                  Nome Do Usuário:
                  <input type="text" placeholder="UserName" />
                </label>
                <br />

                <label>
                  Email:
                  <input type="email" placeholder="name@gmail.com" />
                </label>
                <br />

                <label>
                  Data de Nascimento:
                  <input type="date" placeholder="data de nascimento" />
                </label>
                <br />

                <label>
                  Senha:
                  <input type="password" placeholder="*********" />
                </label>
                <br />
              </div>
              <button class="button">
                <span>Salvar</span>
              </button>
            </details>

            <details className="Endereço">
              <summary> Endereço </summary>
              <div className="InfoLocal">
                <p className="B">Informações De Endereço</p>
                <label>
                  Rua:
                  <input type="text" placeholder="Nome da Rua" />
                </label>
                <br />

                <label>
                  Numero:
                  <input type="text" placeholder="Numero" />
                </label>
                <br />

                <label>
                  Bairro:
                  <input type="text" placeholder="Nome do Bairro" />
                </label>
                <br />

                <label>
                  Cidade:
                  <input type="text" placeholder="Nome da cidade" />
                </label>
                <br />

                <label>
                  CEP:
                  <input type="number" placeholder="Numero do cep" />
                </label>
                <br />

                <div>
                  <label>
                    Região:
                    <select>
                      <option value=""></option>
                      <option value="Centro">Centro</option>
                      <option value="Zona Norte">Zona Norte</option>
                      <option value="Zona Leste">Zona Leste</option>
                      <option value="Zona Sul">Zona Sul</option>
                      <option value="Zona Oeste">Zona Oeste</option>
                    </select>
                  </label>
                </div>
              </div>

              <button class="button">
                <span>Salvar</span>
              </button>
            </details>
          </Sections>
        </Body>
        {/* <EndPage>
          <img src={teste} />
        </EndPage> */}
      </Main>
    </>
  );
}
