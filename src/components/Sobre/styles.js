import styled from 'styled-components';

export const ContainerSobre = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;

   @media(min-width: 1000px){
      height: 500px;
      flex-direction: row;
      padding: 0 100px;
      justify-content: center;
   }
`;

export const ContainerInformationSobre = styled.div`
   margin-bottom: 50px;
   max-width: 80vw;
   text-align: justify;
   
   h1, p{
      color: #FEFAF7;
   }

   h1{
      font-size: 40px;
      margin-bottom: 10px;
   }

   p{
      font-size: 20px;
   }

   @media(min-width: 1000px){
      margin: 0 50px;
      width: 30%;

      p{
         font-size: 15px;
      }
   }
`;

export const ContainerInformationHire = styled(ContainerInformationSobre)`
   h1{
      text-align: end;
   }

   p{
      margin-bottom: 20px;
   }
`;

export const LinkHire = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 175px;
   text-decoration: none;
   color: #FEFAF7;
   background-color: #243E73;
   padding: 10px 15px;
   border-radius: 30px;
   font-weight: 500;
   font-size: 20px;

   @media(min-width: 1000px){
      font-size: 16px;
      width: 145px;
      cursor: pointer;

      &:hover{
         background-color: #D9763D;
      }
   }
`;