import React from 'react';
import { Item, ProjectLink, ProjectSpan } from './ProjectItem.styled';


export const ProjectListItem = ({ id, href, technology }) => {
    return (
        <Item key={id}>
            <ProjectLink href={href} target="_blank">
                {href}
            </ProjectLink>
            <ProjectSpan>
                {technology}
            </ProjectSpan>
            
        </Item>
    );
};