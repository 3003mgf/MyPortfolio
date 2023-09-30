import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { LanguageContext } from '../context/Language';
import { useNavigate } from 'react-router-dom';

const SPTemplate = ({languages, title, img, description, linkSource, linkWeb, frontLib, backLib, backExist, database, frameworkExist, framework, frontLibExist, dbExist}) => {
  
  const data = useContext(LanguageContext);
  const { theme }  = data;
  const navigate = useNavigate();
  
  
  return ( 
    <div style={{position:"relative"}}>
      <div className="back-2-p" onClick={()=> navigate("/projects")}>
        <i className="fa-solid fa-angle-left fa-xl"></i>
      </div>
      <Container>
      <div className="single-p-wrapper" style={{marginTop:"11rem", marginBottom:"10rem"}}>
        <div className={`sp-title ${theme === "dark" ? "dark" : ""}`}>
          <p>{title}</p>
        </div>
        <div className='single-container'>
          <div className='single-project-first-div'>
            <div className='sp-img'>
              <img src={img} alt="abc" />
            </div>
            <div className='single-description d-flex flex-column' style={{padding:"1rem"}}>
              <div className='sp-desc'>
                <p>About this project</p>
                <p dangerouslySetInnerHTML={{__html: description}}></p>
              </div>
              <div className='sp-icons'>
                <i className="fa-brands fa-github fa-2xl" onClick={()=> window.open(linkSource)}></i>
                <i className="fa-solid fa-link fa-lg" onClick={()=> window.open(linkWeb)}></i>
              </div>
            </div>
          </div>
          <div className='single-project-sec-div'>
            {/* FRONT END */}
            <div className={`front-title ${theme === "dark" ? "dark" : ""}`} >
              <h2 data-text="FRONT END...">Front End...</h2>
            </div>
            <div className="sp-front-sections">
              <div className='sp-section d-flex flex-column' style={{marginBottom:"2rem"}} >
                <span className={`first-span ${theme === "dark" ? "dark" : ""}`}>Languages</span>
                {
                languages ?
                  <div style={{paddingLeft:"0.5rem"}}>
                    {languages.map((el, index) => <span key={index} className={`sp-span ${theme === "dark" ? "dark" : ""}`}><img src={el === "JavaScript" ? "/images/js.svg" : el === "HTML" ? "/images/html.svg" : el === "CSS" ? "/images/css.svg" : ""} alt="abc" width={20} height={20} />{el}</span>)}
                  </div>
                :
                  <div style={{paddingLeft:"0.5rem"}}>
                    <span className={`sp-span ${theme === "dark" ? "dark" : ""}`}><img src="/images/js.svg" alt="abc" width={20} height={20} /> JavaScript</span>
                    <span className={`sp-span ${theme === "dark" ? "dark" : ""}`}><img src="/images/html.svg" alt="abc" width={20} height={20} />HTML</span>
                    <span className={`sp-span ${theme === "dark" ? "dark" : ""}`}><img src="/images/css.svg" alt="abc" width={20} height={20} />CSS</span>
                  </div>
                }
              </div>

              {frameworkExist && <div className="sp-section d-flex flex-column" style={{marginBottom:"2rem"}} >
                <span className={`first-span ${theme === "dark" ? "dark" : ""}`}>Frameworks</span>
                <div style={{paddingLeft:"0.5rem"}}>
                  <span className={`sp-span ${theme === "dark" ? "dark" : ""}`}><img src={framework ? framework === "Tailwind CSS" ? "/images/tailwind.svg" : "" : "/images/bootstrap.svg"} alt="abc" width={20} height={20} />{framework ? framework : "Bootstrap"}</span>
                </div>
              </div>}
      
              {frontLibExist && <div className='sp-section-libraries-front d-flex flex-column'>
                <span className={`first-span ${theme === "dark" ? "dark" : ""}`}>Libraries</span>
                <div style={{paddingLeft:"0.5rem"}}>
                  {frontLib && frontLib.map((el, index) => <span className={`sp-span ${theme === "dark" ? "dark" : ""}`} key={index}>{el}</span>)}
                </div>
              </div>}
            </div>

            {/* BACK END */}
            {backExist && 
            <div>
              <div className={`back-title ${theme === "dark" ? "dark" : ""}`} style={{marginTop:"3rem"}}>
                  <h2 data-text="BACK END...">Back End...</h2>
              </div>
              <div className="sp-back-sections">
                  <div className='sp-section d-flex flex-column' style={{marginBottom:"2rem"}} >
                    <span className={`first-span ${theme === "dark" ? "dark" : ""}`}>Languages</span>
                    <div style={{paddingLeft:"0.5rem"}}>
                      <span className={`sp-span ${theme === "dark" ? "dark" : ""}`}><img src="/images/js.svg" alt="abc" width={20} height={20} /> JavaScript</span>
                    </div>
                  </div>
                  <div className='sp-section d-flex flex-column' style={{marginBottom:"2rem"}} >
                    <span className={`first-span ${theme === "dark" ? "dark" : ""}`}>Environment</span>
                    <div style={{paddingLeft:"0.5rem"}}>
                      <span className={`sp-span ${theme === "dark" ? "dark" : ""}`}><img src="/images/node-js.svg" alt="abc" width={20} height={20} /> Node JS</span>
                    </div>
                  </div>
                  {dbExist && <div className='sp-section d-flex flex-column' style={{marginBottom:"2rem"}} >
                    <span className={`first-span ${theme === "dark" ? "dark" : ""}`}>DataBase</span>
                    <div style={{paddingLeft:"0.5rem"}}>
                      <span className={`sp-span ${theme === "dark" ? "dark" : ""}`}><img src={database === "Mongo DB" ? "/images/mongodb.svg" : "/images/postgres.svg"} alt="abc" width={20} height={20} />{database}</span>
                    </div>
                  </div>}
                  <div className='sp-section-libraries-back d-flex flex-column'>
                    <span className={`first-span ${theme === "dark" ? "dark" : ""}`}>Libraries</span>
                    <div style={{paddingLeft:"0.5rem"}}>
                      {backLib && backLib.map((el, index) => <span className={`sp-span ${theme === "dark" ? "dark" : ""}`} key={index}>{el}</span> )}
                    </div>
                  </div>
                </div>
            </div>}
          </div>
        </div>
      </div>
      </Container>
    </div>
   );
}
 
export default SPTemplate;