import React, { Children }  from 'react';
import './App.css';
import Wrapper from './Components/Wrapper/Wrapper';
import Main from './Components/MainContent/MainContent';
import Projects from './Components/Projects/Projects';
import WorkExpirions from './Components/WorkExpirions/WorkExpirions'
import SideBar from './Components/SideBar/SideBar'



function App() {
  return (
    <Wrapper>
      <Main>
        <Projects />
        <WorkExpirions />
        
      </Main>
      <SideBar/>

    </Wrapper>
  );
}

export default App;
