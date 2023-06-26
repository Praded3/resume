import React from 'react';
import { ProjectContainer, MainContectTitle } from './Projects.styled';
import { ProjectsAll } from './ProjectList/ProjectList';
import projects from '../../Assets/projects.json';


const Projects = () => {
    return (
        <ProjectContainer>
            <MainContectTitle>
                Projects
            </MainContectTitle>
            <ProjectsAll  projects={projects}/>
        </ProjectContainer>);
}

export default Projects;