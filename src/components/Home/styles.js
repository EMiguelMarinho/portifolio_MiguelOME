import styled, { css } from "styled-components";
import profile from '../../images/perfil-black.jpeg';

export const ContainerHome = styled.div`
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   background: rgba( 0, 0, 0, 0.65) url(${profile});
   background-size: cover;
   background-repeat: no-repeat;
   background-blend-mode: darken;
   background-position: center;

   @media(min-width: 1000px){
      background-size: contain;
      background-position: right;
      justify-content: flex-start;
   }
`;

export const ContainerInformation = styled.div`
   width: 70vw;
   text-align: center;
   h1{
      font-size: 40px;
      color: white;
   }

   h2{
      font-weight: 400;
      color: #D9763D;
   }
`;

export const ContainerButtons = styled.div`
   margin: 20px auto 0 auto;
   display: flex;
   justify-content: space-between;
   max-width: 270px;

   @media(max-width: 365px){
      flex-direction: column;
      height: 120px;
      margin: 20px 0 0 0;
   }
`;

export const ButtonHome = styled.button`
   border: none;
   border-radius: 20px;
   padding: 10px 15px;
   font-size: 24px;
   font-weight: 500;
   
   ${props => css`
      background-color: ${props.bg};
      color: ${props.color};
   `}

   @media(min-width: 1000px){
      font-size: 18px;
      padding: 10px 20px;
      cursor: pointer;

      &:hover{
         font-size: 19px;
         transition: 0.2s;
      }
   }
`;