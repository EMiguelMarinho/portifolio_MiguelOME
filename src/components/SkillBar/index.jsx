import * as Styles from './styles.js'

export const SkillBar = ({ levelSkill, bgColor }) => {
   return (
      <Styles.ContainerSkillBar>
         <Styles.ContainerLevelSkillBar>
            <Styles.LevelSkill levelSkill={levelSkill} bgColor={bgColor}/>
         </Styles.ContainerLevelSkillBar>
            <Styles.PorcentSkill>{levelSkill}</Styles.PorcentSkill>
      </Styles.ContainerSkillBar>
   );
}