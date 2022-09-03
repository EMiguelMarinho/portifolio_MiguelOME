import { FaBrain } from 'react-icons/fa';

import { SkillBar } from '../SkillBar';

import * as Styles from './styles.js'


export const Habilidades = () => {
   return (
      <Styles.ContainerHabilidades>
         <Styles.ContainerInformationHabilidades>
            <FaBrain color="#595959" size="200px"/>
            <Styles.Title>Habilidades</Styles.Title>
         </Styles.ContainerInformationHabilidades>
         <Styles.ContainerCards>
            <Styles.CardSkill bgColor="#D9763D">
               <div>
                  <h1>Frontend</h1>
                  <p>Representa a parte visual de um projeto. Toda estrutura de interação com o usuário está situada no frontend. Atualmente, é minha área de maior experiência na programação, e lhe afirmo que a captação de clientes está intrelassada ao visual do seu negócio.</p>
               </div>
               <div>
                  <h2>Skills</h2>
                  <ul>
                     <li>HTML 5 <SkillBar levelSkill="90%" bgColor="#243E73"/></li>
                     <li>CSS 3 <SkillBar levelSkill="87%" bgColor="#243E73"/></li>
                     <li>React <SkillBar levelSkill="85%" bgColor="#243E73"/></li>
                     <li>Jest <SkillBar levelSkill="75%" bgColor="#243E73"/></li>
                     <li>Styled Components <SkillBar levelSkill="84%" bgColor="#243E73"/></li>
                  </ul>
               </div>
            </Styles.CardSkill>
            <Styles.CardSkill bgColor="#243E73">
               <div>
                  <h1>Backend</h1>
                  <p>Como o nome sugere, é a parte por trás de uma aplicação. O usuário não vê, mas é toda a construção da estrutura de uma aplicação. Eu sou completamente apaixonado pelo backend, devido a sua possibilidade infinita de se criar algo. O frontend cria o como, mas o backend cria o que.</p>
               </div>
               <div>
                  <h2>Skills</h2>
                  <ul>
                     <li>NodeJs<SkillBar levelSkill="82%" bgColor="#D9763D"/></li>
                     <li>MongoDB <SkillBar levelSkill="80%" bgColor="#D9763D"/></li>
                     <li>MySQL <SkillBar levelSkill="78%" bgColor="#D9763D"/></li>
                     <li>API Rest <SkillBar levelSkill="90%" bgColor="#D9763D"/></li>
                     <li>Insomnia <SkillBar levelSkill="87%" bgColor="#D9763D"/></li>
                     <li>Git e Github <SkillBar levelSkill="86%" bgColor="#D9763D"/></li>
                  </ul>
               </div>
            </Styles.CardSkill>
         </Styles.ContainerCards>
      </Styles.ContainerHabilidades>
   );
}