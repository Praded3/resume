import React from 'react';
import { TechSkillsItem, TechSkillsDescription } from '../TechSkillsItem/TechSkilsItem.styled';


export const TechSkillsItems = ({ id, lable }) => {
    return (
        <TechSkillsItem key={id}>
            <TechSkillsDescription>
                {lable}
            </TechSkillsDescription>
        </TechSkillsItem>
    );
};