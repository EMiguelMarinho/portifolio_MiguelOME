import { AiOutlineClose } from 'react-icons/ai';

import * as Styles from './styles'

export const MenuMobile = ({ onMenu, setOnMenu }) => {
   const handleChangeStateMenu = () => {
      setOnMenu(!onMenu)
   }
   
   return (
      <Styles.ContainerMenu visibleMenu={onMenu}>
         <Styles.ImgOutMenu>
            <AiOutlineClose size="40px" onClick={handleChangeStateMenu}/>
         </Styles.ImgOutMenu>
         <Styles.ListNavigation>
            <Styles.LinkNav color="#D9763D">
               <a href="#Home" onClick={handleChangeStateMenu}><li>Home</li></a>
            </Styles.LinkNav>
            <Styles.LinkNav color="#0D0D0D">
               <a href="#Sobre" onClick={handleChangeStateMenu}><li>Sobre</li></a>
            </Styles.LinkNav>
            <Styles.LinkNav color="#0D0D0D">
               <a href="#Habilidades" onClick={handleChangeStateMenu}><li>Habilidades</li></a>
            </Styles.LinkNav>
            <Styles.LinkNav color="#0D0D0D">
               <a href="#Portifolio" onClick={handleChangeStateMenu}><li>Portifólio</li></a>
            </Styles.LinkNav>
            <Styles.LinkNav color="#0D0D0D">
               <a href="#Footer" onClick={handleChangeStateMenu}><li>Contato</li></a>
            </Styles.LinkNav>
         </Styles.ListNavigation>
      </Styles.ContainerMenu>
   );
}