import React, { useContext, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Alien from '../components/Alien';
import MyProjects from '../components/MyProjects';
import { LanguageContext } from '../context/Language';

const Projects = () => {
  const data = useContext(LanguageContext);

  const { tr, lS, theme, setTheme} = data;

  useEffect(() => {
    window.scrollTo(0, 0);
    let getTheme = localStorage.getItem("theme");
    if(getTheme){
      setTheme(getTheme);
    }
  }, []);
 

  return ( 
    <div className={`my-project-main-div ${theme === "dark" ? "dark" : ""}`} style={{paddingBottom:"0rem"}}>
      <NavBar/>
      <MyProjects/>
      <div className={`p-title ${theme === "dark" ? "dark" : ""}`}>
        <p dangerouslySetInnerHTML={{__html: tr[lS].alien}}></p>
      </div>
      <Alien/>
    </div>
   );
}
 
export default Projects;