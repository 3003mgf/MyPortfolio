import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { LanguageContext } from '../context/Language';

const Landing = () => {
  const data = useContext(LanguageContext);
  const { tr, lS, setLS } = data;

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  const toRotate = [tr[lS].mainP1, tr[lS].mainP2, tr[lS].mainP3];

  useEffect(() => {
    let ticker = setInterval(()=>{
      tick();
    },delta);

    return () => {clearInterval(ticker)}
  }, [text]);

  const tick = () =>{
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
    setText(updatedText);

    if(isDeleting){
      setDelta(prevDelta => prevDelta /2)
    };

    if(!isDeleting && updatedText === fullText){
      setIsDeleting(true);
      setDelta(period);
    }else if(isDeleting && updatedText === ""){
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return ( 
    <section className="landing" id="home">
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'>{tr[lS].mainWelcome}</span>
            <h1 className='mt-5'>{tr[lS].mainHey} <span className='wrap'>{text}</span></h1>
          </Col>
          <Col xs={12} md={6} xl={5}>
              <img src="images/robot3d2.png" alt="" className='robot3d' />
          </Col>
        </Row>
      </Container>
    </section>
   );
}
 
export default Landing;