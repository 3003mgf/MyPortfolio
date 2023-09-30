import React, { useContext, useEffect, useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SocialIcon } from 'react-social-icons';
import { LanguageContext } from '../context/Language';
import { useLocation, useNavigate } from 'react-router-dom';


const NavBar = () => {
  const refAudioEs = useRef();
  const refAudioEn = useRef();
  const refAudioFr = useRef();
  const data = useContext(LanguageContext);
  const refCollapse = useRef();
  const { tr, lS, setLS, setTheme, theme } = data;
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () =>{
      if(window.screenY > 50){
        setScrolled(true);
      }else{
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinks = (e) =>{
    navigate(e.target.name);
  };


  const handleSpeak = (e) =>{
    if(!e.target.classList.contains("active")){
      if(lS === "en"){
        e.target.classList.add("active");
        refAudioEn.current.addEventListener("ended", ()=>{
          e.target.classList.remove("active");
        })
        refAudioEn.current.play();
      };
      if(lS === "es"){
        e.target.classList.add("active");
        refAudioEs.current.addEventListener("ended", ()=>{
          e.target.classList.remove("active");
        })
        refAudioEs.current.play();
      };
      if(lS === "fr"){
        e.target.classList.add("active");
        refAudioFr.current.addEventListener("ended", ()=>{
          e.target.classList.remove("active");
        })
        refAudioFr.current.play();
      };
    }
  };

  const handleCheck = (e) =>{
    if(e.target.checked){
      setTheme("light");
      console.log("dark");
    }else{
      setTheme("dark");
      console.log("light");
    }
  };


  return ( 
    <Navbar expand="lg" id='navbar-header' className={`${scrolled ? "scrolled" : ""} navbar-main-div ${theme === "dark" ? "dark" : ""}`}>
      <Container>
        <Navbar.Brand className='d-flex align-items-center gap-15'>
          <div>
            <audio src="/images/us.wav" ref={refAudioEn}></audio>
            <audio src="/images/spanish.wav" ref={refAudioEs}></audio>
            <audio src="/images/french.wav" ref={refAudioFr}></audio>
          </div>
          <div className={`logo-div ${theme === "dark" ? "dark" : ""}`}>
            <img src="images/robot-grey.svg" alt="" className='robot-icon' onClick={handleSpeak} />
          </div>
          <div className="flags" style={{marginLeft:"1rem"}}>
            <div className={`flag-div ${lS === "fr" && "active"}`}>
              <img src="/images/france-flag.svg" alt="abc" width={20} height={20} onClick={()=> setLS("fr")} />
            </div>
            <div className={`flag-div ${lS === "es" && "active"}`}>
              <img src="/images/spain-flag.svg" alt="abc" width={20} height={20} onClick={()=> setLS("es")} />
            </div>
            <div className={`flag-div ${lS === "en" && "active"}`}>
              <img src="/images/gb-flag.svg" alt="abc" width={20} height={20} onClick={()=> setLS("en")} />
            </div>
          </div>
      
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" ref={refCollapse}>
          <Nav className={`ms-auto modify px-5 d-flex justify-content-center align-items-center ${theme === "dark" ? "dark" : ""}`}>
            <Nav.Link className={pathname === "/" ? "navbar-link active"  : "navbar-link"} style={{color: theme === "dark" ? "#f5f5f7" : "#777777"}} name="/" onClick={handleLinks}>{tr[lS].headerHome}</Nav.Link>
            <Nav.Link className={pathname === "/projects" ? "navbar-link active"  : "navbar-link"} style={{color: theme === "dark" ? "#f5f5f7" : "#777777"}} name="/projects" onClick={handleLinks}>{tr[lS].headerProjects}</Nav.Link>            
            <Nav.Link className={pathname === "/skills" ? "navbar-link active"  : "navbar-link"} style={{color: theme === "dark" ? "#f5f5f7" : "#777777"}} name="/skills" onClick={handleLinks}>{tr[lS].headerSkills}</Nav.Link>            
          </Nav>
        <div className="social-icons-header navbar-text d-flex gap-20">
            {/* <img src="images/flag.svg" alt="abc" className='flag' /> */}
            <div className="checkbox-wrapper-5">
              <div className="check">
                <input id="check-5" type="checkbox" onChange={handleCheck} checked={theme === "light" ? true : false}/>
                <label for="check-5"></label>
              </div>
            </div>
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   );
}
 
export default NavBar;


/*<div className="social-icon d-flex justify-content-center align-items-center gap-15">
            <div className='social-icon-div-linkedin d-flex align-items-center justify-content-center'>
              <img src="images/linkedin.svg" alt="abc" />
            </div>
            <div className='social-icon-div-github d-flex align-items-center justify-content-center'>
              <img src="images/github.svg" alt="abc" className='github-icon1' />
              <img src="images/githubwhite.svg" alt="abc" className='github-icon2' />
            </div>
            <div className='social-icon-div-slack d-flex align-items-center justify-content-center'>
              <img src="images/slack.svg" alt="abc" className='slack-icon1' />
              <img src="images/slackwhite.svg" alt="abc" className='slack-icon2' />
            </div>
          </div> */