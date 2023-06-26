import React from 'react';
import { MainContent, AboutMeContainer, MyProf, Name, MyDescription } from './MainContent.styled';

const Main = ( {children} ) => {
    return (
        <MainContent>
            <AboutMeContainer>
                <MyProf>
                    Objective: Intern/ junior FrontEnd developer
                </MyProf>
                <Name>
                    Oleksandr Pradidenko  
                </Name>
                <MyDescription>
                    My name is Oleksandr and I am looking for a job as front-end developer. My expertise
                    lies in building projects for the web using
                    wide arsenal of technologies with strong emphasis on pixel perfect responsive design, usability
                    testing and
                    cross browser compatibility. As a junior I am always ready for new challenges and can absorb new
                    information as much as possible. 
                </MyDescription>
                {children}
            </AboutMeContainer>
        </MainContent>
    );
}

export default Main;