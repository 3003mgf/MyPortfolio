import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import SPTemplate from '../components/SPTemplate';
import { LanguageContext } from '../context/Language';

const SingleProject = () => {
  
  const {id} = useParams();
  const data = useContext(LanguageContext);
  const { tr, lS } = data;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return ( 
    <div>
      <NavBar/>
      {id === "ShopifyMGF" && 
        <SPTemplate
          title={"Shopify MGF"} 
          img={"/images/shopify-cover.png"}
          description={tr[lS].shopify}
          linkSource={"https://github.com/3003mgf/ShopifyMGF-Back"}
          linkWeb={"https://shopify-mgf.netlify.app/login"}
          backExist={true} 
          frameworkExist={true} 
          frontLibExist={true}
          frontLib={["Axios", "Buffer", "Confetti-js", "Formik", "JWT-Decode", "React", "React-Bootstrap-Typeahead", "React-Fast-Marquee", "React-Helmet", "React-Hot-Toast", "React-Icons", "React-Image-Zoom", "React-Rating-Stars", "React-Redux", "React-Router-Dom", "React-Share", "React-Toastify", "SweetAlert", "@React-oauth/Google", "@Paypal/React-paypal-js", "@Reduxjs/toolkit", "Yup", "UniqId"]}
          backLib={["Axios", "Bcrypt", "Body-Parser", "Cloudinary", "Cookie-Parser", "Cors", "Dotenv", "Express", "Express-Async-Handler", "JsonWebToken", "Morgan", "Multer", "Nodemailer", "Serve-Favicon", "Sharp", "Slugify", "UniqId"]}
          database="Mongo DB"
          dbExist={true}
        />
      }
      {id === "MGF.ioChat" &&
        <SPTemplate
          title={"MGF.io Chat"}
          img={"/images/chat-cover.png"}
          description={tr[lS].chat}
          linkSource={"https://github.com/3003mgf/MGF-Chat"}
          linkWeb={"https://mgf-chat.up.railway.app/"}
          backExist={true}
          frameworkExist={false}
          frontLibExist={false}
          dbExist={false}
          backLib={["Socket.io", "Express", "Morgan"]}
        />
      }
      {id === "CookersMGF" &&
        <SPTemplate
          title={"Cookers MGF"}
          img={"/images/cookers-cover.png"}
          description={tr[lS].cookers}
          linkSource={"https://github.com/3003mgf/CookersBackEnd"}
          linkWeb={"https://cookers-mgf.netlify.app/"}
          frameworkExist={false}
          backExist={true}
          dbExist={true}
          frontLibExist={true}
          frontLib={["@reduxjs/toolkit", "Axios", "React", "React-dotenv", "React-redux", "React-Router-Dom"]}
          backLib={["Axios", "Cors", "Dotenv", "Express", "Morgan", "Pg", "Pg-hstore", "Sequelize"]}
          database={"Postgres + Sequelize"}
        />
      }
      {id === "MyPWAMGF" && 
        <SPTemplate
          title={"My PWA MGF"}
          img={"/images/pwa-cover.png"}
          linkSource={"https://github.com/3003mgf/TestingProgressiveWebApp"}
          linkWeb={"https://3003mgf.github.io/TestingProgressiveWebApp/"}
          description={tr[lS].pwa}
          backExist={false}
        />
      }
      {id === "WordPressMGF" &&
        <SPTemplate
          title={"WordPress MGF"}
          img={"/images/wordpress-cover.png"}
          description={tr[lS].wordPress}
          linkSource={"https://github.com/3003mgf/MGF-WordPress"}
          linkWeb={"https://3003mgf.github.io/MGF-WordPress/"}
        />
      }
      {id === "PokemonMGF" &&
        <SPTemplate
          title={"Pokemon MGF"}
          img={"/images/pokemon-cover.png"}
          description={"In this project I'm using Pokemon's API to bring all the Pokemon with a pagination functionality."}
          linkSource={"https://github.com/3003mgf/MGF-Pokemon"}
          linkWeb={"https://3003mgf.github.io/MGF-Pokemon/"}
        />
      }
      {id === "MGFSpotify" &&
        <SPTemplate
          title={"MGF Spotify"}
          img={"/images/spotify-cover.png"}
          description={"This project is a React made website where you can search your favorite artist songs! For this I'm using Spotify API."}
          linkSource={"https://github.com/3003mgf/MGF-SpotifyAPI"}
          linkWeb={"https://mgf-spotify.netlify.app/"}
          frontLibExist={true}
          frontLib={["React"]}
        />
      }
      {id === "DomMGF" &&
        <SPTemplate
          title={"Dom MGF"}
          img={"/images/dom-cover.png"}
          description={tr[lS].dom}
          linkSource={"https://github.com/3003mgf/MGF-Dom"}
          linkWeb={"https://3003mgf.github.io/MGF-Dom/"}
        />
      }
      {id === "DomReactMGF" &&
        <SPTemplate
          title={"Dom React MGF"}
          img={"/images/dom-react-cover.png"}
          description={"This project is the same as my project DomMGF but adapted to React!"}
          linkSource={"https://github.com/3003mgf/Dom-React"}
          linkWeb={"https://dom-react.netlify.app/"}
          frontLibExist={true}
          frontLib={["React"]}
        />
      }
      {id === "StormyMGF" &&
        <SPTemplate
          title={"Stormy MGF"}
          languages={["JavaScript", "CSS"]}
          frameworkExist={true}
          framework={"Tailwind CSS"}
          img={"/images/stormy-cover.jpeg"}
          description={tr[lS].stormy}
          linkSource={"https://github.com/3003mgf/StormyMGF"}
          linkWeb={"https://expo.dev/@mcimgf/stormy-mgf?serviceType=classic&distribution=expo-go"}
          frontLibExist={true}
          frontLib={["React", "React Native", "React-native-progress", "React-native-svg", "react-native-system-navigation-bar", "@react-navigation/native-stack", "@react-navigation/native", "@react-navigation/bottom-tabs", "@react-native-async-storage/async-storage", "@expo/vector-icons", "Expo-updates", "Expo-status-bar", "Expo", "Nativewind", "Lodash", "TailwindCSS", "Axios" ]}
        />
      }
      {id === "PopCornMGF" &&
        <SPTemplate
          title={"PopCorn MGF"}
          languages={["JavaScript", "CSS"]}
          frameworkExist={true}
          framework={"Tailwind CSS"}
          img={"/images/popcorn-cover.avif"}
          description={tr[lS].popcorn}
          linkSource={"https://github.com/3003mgf/PopCorn"}
          linkWeb={"https://expo.dev/@mcimgf/PopCorn?serviceType=classic&distribution=expo-go"}
          frontLibExist={true}
          frontLib={["React", "React Native", "React-native-progress", "React-native-svg", "React-native-screens", "React-native-safe-area-context","react-native-snap-carousel", "@react-navigation/native-stack", "@react-navigation/native", "@expo/vector-icons", "Expo-updates", "Expo-status-bar", "Expo", "expo-linear-gradient", "Nativewind", "Lodash", "TailwindCSS", "Axios" ]}
        />
      }
      {
        id === "SoulMusic" &&
        <SPTemplate
          title={"Soul Music"}
          img={"/images/soulMusic.png"}
          description={tr[lS].soulMusic}
          linkSource={"https://github.com/HenrifyPF38B/Final-PF/tree/main/FinalPF-Front"}
          linkWeb={"https://soul-music-pf.netlify.app"}
          frameworkExist={true}
          backExist={true}
          dbExist={true}
          frontLibExist={true}
          frontLib={["Axios", "React", "Redux", "React-redux", "React-Router-Dom", "React-Hook-Form", "React-Loader-spinner", "React-Responsive-Carousel", "React-Transition-Group", "React-Icons", "React-Bootstrap-Typeahead", "Redux-Thunk", "Sweetalert2", "Uniqid", "Primeicons", "Primereact", "Jwt-decode", "Jsonwebtoken", "Font-awesome", "Canvas-confetti", "Boxicons", "@react-oauth/google", "@paypal/react-paypal-js", "@fortawesome/react-fontawesome", "@fortawesome/free-solid-svg-icons", "@fortawesome/fontawesome-svg-core"]}
          backLib={["Axios", "Cors", "Dotenv", "Express", "Pg", "Pg-hstore", "Sequelize", "Nodemailer", "Jsonwebtoken", "Express-async-handler"]}
          database={"Postgres + Sequelize"}
        />
      }
      {
        id === "MadeInHeaven" &&
        <SPTemplate
          title={"Made In Heaven"}
          img={"/images/mih.png"}
          description={tr[lS].mih}
          linkSource={"https://github.com/3003mgf/Made-In-Heaven"}
          linkWeb={"https://madeinheaven-mgf.netlify.app"}
          frameworkExist={true}
          backExist={true}
          dbExist={true}
          frontLibExist={true}
          frontLib={["@google-cloud/translate", "@mercadopago/sdk-react", "@paypal/react-paypal-js", "@reduxjs/toolkit", "@sstripe/react-stripe-js", "@stripe/stripe-js", "@sweetalert2/themes", "@testing-library/jest-dom", "@testing-library/react", "@testing-library/user-event", "Axios", "easyinvoice", "jspdf-invoice-template", "jwt-decode", "primeicons", "primereact", "react", "react-auto-translate", "react-dom", "react-helmet", "react-icons", "react-intersection-observer", "react-loader-spinner", "react-redux", "react-router-dom", "react-share", "uniqid", "use-debounce"]}
          backLib={["Axios", "Cors", "Dotenv", "Express", "Sequelize", "Nodemailer", "Jsonwebtoken", "Express-async-handler", "Morgan", "Pg", "Stripe", "Uniqid"]}
          database={"Postgres + Sequelize"}
        />
      }
    </div>
   );
}
 
export default SingleProject;