import styled, { css } from 'styled-components';

export const ContainerSkillBar = styled.div`
   margin-top: -8px;
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: flex-end;
`;

export const ContainerLevelSkillBar = styled.div`
   width: 80%;
   height: 7px;
   border: 1px solid #0C1526;
   border-radius: 10px;
   margin-bottom: 7px;
`;

export const LevelSkill = styled.div`
   height: 100%;
   
   ${({ levelSkill, bgColor }) => css`
      width: ${levelSkill};
      background-color: ${bgColor};
   `}
`;

export const PorcentSkill = styled.div`
   width: 20%;
   margin-left: 15px;
`;