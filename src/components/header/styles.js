import styled, { css } from 'styled-components';

export const ContainerHeader = styled.div`
   background-color: black;
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   position: fixed;
   top: 0;
   z-index: 3;
   

   div{
      color: white;
      z-index: 1;
   }
`;

export const ContainerLogo = styled.div`
   margin: 10px 0 10px 20px;
`;

export const BtnMenu = styled.button`
   margin: 10px 20px 10px 0;
   background-color: black;
   border: none;
   z-index: 1;

   @media(min-width: 1000px){
      display: none;
   }
`;

export const Navegation = styled.ul`
   @media(max-width: 999px){
      display: none;
   }
   list-style-type: none;
   width: 40%;
   margin: 10px 20px 10px 0;
   display: flex;
   justify-content: space-between;
`;

export const LinkNav = styled.li`
   &:hover{
      font-size: 1.1em;
      transition: 0.3s;
   }
   
   a{
      text-decoration: none;
      font-size: 1em;
      font-weight: 500; 

      ${(props) => css`
         color: ${props.color};
      `}
   }
`;