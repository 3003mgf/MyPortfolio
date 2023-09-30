import React, { useContext } from 'react'
import { LanguageContext } from '../context/Language';

const ComingSoon = ({description, linkGit, link}) => {

  const data = useContext(LanguageContext);

  const { tr, lS, theme } = data;

  return ( 
    <div className='comingSoon'>
      <div className='comingSoonStamp'>
        <span></span>
      </div>
      <div className="comingSoonCover">
        <div className='comingSoonCover1'>
          <div className='comingSoonCoverSpan1'>
            <span>{tr[lS].comingSoon}</span>
          </div>
          <div className='comingSoonCoverImg'>
            <img src="/images/worker.svg" alt="abc" />
          </div>
          {/* <div className='comingSoonCoverSpan2'>
            <span>{tr[lS].comingSoonD}</span>
          </div> */}
        </div>
      </div>
      {/* NOT VISIBLE */}
      <div className="comingSoonNV">
        <div className='comingSoonNVImg'>
          <img src="/images/yummy5.png" alt="abc" width={240} />
        </div>
        <div className="mp-description">
          <p className='d-flex justify-content-between align-itmes-center'>
            Yummy
            <i className="fa-solid fa-eye"></i>
          </p>
          <p style={{height:"105px"}}>
            This project is an Uber look alike, but upgraded and designed with my styles! Built & designed by me with MongoDb, React Native, and many other libraries! 
          </p>
        </div>
        <div className="mp-links d-flex align-items-center gap-10" style={{padding:"0rem 1rem"}}>
          <i className="fa-brands fa-github" onClick={()=> window.open(linkGit, "_blank")}></i>
          <i className="fa-solid fa-link fa-sm" onClick={()=> window.open(link, "_blank")}></i>
        </div>
      </div>
    </div>
   );
}
 
export default ComingSoon;