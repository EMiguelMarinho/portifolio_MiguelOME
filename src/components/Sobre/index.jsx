import { SiAboutdotme } from 'react-icons/si';
import { AiOutlineArrowRight } from 'react-icons/ai';

import * as Styles from './styles'

export const Sobre  = () => {
   return (
      <Styles.ContainerSobre>
         <SiAboutdotme color="#595959" size="200px"/>
         <Styles.ContainerInformationSobre>
            <h1>Sobre</h1>
            <p>Olá, meu nome é Eliseu Miguel! Tenho 20 anos, moro na Bahia e sou apaixonado pelo ambiente de tecnologia. Iniciei meus estudo de programação em Outubro de 2021, e desde lá venho estudando todos os dias, utilizando JavaScript como linguagem de programação (front/back). Tenho prática na criação de Landing Pages, criação/consumo de API's, responsividade, testes unitários, dentre outros. </p>
         </Styles.ContainerInformationSobre>
         <Styles.ContainerInformationHire>
            <h1>Contrate-me</h1>
            <p>Estou aberto a propostas. Posso ajudar a sua empresa de acordo com a sua necessidade, seja como freela ou PJ/CLT. Fale comigo!</p>
            <a href="#Footer">
               <Styles.LinkHire>
                  <AiOutlineArrowRight color='#FEFAF7'/>
                  Contrate-me
               </Styles.LinkHire>
            </a>
         </Styles.ContainerInformationHire>
      </Styles.ContainerSobre>
   );
}