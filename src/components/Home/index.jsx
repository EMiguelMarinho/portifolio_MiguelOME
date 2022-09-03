import * as Styles from './styles.js'

export const Home = () => {
   return(
      <Styles.ContainerHome>
         <Styles.ContainerInformation>
            <h1>Eliseu Miguel</h1>
            <h2>Desenvovedor Fullstack</h2>
            <Styles.ContainerButtons>
               <a href="#Portifolio"><Styles.ButtonHome bg="#D9763D" color="#0D0D0D">Portifolio</Styles.ButtonHome></a>
               <a href="#Footer"><Styles.ButtonHome bg="white" color="#0D0D0D">Contato</Styles.ButtonHome></a>
            </Styles.ContainerButtons>
         </Styles.ContainerInformation>
      </Styles.ContainerHome>
   )
}