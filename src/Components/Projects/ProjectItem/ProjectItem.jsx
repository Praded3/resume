import React from 'react';
import { Item, ProjectLink, ProjectSpan } from './ProjectItem.styled';


export const ProjectListItem = ({ id, href, technology,repository, link }) => {
    return (
        <Item key={id}>
            <ProjectLink href={href} target="_blank">
                {href}
            </ProjectLink>
            <ProjectSpan>
                {technology}
            </ProjectSpan>


            <ProjectLink href={repository} target="_blank">
                <ProjectSpan>
                Code on github
            </ProjectSpan>
            </ProjectLink>
            
        </Item>
    );
};