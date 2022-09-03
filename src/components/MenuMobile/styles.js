import styled, { css } from 'styled-components'

export const ContainerMenu = styled.nav`
   background-color: #FEFAF7;
   height: 100vh;
   width: 100vw;
   position: fixed;
   z-index: 5;
   transition: 0.5s;
   opacity: 0;
   pointer-events: none;
   transform: translateY(100%);

   ${({ visibleMenu }) => visibleMenu && css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
   `}

   @media(min-width: 1000px){
      display: none;
   }
`;

export const ImgOutMenu = styled.div`
   position: absolute;
   top: 20px;
   right: 20px;

`;

export const ListNavigation = styled.ul`
   list-style-type: none;
   height: 100%;
   width: 100%;
   padding: 75px 0;
`;

export const LinkNav = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: calc(100%/5);
   font-size: 24px;
   font-weight: 600;   

   
   a{
      text-decoration: none;

      ${(props) => css`
         color: ${props.color};
      `}
   }
`;