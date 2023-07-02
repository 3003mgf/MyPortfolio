import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import MPProject from './MPTemplate';
import { LanguageContext } from '../context/Language';

const MyProjects = () => {

  const data = useContext(LanguageContext);

  const { tr, lS, theme } = data;

  return ( 
    <Container>
      <div className={`my-projects ${theme === "dark" ? "dark" : ""}`} style={{paddingTop:"3rem", paddingBottom:"5rem"}}>
        {theme === "dark" ?
          <span className='project-3d-dark d-flex justify-content-center align-items-center'>My Projects</span>
          :
          <span className='project-3d d-flex justify-content-center align-items-center'>My Projects</span>
        }
      </div>
      <div className='mp-container'>
        <MPProject img="/images/shopify-cover.png" title="Shopify MGF" link={"https://shopify-mgf.netlify.app"} linkGit={"https://github.com/3003mgf/ShopifyMGF-Back"} description={tr[lS].shopify}/>
        <MPProject img="/images/cookers-cover.png" title="Cookers MGF" link={"https://cookers-mgf.netlify.app"} linkGit={"https://github.com/3003mgf/CookersBackEnd"} description={tr[lS].cookers}/>
        <MPProject img="/images/chat-cover.png" title="MGF.io Chat" link={"https://mgf-chat.up.railway.app/"} linkGit={"https://github.com/3003mgf/MGF-Chat"} description={tr[lS].chat}/>
        <MPProject img="/images/pwa-cover.png" title="My PWA MGF" link={"https://3003mgf.github.io/TestingProgressiveWebApp/"} linkGit={"https://github.com/3003mgf/TestingProgressiveWebApp"} description={tr[lS].pwa}/>
        <MPProject img="/images/wordpress-cover.png" title="WordPress MGF" link={"https://3003mgf.github.io/MGF-WordPress/"} linkGit={"https://github.com/3003mgf/MGF-WordPress"} description={tr[lS].wordPress}/>
        <MPProject img="/images/pokemon-cover.png" title="Pokemon MGF" link={"https://3003mgf.github.io/MGF-Pokemon/"} linkGit={"https://github.com/3003mgf/MGF-Pokemon"} description={tr[lS].pokemon}/>
        <MPProject img="/images/spotify-cover.png" title="MGF Spotify" link={"https://mgf-spotify.netlify.app"} linkGit={"https://github.com/3003mgf/MGF-SpotifyAPI"} description={tr[lS].spotify}/>
        <MPProject img="/images/dom-cover.png" title="Dom MGF" link={"https://3003mgf.github.io/MGF-Dom/"} linkGit={"https://github.com/3003mgf/MGF-Dom"} description={tr[lS].domJS}/>
      </div>
    </Container>
   );
}
 
export default MyProjects;