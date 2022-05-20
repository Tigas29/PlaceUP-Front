import styled from "styled-components";

const media = {
  Tablet: "@media(max-width: 790px)",
  Mobile: "@media(max-width:675px)",
  MobileS: "@media(max-width:320px)",
};

export const Home = styled.div` 
  background-color: #ECF0F1;  
  ${media.MobileS}{
    margin-left: 10%;
    text-align: center;
  }
 `;

export const HeaderA = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 50%;

    img{
        width: 30px;
        height: 30px;        
        margin: 33px 0px 0px 100px;
        cursor: pointer;
    }
`;

export const Barra = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  padding: 0px 2%;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 20px;
    
  .pesquisa{
    width: 95%;
    height: 40px;
    padding: 0px 20px 0px 10px;
    background-color: white;
    background-size: 15px;
    background-position: 10px 9px;
    background-repeat:no-repeat;     
    border:0;
    outline: 0;
  }

  .seta{
    background-color: #fff;
  }

  button{ cursor: pointer; }
`;

export const Car = styled.div`

`

export const Categoria = styled.div`
  max-width: 1400px;
  width: 50%;
  padding: 0px 0 30px 17%;

  h1{   
    font-size: 25px; 
    margin-left: 5px;
    font-weight: 800;      
    font-family: 'Bakbak One', cursive;
  }

  .containerCategoria{
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto auto;
    flex-direction: row;
    justify-content: space-between;
    ${media.Tablet}{
      width: 120%;
      grid-template-columns: auto auto auto auto;
      grid: auto / auto auto;
    }

    ${media.MobileS}{
      width: 50%;
      margin-left: 20%;
      grid-template-columns: auto auto auto 20px;
      grid: auto / auto;
    }
  }

  ${media.MobileS}{
    h1{   margin-left: 24px;    }
  }
`;

export const CategoriaShopping = styled.div`
    width: 140px;
    height: 100px;
    border-radius: 20px;
    margin-top: 70px;
    text-align: center; 
    background-color: white;

    img{
        width: 110px;
        height: 110px;
        font-size: 17px;
        margin-top: -50px;
    }
`;

export const InfoCategoria = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;    
    border-left: 2px solid #E85959;

    h2{   
      text-align: center;
      font-size: 17px; 
      margin-left: 5px;
      font-weight: 600;
      cursor: pointer;
    }

    p{
      width: 20px;
      height: 20px;
      background-color: #E85959;
      color: white;
      font-size: 17px;
      border-radius: 10px;
      line-height: -200px;
      cursor: pointer;
      font-family: 'Lato';
    }
`;