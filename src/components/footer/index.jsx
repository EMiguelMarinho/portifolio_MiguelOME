import { FiGithub } from 'react-icons/fi';
import { RiLinkedinFill } from 'react-icons/ri';
import { GrMail } from 'react-icons/gr';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';

import * as Styles from './styles'

export const Footer = () => {
   return (
      <Styles.ContainerFooter>
         <Styles.ContainerContato>
            <a href="https://github.com/EMiguelMarinho" target="blank">
               <Styles.ContainerLogo>
                  <FiGithub size="25px" color="#0D0D0D"/>
               </Styles.ContainerLogo>
            </a>
            <a href="https://www.linkedin.com/in/eliseu-miguel-marinho-de-oliveira-7760621b3/" target="blank">
               <Styles.ContainerLogo>
                  <RiLinkedinFill size="25px" color="#0D0D0D"/>
               </Styles.ContainerLogo>
            </a>
            <a href="mailto:mguelmarinhoe@hotmail.com" target="blank" >
               <Styles.ContainerLogo>
                  <GrMail size="25px" color="#0D0D0D"/>
               </Styles.ContainerLogo>
            </a>
            <a href="https://wa.me/5573991920444" target="blank">
               <Styles.ContainerLogo>
                  <AiOutlineWhatsApp size="25px" color="#0D0D0D"/>
               </Styles.ContainerLogo>
            </a>
            <a href="https://t.me/miguel_eliseu" target="blank">
               <Styles.ContainerLogo>
                  <FaTelegramPlane size="25px" color="#0D0D0D"/>
               </Styles.ContainerLogo>
            </a>
         </Styles.ContainerContato>
         <Styles.InformationFooter>
            <p>Copyright © 2022 | Eliseu Miguel</p>
         </Styles.InformationFooter>
      </Styles.ContainerFooter>
   );
}
