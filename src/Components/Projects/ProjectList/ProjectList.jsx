import React from 'react';
import {  ProjectList } from './ProjectList.styled'
import { ProjectListItem } from '../ProjectItem/ProjectItem';


export const ProjectsAll = ({projects}) => {
    return (
        <ProjectList>
            {projects.map(({ id, href, technology, rep }) => {
                return (
                    <ProjectListItem
                        key={id}
                        href={href}
                        technology={technology}
                        repository={rep}
                    />
                );
            })
            }        
        </ProjectList>);
}
