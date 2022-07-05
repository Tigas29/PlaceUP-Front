import React, { useState } from "react";
import { comercio6 } from "../../../mock/comercio6";
import { Header } from "../../../Components/HeaderUsuario/HeaderUser";
import { FeedUser } from "../../../Components/FeedsUser/Feed/index";
import { FeedUser2 } from "../../../Components/FeedsUser2/Feed/index";
import { FeedUser3 } from "../../../Components/FeedsUser3/Feed/index";
import { FeedUser4 } from "../../../Components/FeedsUser4/Feed/index";
import { FeedUser5 } from "../../../Components/FeedsUser5/Feed/index";
import { FeedUser6 } from "../../../Components/FeedsUser6/Feed/index";
import { MenuPrincipal } from "../../../Components/MenuPrincipal/index";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import * as C from "./styles";
import { CarrinhoComProduto } from "../../../Components/Carrinho/CarrinhoComProduto";
import { cardsHome } from "../../../mock/CardsHome";
import { IoIosArrowForward } from "react-icons/io";
import { Navigate, useNavigate  } from "react-router-dom";

export function Wheelchair() {
  const [query, setQuery] = useState("");

  const search = () => {
    if (!query) return [];
    return comercio6.filter(
      (item) =>
        item.name
          .toLowerCase()
          .normalize("NFD")
          .replace(/[^a-zA-Zs]/g, "")
          .includes(query) || item.price.includes(query)
    );
  };

  const [isOpen, setIsOpen] = useState("");

  const navegate = useNavigate();

  function Home(){
    navegate("/FeedUser"); 
  }

  function Cego(){
    navegate("/Blind"); 
  }

  function Surdo(){
    navegate("/Deaf"); 
  }

  function Mudo(){
    navegate("/Mute"); 
  }

  function Cadeirante(){
    navegate("/Wheelchair"); 
  }
  
  return (
    <>
      <Header />
      <C.Main>
        <MenuPrincipal />
        <C.Category>
          <C.SectionSearch>
            <C.SearchBar>
              <AiOutlineSearch className="icon" />
              <input
                type="text"
                className="search"
                placeholder="Pesquisa"
                onChange={(e) => setQuery(e.target.value)}
              ></input>
            </C.SearchBar>
            <C.Car onClick={() => setIsOpen(!isOpen)} className="car">
              <AiOutlineShoppingCart className="carIcon" alt="Carrinho" />
            </C.Car>
          </C.SectionSearch>
          {query && (
            <C.ContainerSearch>
              {search().map((item) => (
                <div key={item.id} className="VisuBarSearch">
                  <img src={item.image} alt="Foto Produto" />
                  <span>{item.name}</span>
                  <p>{item.price}</p>
                </div>
              ))}
            </C.ContainerSearch>
          )}

          {isOpen ? (
            <>
              <CarrinhoComProduto />
            </>
          ) : (
            <></>
          )}

          <C.Filter>
            <select name="Ordenar por">
              <option value="ordenar" select>
                Ordenar
              </option>
              <option value="maior">Maior Preço</option>
              <option value="menor">Menor Preço</option>
            </select>


            <select id="acessibilidade">
              <option value="acessibilidade" onChange={Home}>Acessibilidade</option>
              <option value="cego" onChange={Cego}>Suporte para Cego</option>
              <option value="surdo"  onChange={Surdo}>Suporte para Surdo</option>
              <option value="mudo"  onChange={Mudo}>Suporte para Mudo</option>
              <option value="cadeirante" onChange={Cadeirante}>Suporte para Cadeirante</option>
            </select>                             
          </C.Filter>

          <h1 className="categoryTitle">CATEGORIAS</h1>
          <div className="containerCategory">
            {cardsHome.map((item) => (
              <C.FilterCategory key={item.id} primary={`${item.color}`}>
                <img src={item.img} alt="Icone Shopping" />
                <C.InfoCategory>
                  <C.BtnBuscar>
                    <IoIosArrowForward />
                  </C.BtnBuscar>
                </C.InfoCategory>
                </C.FilterCategory>
            ))}
          </div>
        </C.Category>

        <FeedUser3  />      
        <FeedUser2  />        
      </C.Main>
    </>
  );
}
