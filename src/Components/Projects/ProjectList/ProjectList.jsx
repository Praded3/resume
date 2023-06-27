import React from 'react';
import {  ProjectList } from './ProjectList.styled'
import { ProjectListItem } from '../ProjectItem/ProjectItem';


export const ProjectsAll = ({projects}) => {
    return (
        <ProjectList>
            {projects.map(({ id, href, technology, rep, name }) => {
                return (
                    <ProjectListItem
                        key={id}
                        href={href}
                        technology={technology}
                        repository={rep}
                        name={name}
                    />
                );
            })
            }        
        </ProjectList>);
}
