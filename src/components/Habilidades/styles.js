import styled, { css } from 'styled-components';

export const ContainerHabilidades = styled.div`
   margin-top: 140px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;

   @media(min-width: 1000px){
      padding: 0 100px;
      height: 800px;
      justify-content: center;
   }
`;

export const ContainerInformationHabilidades = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
`;

export const Title = styled.h1`
   color: #FEFAF7;
   margin: 30px 0;
   font-size: 40px;
   text-align: center;
`;

export const ContainerCards = styled.div`
   @media(min-width: 1000px){
      display: flex;
      justify-content: center;
      align-items: center;
   }
`;

export const CardSkill = styled.div`
   width: 80vw;
   color: white;
   padding: 20px;
   border-radius: 20px;
   margin-bottom: 50px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;

   ${({ bgColor }) => css`
      background-color: ${bgColor};
   `}
   
   h1 ,h2{
      font-size: 32px;
   }

   p{
      font-size: 20px;   
      margin-bottom: 30px;
   }
   
   ul{
      list-style-type: none;

      li{
         color: #0D0D0D;
         text-align: start;
         margin-top: 5px;
         font-weight: 600;
         font-size: 20px;
         font-style: italic;
         display: flex;
         align-items: start;
         flex-direction: column;
      }
   }

   @media(min-width: 1000px){
      width: calc(100%/2 - 100px);
      margin: 0 25px;
      height: 100%;

      h1 ,h2{
         font-size: 26px;
      }

      p{
         font-size: 18px;   
      }
      
      ul{
         li{
            font-size: 18px;
         }
      }
   }
`;