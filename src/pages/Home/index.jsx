import { GlobalStyle } from '../../styles/globalStyle';
import * as Styles from './styles'

import { Header } from '../../components/header';
import { Home } from '../../components/Home';
import { Sobre } from '../../components/Sobre';
import { Habilidades } from '../../components/Habilidades';
import { Portifolio } from '../../components/Portifolio';
import { Footer } from '../../components/footer';
import { MenuMobile } from '../../components/MenuMobile';
import { useState } from 'react';

export const HomePage = () => {
   const [ onMenu, setOnMenu] = useState(false)
   
   return (
      <Styles.ContainerHome id="HomePage">
         <GlobalStyle />
         <header>
            <MenuMobile onMenu={onMenu} setOnMenu={setOnMenu}/>
            <Header onMenu={onMenu} setOnMenu={setOnMenu}/>
         </header>
         <main>
            <div id="Home">
               <Home />
            </div>
            <div id="Sobre">
               <Sobre />
            </div>
            <div id="Habilidades">
               <Habilidades />
            </div>
            <div id="Portifolio">
               <Portifolio />
            </div>
            <div id="Footer">
               <Footer />
            </div>
         </main>
      </Styles.ContainerHome>
   )
}