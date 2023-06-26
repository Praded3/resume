import React from 'react';
import { TechSkillsContainer, Title, SkillsList } from './TechSkillsAll.styled';
import { TechSkillsItems } from './TechSkillsItem/TechSkilsItem'

export const TechSkillsAll = ({skills}) => {
    return (
        <TechSkillsContainer>
            <Title>
                Tech Skills
            </Title>
            <SkillsList>
                 {skills.map(({ id, lable }) => {
                return (
                    <TechSkillsItems
                        key={id}
                        lable={lable}/>
                );
            }) 
            }  
            </SkillsList>
        </TechSkillsContainer>);
}

 