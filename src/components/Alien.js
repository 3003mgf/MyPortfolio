import React, { useContext, useReducer } from 'react';
import { Container } from 'react-bootstrap';
import { LanguageContext } from '../context/Language';

const Alien = () => {

  const data = useContext(LanguageContext);

  const { theme } = data;

  return ( 
    <Container className={`d-flex justify-content-center alien-divy ${theme === "dark" ? "dark" : ""}`}>
        
        <div className="alien-container">
        <div className="ovni on">
          <div className="ovni-beam-container">
            <div className="ovni-beam"></div>

            <div className="cow-abducted">
              <div className="cow-container">
                <div className="cow">
                  <div className="cow-head-container">
                    <div className="ears">
                      <div className="cow-ear left"></div>
                      <div className="cow-ear right"></div>
                    </div>
                    <div className="cow-head">
                      <div className="horns">
                        <div className="cow-horn left"></div>
                        <div className="cow-horn right"></div>
                      </div>
                      <div className="eyes">
                        <div className="eye left"></div>
                        <div className="eye right"></div>
                      </div>
                    </div>
                    <div className="mouth"></div>
                  </div>
                  <div className="body"></div>
                </div>
              </div>
            </div>

          </div>
          <div className="ovni-gate"></div>
          <div className="ovni-under-ring"></div>
          <div className="ovni-ring"></div>
          <div className="ovni-pod">

            <div className="alien-container">
              <div className="alien">
                <div className="eyes">
                  <div className="eye left"></div>
                  <div className="eye right"></div>
                </div>
                <div className="mouth"></div>
              </div>
              <div className="hands">
                <div className="hand-group left">
                  <div className="handle left"></div>
                  <div className="hand left"></div>
                </div>
                <div className="hand-group right">
                  <div className="handle right"></div>
                  <div className="hand right"></div>
                </div>
              </div>
            </div>

          </div>
        </div>



      </div>
    </Container>
   );
}
 
export default Alien;