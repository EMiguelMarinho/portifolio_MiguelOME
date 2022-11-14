import styled, { css } from 'styled-components';
import { ContainerInformationSobre } from '../Sobre/styles.js';

export const ContainerPortifolio = styled.div`
   margin-top: 140px;
   height: 1100px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;

   @media(min-width: 1000px){
      height: 700px;
   }
`;

export const ContainerInformation = styled(ContainerInformationSobre)`
   @media(min-width: 1000px){
      margin-bottom: 50px;

      h1, p{
         text-align: center;
      }
   }
`;

export const ContainerListWorks = styled.div`
   display: flex;
   flex-direction: column;
   
   @media(min-width: 1000px){
      flex-direction: row;
      flex-wrap: wrap;
      max-width: 900px;
   }
`;

export const Card = styled.div`
   width: 80vw;
   height: 300px;
   margin-bottom: 50px;
   
   img{
      border-radius: 20px;
      margin-bottom: 50px;
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
   
   ${(props) => css`
      background-image: url(${props.image});
   `}

   @media(min-width: 1000px){
      width: 400px;
      margin: 20px 25px;
      img{
         transition: 0.5s;
      }
      
      &:hover{
         img{
            transform: scale(1.1);
            transition: 0.5s;
         }
      }
   }
`;