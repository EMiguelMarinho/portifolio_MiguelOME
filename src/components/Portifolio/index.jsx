import * as Styles from './styles.js'

import { MdWork } from 'react-icons/md';

import chronos from '../../images/chronos-pc.PNG';
import blockInline from '../../images/blockinline-pc.PNG';

export const Portifolio = () => {
   return (
      <Styles.ContainerPortifolio>
         <MdWork color="#595959" size="200px"/>
         <Styles.ContainerInformation>
            <h1>Meus Trabalhos</h1>
            <p>Estes são todos os projetos que trabalhei até agora</p>
         </Styles.ContainerInformation>
         <Styles.ContainerListWorks>
            <a href="https://chronostime.netlify.app/" target="blank">
               <Styles.Card>
                 <img src={chronos} alt="Projeto Chronos" />
               </Styles.Card>
            </a>
            <a href="/" target="blank">
               <Styles.Card>
                  <img src={blockInline} alt="Projeto BlockInline" />
               </Styles.Card>
            </a>
         </Styles.ContainerListWorks>
      </Styles.ContainerPortifolio>
   );
}
