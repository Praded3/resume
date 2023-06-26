import React from 'react';
import { Container, Photo } from './SideBar.slyled';
import { Contacts } from './Contacts/Contacts';
import { TechSkillsAll } from './TechSkillsAll/TechSkillsAll';
import{ SoftSkils } from '../SideBar/TechSkillsAll/SoftSkills/SoftSkils'
import skills from '../../Assets/skills.json';

const SideBar = () => {
    return (
        <Container>
            <Photo src="./img/photo.jpg" alt="my photo" width="370"/>
            <Contacts />
            <TechSkillsAll skills={skills} />
            <SoftSkils/>
        </Container>);
}

export default SideBar;