import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../context/Language';

const MPProject = ({img, title, description, link, linkGit}) => {
  
  const navigate = useNavigate();
  const data = useContext(LanguageContext);

  const { theme } = data;

  return ( 
    <div className={`my-project-div ${theme === "dark" ? "dark" : ""}`}>
        <div className="mp-img">
          <img src={img} alt="abc" width={250} />
        </div>
        <div className="mp-description">
          <p className='d-flex justify-content-between align-itmes-center'>
            {title}
            <i className="fa-solid fa-eye" onClick={()=> navigate(`/project/${title.replaceAll(" ", "")}`)}></i>
          </p>
          <p style={{height:"105px"}} dangerouslySetInnerHTML={{__html: description.length > 160 ? description.slice(0, 166) + "…" : description}}></p>
        </div>
        <div className="mp-links d-flex align-items-center gap-10" style={{padding:"0rem 1rem"}}>
          <i className="fa-brands fa-github" onClick={()=> window.open(linkGit, "_blank")}></i>
          <i className="fa-solid fa-link fa-sm" onClick={()=> window.open(link, "_blank")}></i>
        </div>
      </div>
   );
}
 
export default MPProject;