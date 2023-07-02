import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/Language';

const Skills = () => {
  const data = useContext(LanguageContext);

  const { tr, lS, theme, setTheme } = data;

  useEffect(() => {
    let getTheme = localStorage.getItem("theme");
    if(getTheme){
      setTheme(getTheme);
    }
  }, []);

  const [module1, setModule1] = useState(false);
  const [module2, setModule2] = useState(false);
  const [module3, setModule3] = useState(false);
  const [module4, setModule4] = useState(false);

  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [extras, setExtras] = useState(false);

  return ( 
    <Container className='skill-padding'>
      <Row>
        <Col xs={12} md={12} xl={12} className='py-4 mb-3'>
        <div className='skills-wrapper'>
          <div className="container d-flex justify-content-center">
            <h2>Surf in my Skills</h2>
            <h2>Surf in my Skills</h2>
          </div>
        </div>
        </Col>
        <Col xs={12} md={12} xl={7} className='py-4 mt-5 d-flex justify-content-center'>
            <div className='intro'>
              
              {/* QUESTION 1 */}
              <div className={`q1-div ${theme === "dark" ? "dark" : ""}`}>
                <div>
                  {question1 ? 
                    <div><i className="fa-solid fa-angle-down me-1 mb-4" onClick={()=> setQuestion1(false)}></i><b>{tr[lS].q1}</b></div>
                    :
                    <div><i className="fa-solid fa-angle-right me-1 mb-4" onClick={()=> setQuestion1(true)}></i><b>{tr[lS].q1}</b></div>
                  }
                </div>
                {question1 && <div dangerouslySetInnerHTML={{__html: tr[lS].a1}}></div>
                }
              </div>

              {/* QUESTION 2 */}
              <div className={`q2-div ${theme === "dark" ? "dark" : ""}`}>
                <div>
                  {question2 ? 
                    <div><i className="fa-solid fa-angle-down me-1 mt-5 mb-4" onClick={()=> setQuestion2(false)}></i><b>{tr[lS].q2}</b></div>
                    :
                    <div><i className="fa-solid fa-angle-right me-1 mt-5 mb-4" onClick={()=> setQuestion2(true)}></i><b>{tr[lS].q2}</b></div>
                  }
                </div>
                {question2 && <div>
                  <p><span className='js-course'>JavaScript Course</span> by <b>Jon Mircha</b></p>
                  <p>{tr[lS].p1}</p>
                  <p>{tr[lS].p2}</p>
                  <p>{tr[lS].p3} <b>Syntax, Grammar, Logic, EcmaScript, POO, Asynchrony, DOM, AJAX, JSON, API's, Node {tr[lS].p4}.</b></p>
                  <p>{tr[lS].syllabus} <i className="fa-solid fa-link fa-small" onClick={()=> window.open("https://aprendejavascript.org/")}></i></p>

                  <p className='pt-4'><span className="react-course">React Course</span> by <b>Jon Mircha</b></p>
                  <p>{tr[lS].p5}</p>
                  <p>{tr[lS].p6}</p>
                  <p>{tr[lS].syllabus} <i className="fa-solid fa-link fa-small" onClick={()=> window.open("https://www.youtube.com/playlist?list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk")}></i></p>
                  
                  <p className='pt-4'><span className="node-course">Node.js Course</span> by <b>Jon Mircha</b></p>
                  <p>{tr[lS].p8}</p>
                  <p>{tr[lS].p9}</p>
                  <p>{tr[lS].syllabus} <i className="fa-solid fa-link fa-small" onClick={()=> window.open("https://www.youtube.com/playlist?list=PLvq-jIkSeTUY3gY-ptuqkNEXZHsNwlkND")}></i></p>
                  
                  <p className='pt-4'><span className="webpack-course">WebPack Course</span> by <b>Jon Mircha</b></p>
                  <p>{tr[lS].p10}</p>
                  <p>{tr[lS].p11}</p>
                  <p>{tr[lS].syllabus} <i className="fa-solid fa-link fa-small" onClick={()=> window.open("https://www.youtube.com/watch?v=-bp3q-YTr4Q")}></i></p>
                  
                  <p className='pt-4'><span className="pws-course">Progressive Web App Course</span> by <b>Jon Mircha</b></p>
                  <p>{tr[lS].p12} <a href="https://3003mgf.github.io/TestingProgressiveWebApp/">My PWA</a></p>
                  <p>{tr[lS].p13}</p>
                  <p>{tr[lS].syllabus} <i className="fa-solid fa-link fa-small" onClick={()=> window.open("https://www.youtube.com/playlist?list=PLvq-jIkSeTUYIw8CP2AP7QJs4GeeZdvs6")}></i></p>
                  
                  <p className='pt-4'><span className="henry-course">Henry Bootcamp</span> by <img src="https://assets.soyhenry.com/logos/ISOLOGO_HENRY_BLACK.png" width={60} alt="abc"/></p>
                  <p>{tr[lS].p14}</p>
                  <div className='d-flex flex-column gap-30 pb-5'>
                    <div>
                      {module1 ? 
                        <div><i className="fa-solid fa-angle-down me-1" onClick={()=> setModule1(false)}></i><b>Module 1 - Foundations (27 Hours)</b></div>
                        :
                        <div><i className="fa-solid fa-angle-right me-1" onClick={()=> setModule1(true)}></i><b>Module 1 - Foundations (27 Hours)</b></div>

                      }
                      {module1 && <ul>
                        <li>Single Threaded & Synchronus</li>
                        <li>Interpretation</li>
                        <li>Weak Typing</li>
                        <li>Closures</li>
                        <li>Context Methods</li>
                        <li>Recursivity</li>
                        <li>Queues & Stacks</li>
                        <li>Hash Table</li>
                        <li>Linked Lists</li>
                        <li>Binary Trees</li>
                        <li>Quick Sort</li>
                        <li>Merge Sort</li>
                        <li>Algorythms</li>
                        <li>Algorythms Eficiency</li>
                        <li>Sorting Data</li>
                      </ul>}

                    </div>
                    <div>
                      {module2 ? 
                        <div><i className="fa-solid fa-angle-down me-1" onClick={()=> setModule2(false)}></i><b>Module 2 - Front End (42 Hours)</b></div>
                        :
                        <div><i className="fa-solid fa-angle-right me-1" onClick={()=> setModule2(true)}></i><b>Module 2 - Front End (42 Hours)</b></div>

                      }
                      {module2 && <ul>
                        <li>Advanced DOM</li>
                        <li>Advanced CSS</li>
                        <li>ES6 Selectors</li>
                        <li>AJAX</li>
                        <li>Modules & Bundlers</li>
                        <li>React Intro</li>
                        <li>React Styles</li>
                        <li>React Life-Cycle</li>
                        <li>React Routing</li>
                        <li>React Forms</li>
                        <li>Redux</li>
                        <li>React Redux</li>
                        <li>React Hooks</li>
                      </ul>}

                    </div>
                    <div>
                      {module3 ? 
                        <div><i className="fa-solid fa-angle-down me-1" onClick={()=> setModule3(false)}></i><b>Module 3 - Back End (21 Hours)</b></div>
                        :
                        <div><i className="fa-solid fa-angle-right me-1" onClick={()=> setModule3(true)}></i><b>Module 3 - Back End (21 Hours)</b></div>

                      }
                      {module3 && <ul>
                        <li>Node JS</li>
                        <li>Web Server</li>
                        <li>Promises</li>
                        <li>Advanced Promises</li>
                        <li>Express</li>
                        <li>Async Await</li>
                        <li>Testing</li>
                      </ul>}

                    </div>

                    <div>
                      {module4 ? 
                        <div><i className="fa-solid fa-angle-down me-1" onClick={()=> setModule4(false)}></i><b>Module 4 - Data Base (15 Hours)</b></div>
                        :
                        <div><i className="fa-solid fa-angle-right me-1" onClick={()=> setModule4(true)}></i><b>Module 4 - Data Base (15 Hours)</b></div>

                      }
                      {module4 && <ul>
                        <li>DBMS</li>
                        <li>SQL</li>
                        <li>ORM</li>
                        <li>ORM II</li>
                        <li>Authentication (JWT - BCrypt)</li>
                      </ul>}
                    </div>
                  </div>
                </div>
                }
              </div>

              {/* QUESTION 3 */}
              <div className={`py-5 q3-div ${theme === "dark" ? "dark" : ""}`}>
                <div>
                  {question3 ? 
                    <div><i className="fa-solid fa-angle-down me-1 mb-4" onClick={()=> setQuestion3(false)}></i><b>{tr[lS].q3}</b></div>
                    :
                    <div><i className="fa-solid fa-angle-right me-1 mb-4" onClick={()=> setQuestion3(true)}></i><b>{tr[lS].q3}</b></div>
                  }
                </div>
                {question3 && <div className='d-flex flex-wrap gap-35 db'>
                  <div className='d-flex flex-column gap-10'>
                    <div className='mongodb-div'>
                      <img src="images/mongodb.svg" alt="abc" width={120} height={120} />
                    </div>
                    <span className='text-center mt-4'>MongoDB</span>
                  </div>
                  <div className='d-flex flex-column gap-10'>
                    <div className='mysql-div'>
                      <img src="images/mysql.svg" alt="abc" />
                    </div>
                    <span className='text-center mt-4'>My SQL</span>
                  </div>
                  <div className='d-flex flex-column ms-5 gap-10'>
                    <div className='postgres-div'>
                      <img src="images/postgres.svg" alt="abc" />
                    </div>
                    <span className='text-center mt-4'>Postgres</span>
                  </div>

                  <div className='d-flex justify-content-center'><i className="fa-solid fa-plus d-flex justify-content-center align-items-center"></i></div>
                  
                  <div className='d-flex flex-column gap-10'>
                    <div className='sequelize-div'>
                      <img src="images/sequelize.svg" alt="abc" />
                    </div>
                    <span className='text-center mt-4'>Sequelize</span>
                  </div>
                </div>
                }
              </div>

              {/* LIBRARIES */}
              <p className='pt-5'><span className='extra-course'><b>Extras</b></span></p>
              <p className={`extras ${theme === "dark" ? "dark" : ""}`}>{tr[lS].extras}</p>
              
              <div className={`extras-icon ${theme === "dark" ? "dark" : ""}`}>
                {extras ? 
                  <i className="fa-solid fa-eye-slash me-1 mb-4 fa-xl d-flex justify-content-center pt-4" onClick={()=> setExtras(false)}></i>
                  :
                  <i className="fa-solid fa-eye me-1 mb-4 fa-xl d-flex justify-content-center pt-4" onClick={()=> setExtras(true)}></i>
                }
              </div>
              
              {extras && <p className={`librarys d-flex flex-column gap-20 align-items-center text-center w-100 pt-5 ${theme === "dark" ? "dark" : ""}`}>
              <span>Ant Design</span>
              <span>Ant Design Charts</span>
              <span>Axios</span>
              <hr />
              <span>BootStrap</span>
              <span>Bcrypt</span>
              <span>Body-Parser</span>
              <hr />
              <span>Cloudinary</span>
              <span>Crypto</span>
              <span>Cookie Parser</span>
              <span>Cookie Session</span>
              <span>Clip Path CSS</span>
              <hr />
              <span>Dialog Flow</span>
              <span>Dotoenv</span>
              <hr />
              <span>Express</span>
              <span>express-async-handler</span>
              <span>EJS</span>
              <hr />
              <span>Formidable</span>
              <span>Fetch</span>
              <span>Fs-Extra</span>
              <span>Favicon Handlers</span>
              <span>Figma</span>
              <span>FormSubmit</span>
              <hr />
              <span>GitHub Pages</span>
              <span>Grunt</span>
              <span>Ghost</span>
              <hr />
              <span>JsonWebToken</span>
              <span>JQuery</span>
              <span>Jade (Pug.JS)</span>
              <hr />
              <span>MongoDB Atlas</span>
              <span>MongoDB Compass</span>
              <span>Multer</span>
              <span>Marquee</span>
              <span>Morgan</span>
              <hr />
              <span>Nodemon</span>
              <span>Netlify</span>
              <span>Node DevTools</span>
              <span>NodeMailer</span>
              <hr />
              <span>PG-Admin & PG-Shell</span>
              <span>PM2</span>
              <span>PayPal API</span>
              <span>Postman</span>
              <span>PHP (Basic Level)</span>
              <hr />
              <span>Railway</span>
              <span>Redux DevTools</span>
              <span>Redux Toolkit</span>
              <span>React DevTools</span>
              <span>React OAuth Google</span>
              <span>React-Image-Zoom</span>
              <span>React-Share</span>
              <span>React-Helmet</span>
              <span>React Rating Stars Component</span>
              <span>React Quill</span>
              <span>React Flag</span>
              <span>React Stepper</span>
              <span>React Widgets</span>
              <span>React Toastify</span>
              <span>React Bootstrap</span>
              <hr />
              <span>Stripe</span>
              <span>Sharp</span> 
              <span>Slugify</span>
              <span>SCSS</span>
              <span>Supervisor</span>
              <span>SweetAlert</span>
              <hr />
              <span>Template Engines</span>
              <span>Wappalizer</span>
              <span>XML Http Request</span>
              <span>XAMPP</span>
              <span>Yup</span>
              </p>
              }

            </div>
        </Col>
      </Row>
    </Container>
   );
}
 
export default Skills;


/* <div className='d-flex align-items-center flex-wrap'>
          <div className='d-flex justify-content-between align-items-start'>
            <div className='skill-img-div'>
              <img src="images/js.svg" alt="" />
            </div>
            <div>
              <p>Advanced knowledge </p>
            </div>
          </div>
        </div>*/