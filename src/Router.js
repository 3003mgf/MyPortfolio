import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SkillPage from './pages/SkillsPage';
import Projects from './pages/Projects';
import SingleProject from './pages/SingleProject';

const Router = () => {
  return ( 
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/skills" element={<SkillPage/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/project/:id" element={<SingleProject/>}/>
      </Routes>
    </HashRouter>
   );
}
 
export default Router;