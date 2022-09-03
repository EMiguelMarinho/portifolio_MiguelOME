import * as Styles from './styles.js'

import { AiOutlineAntDesign } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

export const Header = ({ onMenu, setOnMenu}) => {
   const handleChangeStateMenu = () => {
     setOnMenu(true)
   }
   
   return (
      <Styles.ContainerHeader>
         <Styles.ContainerLogo>
            <AiOutlineAntDesign size="60px" color="white"/>
         </Styles.ContainerLogo>
         <Styles.BtnMenu>
            <GiHamburgerMenu onClick={handleChangeStateMenu} size="40px" color="white"/>
         </Styles.BtnMenu>
         <Styles.Navegation>
            <Styles.LinkNav color="#D9763D">
                  <a href="#Home">Home</a>
               </Styles.LinkNav>
               <Styles.LinkNav color="#FEFAF7">
                  <a href="#Sobre">Sobre</a>
               </Styles.LinkNav>
               <Styles.LinkNav color="#FEFAF7">
                  <a href="#Habilidades">Habilidades</a>
               </Styles.LinkNav>
               <Styles.LinkNav color="#FEFAF7">
                  <a href="#Portifolio">Portifólio</a>
               </Styles.LinkNav>
               <Styles.LinkNav color="#FEFAF7">
                  <a href="#Footer">Contato</a>
               </Styles.LinkNav>
         </Styles.Navegation>
      </Styles.ContainerHeader>
   );
}
