import React from 'react';
import {
    Container, Title, WorkExpirionsPlace,
    JobTitle, WorkExpirionsTime, WorkDuties,
    WorkExpirionsCompany, EducationPlace, Profession
} from './WorkExpirions.styled';

const WorkExpirions = () => {
    return (
        <Container>
            <Title>
                Work Experience
            </Title>
            <WorkExpirionsPlace>
                <JobTitle>
                    Self-employed{' '} 
                    <WorkExpirionsCompany>
                        individual entrepreneur
                    </WorkExpirionsCompany>
                </JobTitle>
                    <WorkExpirionsTime>
                        March 2017 - until now
                        | Ukraine
                    </WorkExpirionsTime>
                    <WorkDuties>
                        Trade in electronics and spare parts.
                    </WorkDuties>
                    <WorkDuties>
                        Setting up computer equipment and mining equipment.
                    </WorkDuties>
                
            </WorkExpirionsPlace>
            <WorkExpirionsPlace>
                <JobTitle>
                    Assistant manager{' '} 
                    <WorkExpirionsCompany>
                        "AVANTYURA" LLC.
                    </WorkExpirionsCompany>
                </JobTitle>
                <WorkExpirionsTime>
                        May 2015 - February 2017 | Ukraine
                    </WorkExpirionsTime>
            </WorkExpirionsPlace>
            <WorkExpirionsPlace>
                <JobTitle>
                    Education 
                    </JobTitle>
                    <EducationPlace>
                        Volodymyr Vynnychenko Kirovohradskyi state pedagogical
                            University
                    </EducationPlace>
                
                <Profession>
                    Science of law
                </Profession>
                <WorkExpirionsTime>
                        September 2011 - June 2015
                    </WorkExpirionsTime>
            </WorkExpirionsPlace>
        </Container>);
}

export default WorkExpirions;