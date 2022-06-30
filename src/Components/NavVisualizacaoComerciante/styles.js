import styled from "styled-components";
import { colors } from './../../mock/CardsInstitucional';

const media = {
  Tablet: "@media(max-width: 935px)",
  Mobile: "@media(max-width: 600px)",
};

export const Section = styled.section`
  .mainMenu {
    position: fixed;
    right: 0pt;
    width: 20%;
    height: 100vh;
    margin: auto;
    transition: width 0.5s;
    padding-top: 30px;

    background-color: ${({ theme }) => theme.barRight};
  }

  .mainMenu-Mobile{
    max-width: 400px;
    width: 95%;
    height: 100vh;
    background-color: ${({ theme }) => theme.barRight};
    margin: auto;
    transition: width 0.5s;
    padding-top: 100px; 
  }

  .mobile {
    position: relative;
    display: none;
  }

  .navbar {
    position: relative;
    min-height: 100px;
    font-size: 16px;
  }

  .hamburger {
    display: none;
    cursor: pointer;
    margin: 30px 0;
  }

  .bar {
    display: block;
    width: 30px;
    height: 5px;
    margin: 5px auto;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    background-color: ${({ theme }) => theme.fontColor};
  }

  .bar:nth-child(1){
    position: fixed;    
    margin: 5px auto auto -20px;
  }

  .bar:nth-child(2){
    position: fixed;
    margin: 15px auto auto -20px;
  }

  .bar:nth-child(3){
    position: fixed;
    margin: 25px auto auto -20px;
  }

  .ContainerPlace {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    margin-right: 13px;

    .DefaulConfig {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 30px;
      gap: 10px;

      span{
        color: ${({ theme }) => theme.fontColor};
      }

      p {
        font-family: "Inter";
        font-weight: 500;
        font-size: 16px;
        margin: auto;
        text-align: center;

        color: ${({ theme }) => theme.fontColor};
      }

      .IconMenu {
        height: 20px;
        width: 20px;

        color: ${({ theme }) => theme.fontColor};
      }
    }
    .PlaceArea {
      img {
        display: block;
        margin: auto;
        margin-top: 20px;
      }
      h1 {
        font-family: "Inter";
        font-weight: 600;
        font-size: 24px;
        margin-top: 20px;
        text-align: center;
        margin-bottom: 40px;
        color: ${({ theme }) => theme.fontColor};
      }
    }
    .Avaliation {
      .ImageStars {
        display: block;
        margin: auto;
      }
    }
    .Acessible {
      p {
        color: #4fce63;
      }
    }
  }
  .SectionPlace {
    margin-top: 30px;
    max-height: 100px;
    overflow: auto;
    direction: rtl;
    text-align: left;

    &::-webkit-scrollbar {
      width: 8px;
      height: 48px;
      border: none;
    }
    span {
      display: flex;
      align-items: flex-start;
      font-family: "Lato";
      font-weight: 600;
      font-size: 16px;
      margin-top: 20px;
      margin-bottom: 20px;

      color: ${({ theme }) => theme.fontColor};
    }
  }

  .ContainerCorredor {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-top: 50px;
    flex-direction: column;

    h1{
      font-family: "Lato";
      font-weight: 600;
      font-size: 22px;
      color: ${({ theme }) => theme.fontColor};
    }
  }

  ${media.Tablet} {
    .mainMenu {
      display: none;
    }

    .hamburger {
      display: block;
      padding: 0 1%;
      padding-left: 20px;
    }

    .mobile {
      float: right;
      margin: 7px 10% 0 2%;
      display: block;
      z-index: 3;
    }

    .desktop {
      display: none;
    }

    .navbar {
      width: 100%;
      top: 0;
    }

    .hamburger.active .bar:nth-child(2) {
      opacity: 0;
    }

    .hamburger.active .bar:nth-child(1) {
      transform: translateY(10px) rotate(45deg);
    }

    .hamburger.active .bar:nth-child(3) {
      transform: translateY(-10px) rotate(-45deg);
    }

    .nav-menu.active {
      right: 0;
    }

    .nav-menu {
      position: fixed;
      right: -100%;
      top: -20px;
      height: 100vh;
      width: 60%;
      transition: 0.3s;
      list-style-type: none;
    }

    .nav-link {
      margin: auto;
    }

    .nav-item {
      width: 100%;
      margin: 10px 0;
      border-bottom: black 1px solid;
    }
  }

  ${media.Mobile} {
    .mainMenu-Mobile{
      max-width: 400px;
      width: 95%;
      height: 100vh;      
      background-color: ${({ theme }) => theme.barRight};
      margin: auto;
      transition: width 0.5s;
      padding-top: 100px; 
    }

    .hamburger {
      display: block;
      padding-left: 200px;
    }

    .nav-menu {
      max-width: 400px;
      position: fixed;
      right: -100%;
      top: -20px;
      height: 100vh;
      width: 98%;
      transition: 0.3s;
      list-style-type: none;
    }
  }
`;

export const Profile = styled.div`
  width: 100%;
  
  .profile {
    width: 90%;
    background-color: white;
    border-radius: 50px;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    background-color: ${({ theme }) => theme.body};
  }

  .link{
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    img{
      width: 60px;
      height: 60px;
      border-radius: 50%;     
    }
  
    h1{
      line-height: 60px;    
      font-family: 'Lato', cursive;
      white-space: nowrap;
      overflow: hidden;
      margin-left: 20px;
      text-overflow: ellipsis;
      font-size: 20px;
      color: ${({ theme }) => theme.fontColor};
  
      ${media.Tablet} { font-size: 18px; }  
  
      ${media.Mobile} { font-size: 15px; }
    }
  }

  .iconExit{
    min-width: 13%;
    width: 15%;
    height: 50px;
    padding-right: 10px;
    cursor: pointer; 
    padding-top: 5px;
    color: ${({ theme }) => theme.fontColor};
  }
`;

export const DarkMode = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0px;

  .toggle-control { display: none;  }
  
  input.toggle-control + label {
    position: relative;
    display: block;
    width: 40px;
    height: 20px;
    border-radius: 60px;
    cursor: pointer;
    outline: none;
    user-select: none;
  }

  input.toggle-control + label::before, input.toggle-control + label::after {
    display: block;
    position: absolute;
    top: 1px;
    left: 1px;
    bottom: 1px;
    right: 1px;
    content: '';
    transition: all 0.4s;
  }		

  input.toggle-control + label::before {
    background: white;
    border-radius: 60px;
  }

  input.toggle-control + label::after {
    width: 18px;
    background: #297FB8;
    border-radius: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }

  input.toggle-control:checked + label::before { background: black; }

  input.toggle-control:checked + label::after { margin-left: 20px; }
`;