import { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({children}) =>{

  const [lS, setLS] = useState("en");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if(theme === "dark"){
      document.querySelector("body").classList.add("dark");
    }else{
      document.querySelector("body").classList.remove("dark");
    }
  }, [theme]);

  const tr = {
    en:{
      headerHome:"Home",
      headerProjects:"Projects",
      headerSkills:"Skills",
      mainWelcome: "Welcome to MGF World!",
      mainHey:"Hey you!",
      mainP1:"Check out my Projects",
      mainP2:"Careful with my robots",
      mainP3:"Keep scrolling",
      aboutMeTitle:"Hey! What's Up? 👋",
      aboutMe:`<p>I'm Ignacio Gramajo Feijoo -- a Full Stack Developer. In this page you'll know me a little more, and if you wish, you can go to the <b>Skills</b> section and know more about the Technologies I handle!</p>
      <p>I'm 23 years old, from Argentina. I started my career as a programmer 1 year ago from now, and it has been a really challenging journey.</p>
      <br />
      <b>Where & How did I learn to code?</b>
      <p class="ab-b">I made my first steps into this amazing world with Henry. A very recognized Bootcamp in Argentina and in the world probably.</p>
      <p>But, I have to say 80% of my knowledge comes from Internet. I always say the best way to stand out is not to settle just with the skills you learn in any Bootcamp you make, but to be a self taught person.</p>
      <br />
      <b>What can I contribute to your company?</b>
      <p class="ab-b">I am a very professional person when it comes to work. I take each task, doesn't matter how small it is, with full responsability. In today's world where there are many companies, those that focus on small details win out over others. </p>
      <p>I want your company to grow, because if you grow, I grow.</p>
      <br />
      <b>Am I a team player?</b>
      <p class="ab-b">Let's be honest, who doesn't like to work alone? 👀... But this is not about what I like, is about what your company needs, and I'm able to work by myself and with others as well perfectly.</p>
      <br />
      <b>What is my work experience?</b>
      <p class="ab-b">Even though I just started to look for a job, I have worked in many projects related to what any big company does, in order to be prepared when the time comes. Doing these projects, besides the knowledge, gave me the hability to solve any issue presented during the development of an application.</p>
      <p>What I mean by this? Well, during these projects, I had many issues which I had no clue what it was, and I developed the hability and the patience to do a research to find out what the problem was and fix it. This may sound easy, but is really not sometimes. I always say Google is one of the most important tools for a programmer. For me, as a programmer you are not expected to know everything but to do anything.</p>
      <p className='d-flex flex-column gap-10'><b style={{fontWeight:500}}>"You can never understand everything. But you should push yourself to understand the System."</b>
        <i>Ryan Dahl - Creator of Node JS</i>
      </p>
      <br />
      <b>How many courses I have made?</b>
      <p class="ab-b">You will find the specific information about this question in the <b>Skills</b> section. But I have approximately 1400 hours of just courses I've made.</p>
      <p>Now that we know eachother a little more, let me tell you more about my knowledge!<a href="/#/skills"><i class="fa-solid fa-circle-info ms-2"></i></a></p>`,
      shopify:`Explore my technology-driven e-commerce masterpiece, meticulously crafted and designed from the ground up. This project showcases my full-stack prowess, offering a seamless shopping experience.

      With JWT-powered login and authentication, users enjoy secure access. The Sign-Up process is hassle-free, while a Forgot Password feature ensures no one is left locked out.
      
      The Wishlist is your digital shopping companion, where you can save your tech desires for later. PayPal API integration makes payments swift and secure.
      
      Checkout is a breeze, and combined filters simplify product discovery. Behind it all, a robust Node.js and Express backend ensures speed, reliability, and scalability.
      
      This project is more than code; it's my commitment to delivering an exceptional e-commerce experience for tech enthusiasts. Join me in exploring the future of online tech shopping!`,
      cookers:"This project is a website where people can find and create recipes to share with other Cookers! <br> It counts with filter, pagination & dark mode functionality.<br> You can search recipes by typing it's name in the search bar next to the logo. <br>This search bar will be disabled if you are not in the Home page. <br>If you click on a recipe you like, you will be able to see it in full details.",
      chat:"Experience real-time communication in my Socket.io chat project. Join or leave notifications keep you informed, while a user count tracker displays online users. Choose a unique username, validated for uniqueness, and enjoy a random color assigned via hash calculation. It's a basic yet engaging chat experience!",
      stormy:"Introducing my creation: a straightforward weather app, built from the ground up with React Native and JavaScript. This user-friendly app connects seamlessly to a Weather API, providing real-time weather information. Crafted with care, it's designed to be intuitive and efficient. And the best part? It's easily accessible on any mobile device thanks to Expo deployment. Get your weather updates in a snap with this versatile React Native app!",
      popcorn:`Imagine having the entire world of movies at your fingertips. That's precisely what my React Native movie searcher app offers. With a seamless connection to The Movie DB API, it becomes your portal to the cinematic universe.

      Search for any movie, and the app provides a wealth of information at your command. Discover essential details like release dates, runtime, cast members, and even a list of similar movies to dive into next.
      
      But it doesn't stop there. We've taken your movie experience to the next level by allowing you to explore the world behind the camera. Click on any cast member, and you'll unlock a treasure trove of insights. Learn about their career, filmography, and the movies they've been a part of. It's like having a personal guide to the stars.
      
      Whether you're a cinephile or just looking for your next movie night pick, this app has you covered. It's a full-stack marvel, built with React Native, and it seamlessly integrates with The Movie DB API to bring you the latest and most comprehensive movie data.
      
      So why settle for ordinary movie searches when you can have an immersive movie exploration experience? Try out my app today and unlock the magic of cinema right on your mobile device. It's your ticket to a world of movies, actors, and stories waiting to be discovered.`,
      pwa:"This project is a very simple Progressive Web App, I'm configuring my <b>manifest.json</b> and my <b>sw.js</b> files in order to make the application Progressive and available to be downloaded in any user's Computer and make the Computer recognize it as an App.",
      wordPress:"Unlock the versatility of WordPress like never before on my website, where you can effortlessly consume content from any WordPress page. How? Through the power of the WordPress REST API. This project showcases my skill in full-stack development, enabling seamless access to a wide range of WordPress websites and their valuable content. Explore, engage, and connect with WordPress, reimagined.",
      pokemon:"Explore the world of Pokémon like never before on my website—a comprehensive Pokémon repository powered by a simple, yet effective RESTful API. Crafted from the ground up with pure Vanilla JavaScript, it's a showcase of my full-stack development skills. Dive in to discover and learn about all types of Pokémon from the extensive PokéAPI. It's a project designed and built with a passion for the Pokémon universe.",
      spotify:"Discover music like never before on my website – a song search platform that taps into the Spotify API. With a blend of JavaScript, React, CSS, and HTML, this project offers a seamless experience. Simply search for any song, and it retrieves comprehensive details. It's your gateway to a world of music, crafted by a full-stack developer.",
      domJS:"This project is a PWA, and actually my first project, designed & built by me with pure Vanilla JavaScript!",
      domReact:"This project is the same as Dom MGF but using React!",
      soulMusic: `This project is inspired in Spotify, but with our own style. Built & Design with React JS, Javascript, Node JS, Bootstrap, Postgres + Sequelize, and libraries. It counts with Google Login, Notifications using NodeMailer & JsonWebToken, PayPal payment, Admin Dashboard and more! To bring the songs we are using the Spotify API, which bring us Playlists, Albums and Songs, but only with the preview audio. We created our own API with the link, as said before generated with AWS Buckets, with the Full Track of each song. In order to listen the full song, you will have to pay the membership. Take into notice all Payments are made with Sandbox.
      If you really like music and vinyls, you can buy any Playlist, even your own, yes, you can create your own Playlist, and you will receive it in Vinyl format. As well as the Albums.
      If you want to know more about our WebSite please visit us and discover all of our functionalities!`,
      mih:"Discover the epitome of high fashion at Made In Heaven. Dive into our curated collection of 500+ luxury products from renowned brands. Seamlessly managed through our admin dashboard, our platform embraces technologies like JavaScript, React, Redux Toolkit, JWT, Bcrypt, Google Login, GitHub Login, Bootstrap, CSS, Nodemailer, AWS and more. Elevate your wardrobe, elevate your style, with Made In Heaven.",
      alien:`Don't be afraid, he is just a friend who protects my projects from the cows! <br />He came from the CSS world and never went back.`,
      q1:"Where did I learn programming?",
      q2:"What courses did I take?",
      q3:"What databases do I use?",
      extras:"Below you will find a list of the different libraries, technologies, frameworks, etc. I have used in my projects!",
      syllabus:"You can see the complete syllabus here",
      a1:`<p>Here I want to give a special mention to one of the greatest teachers I've ever known, <b>Jon Mircha</b>.</p>
      <p>This journey has been challenging, but thanks to Jon, I learned so many things faster that I would've ever imagine.</p>
      <p>But answering the question, I learned what I know with <b>Jon Mircha</b>, <b>Henry Full Stack Developer Bootcamp</b> and the greatest... <b>Google!</b></p>`,
      p1:"This course teaches you everything you need to know to have an excepcional basis of JavaScript and be able to learn reading the documentation and doing some research by your own.",
      p2:"This course counts with 165 chapters, gathering 70 hours.",
      p3:"We learn",
      p4:"and more",
      p5:"Here we learn how to program in the most popular Front End Library and used in the indsutry!",
      p6:"This course counts with 109 chapters, gathering 100 hours. Definitely the best React course out there!",
      p8:"Here we learn to create fullstack applications with JavaScript and its backend development environment: Node.js, MySQL Database, and MongoDB Database.",
      p9:"This course counts with 68 chapters, gathering 60 hours.",
      p10:"Here we learn how to configure Webpack, the most popular and widely used file wrapper for modern JavaScript applications .",
      p11:"This course counts with 2 hours 50 minutes of WebPack!",
      p12:"Here we learn how to convert a WebSite into a PWA! You can check mine going to",
      p13:"This course counts with 68 chapters, gathering 60 hours.",
      p14:"This Bootcamp counts with more than 800 total hours, 4 Modules, and 2 final projects where you have to implement what you learned in the modules. Below you will be able to see the full syllabus and my Henry projects!",
      comingSoon:"Coming soon!",
      comingSoonD:"Psss, you... Don't tell anybody, this is an App similar to Uber, but you know, better. Our robots are currently working on it, it will be available shortly. Shhh!"
    },
    es:{
      headerHome:"Inicio",
      headerProjects:"Proyectos",
      headerSkills:"Habilidades",
      mainWelcome: "Bienvenido al mundo MGF",
      mainHey:"Hey tu!",
      mainP1:"Chequea mis Proyectos",
      mainP2:"Cuidado con mis robots",
      mainP3:"Sigue scrolleando",
      aboutMeTitle:"Hola! Como estas? 👋",
      aboutMe:`<p>Soy Ignacio Gramajo Feijoo -- Full Stack Developer. En esta seccion me conoceras un poco mejor, y si deseas, puedes ir a <b>Habilidades</b> y conocer un poco mas acerca de las tecnologias que manejo!</p>
      <p>Tengo 23 años, de Argentina. Mi carrera en la programacion comenzo hace un año aproximadamente, y el camino ha sido verdaderamente desafiante</p>
      <br />
      <b>Donde y como aprendi a programar?</b>
      <p class="ab-b">Mis primeros pasos en este asombroso mundo fue a travez de Henry. Un Bootcamp muy reconocido en Argentina, y en el mundo probablemente.</p>
      <p>Pero, debo decir que el 80% de mi conocimiento proviene de Internet. Siempre digo que la mejor manera de sobresalir es no conformarse solo con los conocimientos que se adquiere al realizar cualquier Bootcamp, si no aprender a ser autodidacta.</p>
      <br />
      <b>Como puedo sumar a tu compañia?</b>
      <p class="ab-b">Soy una persona muy profesional cuando se trata de trabajo. Tomo cada tarea, sin importar cuan pequeña sea, con total responsabilidad. En el mundo de hoy en el cual hay muchas compañias, aquellas que se enfocan en los pequeños detalles son las que sobresalen. </p>
      <p>Quiero que tu compañia crezca, porque si tu creces, yo crezco!</p>
      <br />
      <b>Puedo trabajar en equipo?</b>
      <p class="ab-b">Seamos honestos, a quien no le gusta trabajar solos? 👀... Pero esto no es acerca de lo que a mi me gusta, es acerca de lo que tu compañia necesita, y soy capaz de trabajar tanto solo como en equipo perfectamente!</p>
      <br />
      <b>Cual es mi experiencia laboral?</b>
      <p class="ab-b">Aunque hace poco comenze mi busqueda laboral, desarrolle muchos proyectos relacionados a lo que cualquier compañia grande hace, con el objetivo de estar preparado cuando el tiempo llegue. Realizando estos proyectos, ademas del conocimiento nuevo adquirido, me dio la habilidad de resolver cualquier problematica que se pueda presentar durante el desarrollo de una aplicacion.</p>
      <p>A que me refiero con esto? Bueno, durante estos proyectos, tuve varias complicaciones las cuales al inicio no sabia como solucionar, y desarrolle la habilidad y la paciencia para adentrarme en los problemas, investigar en la documentacion, etc. y resolver el problema. Esto puede sonar facil, pero realmente no lo es algunas veces. En mi opinion, Google es una de las herramientas mas importantes de un programador. Para mi, como programadores, no se espera de nosotros el saber todo, pero si el saber como realizar todo.</p>
      <p class='d-flex flex-column gap-10'>
        <b class="ab-quote">"You can never understand everything. But you should push yourself to understand the System."</b>
        <i>Ryan Dahl - Creator of Node JS</i>
      </p>
      <br />
      <b>Cuantos cursos realize?</b>
      <p class="ab-b">Encontraras informacion mas especifica acerca de esta pregunta en la seccion de <b>Habilidades</b>. Pero entre solo los cursos que realize suman aproximadamente 1400 horas.</p>
      <p>Ahora que nos conocemos un poco mas, dejame contarte mas acerca de mis conocimientos!<a href="/#/skills"><i class="fa-solid fa-circle-info ms-2"></i></a></p>`,
      shopify:`Explore mi obra maestra del comercio electrónico impulsada por la tecnología, meticulosamente elaborada y diseñada desde cero. Este proyecto muestra mi destreza en full-stack y ofrece una experiencia de compra perfecta.      `,
      cookers:"¡Este proyecto es un sitio web donde las personas pueden encontrar y crear recetas para compartir con otros cocineros! <br> Cuenta con funcionalidad de filtro, paginación y modo oscuro.<br> Puede buscar recetas escribiendo su nombre en la barra de búsqueda junto al logotipo. <br>Esta barra de búsqueda se desactivará si no estás en la página de inicio. <br>Si haces clic en una receta que te guste, podrás verla con todos los detalles.",
      chat:"Experimente la comunicación en tiempo real en mi proyecto de chat Socket.io. Las notificaciones de unirse o salir lo mantienen informado, mientras que un rastreador de recuento de usuarios muestra los usuarios en línea. Elija un nombre de usuario único, validado para su singularidad, y disfrute de un color aleatorio asignado mediante cálculo hash. ¡Es una experiencia de chat básica pero atractiva!",
      stormy:`Les presento mi creación: una aplicación meteorológica sencilla, creada desde cero con React Native y JavaScript. Esta aplicación fácil de usar se conecta perfectamente a una API meteorológica y proporciona información meteorológica en tiempo real. Elaborado con cuidado, está diseñado para ser intuitivo y eficiente. ¿Y la mejor parte? Es fácilmente accesible desde cualquier dispositivo móvil gracias a la implementación de Expo. ¡Reciba sus actualizaciones meteorológicas en un instante con esta versátil aplicación React Native!`,
      pwa:"Este proyecto es una aplicación web progresiva muy simple. Estoy configurando mis archivos <b>manifest.json</b> y <b>sw.js</b> para que la aplicación sea progresiva y esté disponible para descargar. en la Computadora de cualquier usuario y hacer que la Computadora la reconozca como una Aplicación.",
      wordPress:"Desbloquea la versatilidad de WordPress como nunca antes en mi sitio web, donde puedes consumir contenido sin esfuerzo desde cualquier página de WordPress. ¿Cómo? A través del poder de la API REST de WordPress. Este proyecto muestra mi habilidad en el desarrollo completo, permitiendo un acceso perfecto a una amplia gama de sitios web de WordPress y su valioso contenido. Explore, interactúe y conéctese con WordPress, reinventado.",
      pokemon:"Explora el mundo de Pokémon como nunca antes en mi sitio web: un repositorio completo de Pokémon impulsado por una API RESTful simple pero efectiva. Elaborado desde cero con JavaScript Vanilla puro, es una muestra de mis habilidades de desarrollo completo. Sumérgete para descubrir y aprender sobre todos los tipos de Pokémon de la extensa PokéAPI. Es un proyecto diseñado y construido con pasión por el universo Pokémon.",
      spotify:"Descubra música como nunca antes en mi sitio web: una plataforma de búsqueda de canciones que aprovecha la API de Spotify. Con una combinación de JavaScript, React, CSS y HTML, este proyecto ofrece una experiencia perfecta. Simplemente busque cualquier canción y obtendrá detalles completos. Es su puerta de entrada a un mundo de música, creado por un desarrollador completo.",
      domJS:"¡Este proyecto es un PWA, y en realidad mi primer proyecto, diseñado y construido por mí con puro JavaScript Vanilla!",
      domReact:"Este proyecto es igual que Dom MGF pero utilizando React!",
      popcorn:`Imagina tener todo el mundo del cine a tu alcance. Eso es precisamente lo que ofrece mi aplicación de búsqueda de películas React Native. Con una conexión perfecta con la API The Movie DB, se convierte en su portal al universo cinematográfico.      `,
      soulMusic:`Este proyecto está inspirado en Spotify, pero con nuestro propio estilo. Construido y diseñado con React JS, Javascript, Node JS, Bootstrap, Postgres + Sequelize y bibliotecas. ¡Cuenta con inicio de sesión de Google, notificaciones usando NodeMailer y JsonWebToken, pago de PayPal, Admin Dashboard y más! Para traer las canciones estamos usando la API de Spotify, que nos trae listas de reproducción, álbumes y canciones, pero solo con el audio de vista previa. Creamos nuestra propia API con el enlace, como se dijo antes generado con AWS Buckets, con el Full Track de cada canción. Para poder escuchar la canción completa, tendrás que pagar la membresía. Tenga en cuenta que todos los pagos se realizan con Sandbox.`,
      mih:"Descubra el epítome de la alta costura en Made In Heaven. Sumérgete en nuestra colección seleccionada de más de 500 productos de lujo de marcas reconocidas. Nuestra plataforma, administrada sin problemas a través de nuestro panel de administración, abarca tecnologías como JavaScript, React, Redux Toolkit, JWT, Bcrypt, Google Login, GitHub Login, Bootstrap, CSS, Nodemailer, AWS y más. Eleva tu guardarropa, eleva tu estilo con Made In Heaven.",
      alien:`No tengas miedo, es solo un amigo que proteje mis proyectos de las vacas! <br/> Vino del mundo CSS y no volvio nunca mas.`,
      q1:"Donde aprendi programacion?",
      q2:"Que cursos realize?",
      q3:"Que bases de datos uso?",
      extras:"A continuación encontrará una lista de las diferentes bibliotecas, tecnologías, marcos, etc. que he utilizado en mis proyectos.",
      syllabus:"Puedes ver el temario completo aquí",
      a1:`<p>Aquí quiero hacer una mención especial a uno de los más grandes maestros que he conocido, <b>Jon Mircha</b>.</p>
      <p>Este viaje ha sido desafiante, pero gracias a Jon, aprendí muchas cosas más rápido de lo que jamás hubiera imaginado.</p>
      <p>Pero respondiendo a la pregunta, aprendí lo que sé con <b>Jon Mircha</b>, <b>Henry Full Stack Developer Bootcamp</b> y el mejor maestro... <b>Google!</b></p>`,
      p1:"Este curso te enseña todo lo que necesitas saber para tener una base excepcional de JavaScript y poder aprender leyendo la documentación e investigando por tu cuenta.",
      p2:"Este curso cuenta con 165 capítulos, reuniendo exactamente 70 horas.",
      p3:"Aprendemos",
      p4:"y mas",
      p5:"¡Aquí aprendemos a programar en la biblioteca front-end más popular y utilizada en la industria!",
      p6:"Este curso cuenta con 109 capítulos, reuniendo 100 horas. ¡Definitivamente el mejor curso de React que existe!",
      p8:"Aquí aprendemos a crear aplicaciones fullstack con JavaScript y su entorno de desarrollo backend: Node.js, MySQL y MongoDB.",
      p9:"Este curso cuenta con 68 capítulos, reuniendo 60 horas.",
      p10:"Aquí aprendemos a configurar Webpack, el contenedor de archivos más popular y ampliamente utilizado para aplicaciones JavaScript modernas.",
      p11:"¡Este curso cuenta con 2 horas 50 minutos de WebPack!",
      p12:"¡Aquí aprendemos cómo convertir un sitio web en un PWA! Puedes consultar el mío yendo a",
      p13:"Este curso cuenta con 68 capítulos, reuniendo 60 horas.",
      p14:"Este Bootcamp cuenta con mas de 800 horas totales, 4 Módulos y 2 proyectos finales donde tienes que implementar lo aprendido en los módulos. ¡Abajo podrás ver el plan de estudios completo y mis proyectos Henry!",
      comingSoon:"Proximamente",
      comingSoonD:"Esta es una aplicacion similar a Uber. Nuestros robots estan actualmente trabajando en ella, estara disponible en breve."
    },
    fr:{
      headerHome:"Accueil",
      headerProjects:"Projets",
      headerSkills:"Compétences",
      mainWelcome: "Bienvenue dans le monde MGF",
      mainHey:"Hey vous!",
      mainP1:"Découvrez mes projets",
      mainP2:"Attention avec mes robots",
      mainP3:"Poursuivre le défilement",
      aboutMeTitle:"Hé! Quoi de neuf? 👋",
      aboutMe:`<p>Je suis Ignacio Gramajo Feijoo -- Full Stack Developer. Dans cette page vous me connaîtrez un peu plus, et si vous le souhaitez, vous pouvez vous rendre dans la rubrique <b>Compétences</b> et en savoir plus sur les Technologies que je gère !</p>
      <p>J'ai 23 ans, je viens d'Argentine. J'ai commencé ma carrière en tant que programmeur il y a 1 an, et ce fut un parcours vraiment difficile.</p>
      <br />
      <b>Où et comment ai-je appris la programmation ?</b>
      <p class="ab-b">Mes premiers pas dans ce monde incroyable ont été grâce à Henry. Un Bootcamp très reconnu en Argentine, et probablement dans le monde.</p>
      <p>Mais, je dois dire que 80% de mes connaissances viennent d'Internet. Je dis toujours que la meilleure façon de se démarquer n'est pas de se contenter uniquement des connaissances acquises en faisant n'importe quel Bootcamp, mais d'apprendre à être autodidacte, probablement.</p>
      <br />
      <b>Comment puis-je rejoindre votre entreprise?</b>
      <p class="ab-b">Je suis une personne très professionnelle quand il s'agit de travailler. Je prends chaque tâche, aussi petite soit-elle, avec l'entière responsabilité. Dans le monde actuel de nombreuses entreprises, celles qui se concentrent sur les petits détails sont celles qui se démarquent.</p>
      <p>Je veux que votre entreprise grandisse, car si vous grandissez, je grandis!</p>
      <br />
      <b>Puis-je travailler en équipe?</b>
      <p class="ab-b">Soyons honnêtes, qui n'aime pas travailler seul? 👀... Mais ce n'est pas ce que j'aime, c'est ce dont votre entreprise a besoin, et je suis capable de travailler aussi bien seul qu'en équipe!</p>
      <br />
      <b>Quelle est mon expérience professionnelle?</b>
      <p class="ab-b">Bien que j'ai commencé récemment ma recherche d'emploi, j'ai développé de nombreux projets liés à ce que fait n'importe quelle grande entreprise, dans le but d'être prêt le moment venu. La réalisation de ces projets, en plus des nouvelles connaissances acquises, m'a donné la capacité de résoudre tout problème pouvant survenir lors du développement d'une application.</p>
      <p>Qu'est-ce que je veux dire par là ? Eh bien, au cours de ces projets, j'ai eu plusieurs complications que je ne savais pas comment résoudre au début, et j'ai développé les compétences et la patience nécessaires pour creuser les problèmes, rechercher de la documentation, etc. et résoudre le problème. Cela peut sembler facile, mais ce n'est pas vraiment le cas parfois. À mon avis, Google est l'un des outils les plus importants d'un programmeur. Pour moi, en tant que programmeurs, on ne s'attend pas à tout savoir, mais à savoir tout faire.</p>
      <p class='d-flex flex-column gap-10'>
        <b class="ab-quote">"You can never understand everything. But you should push yourself to understand the System."</b>
        <i>Ryan Dahl - Creator of Node JS</i>
      </p>
      <br />
      <b>Combien de cours avez-vous suivi?</b>
      <p class="ab-b">
      Vous trouverez des informations plus précises sur cette question dans la section <b>Compétences</b>. Mais entre les seuls cours que je prends, cela fait environ 1400 heures.</p>
      <p>
      Maintenant que nous nous connaissons un peu mieux, laissez-moi vous en dire plus sur mes connaissances!<a href="/#/skills"><i class="fa-solid fa-circle-info ms-2"></i></a></p>`,
      shopify:`Explorez mon chef-d'œuvre de commerce électronique axé sur la technologie, méticuleusement conçu et conçu à partir de zéro. Ce projet met en valeur mes prouesses full-stack, offrant une expérience d'achat fluide.      `,
      cookers:"Ce projet est un site Web où les gens peuvent trouver et créer des recettes à partager avec d'autres cuisiniers ! <br> Il dispose de fonctionnalités de filtre, de pagination et de mode sombre.<br> Vous pouvez rechercher des recettes en tapant son nom dans la barre de recherche à côté du logo. <br>Cette barre de recherche sera désactivée si vous n'êtes pas dans la page d'accueil. <br>Si vous cliquez sur une recette que vous aimez, vous pourrez la voir en détail.",
      chat:"Faites l'expérience de la communication en temps réel dans mon projet de chat Socket.io. Les notifications d'adhésion ou de départ vous tiennent informé, tandis qu'un outil de suivi du nombre d'utilisateurs affiche les utilisateurs en ligne. Choisissez un nom d'utilisateur unique, validé pour son caractère unique, et profitez d'une couleur aléatoire attribuée via le calcul de hachage. C'est une expérience de chat basique mais engageante !",
      stormy:`Présentation de ma création : une application météo simple, construite à partir de zéro avec React Native et JavaScript. Cette application conviviale se connecte de manière transparente à une API Météo, fournissant des informations météorologiques en temps réel. Fabriqué avec soin, il est conçu pour être intuitif et efficace. Et le meilleur ? Il est facilement accessible sur n’importe quel appareil mobile grâce au déploiement Expo. Obtenez vos mises à jour météo en un clin d'œil avec cette application React Native polyvalente !`,
      pwa:"Ce projet est une Progressive Web App très simple, je configure mes fichiers <b>manifest.json</b> et mes <b>sw.js</b> afin de rendre l'application Progressive et disponible au téléchargement sur l'ordinateur de n'importe quel utilisateur et faites en sorte que l'ordinateur le reconnaisse comme une application.",
      wordPress:"Débloquez la polyvalence de WordPress comme jamais auparavant sur mon site Web, où vous pouvez consommer sans effort le contenu de n'importe quelle page WordPress. Comment? Grâce à la puissance de l'API REST WordPress. Ce projet met en valeur mes compétences en développement full-stack, permettant un accès transparent à un large éventail de sites Web WordPress et à leur contenu précieux. Explorez, engagez-vous et connectez-vous avec WordPress, réinventé.",
      pokemon:"Explorez le monde de Pokémon comme jamais auparavant sur mon site Web, un référentiel Pokémon complet alimenté par une API RESTful simple mais efficace. Conçu à partir de zéro avec du JavaScript Vanilla pur, c'est une vitrine de mes compétences en développement full-stack. Plongez pour découvrir et en apprendre davantage sur tous les types de Pokémon grâce à la vaste PokéAPI. C'est un projet conçu et construit avec une passion pour l'univers Pokémon.",
      spotify:"Découvrez de la musique comme jamais auparavant sur mon site Web – une plateforme de recherche de chansons qui exploite l'API Spotify. Avec un mélange de JavaScript, React, CSS et HTML, ce projet offre une expérience transparente. Recherchez simplement n’importe quelle chanson et il récupère des détails complets. C'est votre passerelle vers un monde musical, conçu par un développeur full-stack.",
      domJS:"Ce projet est un PWA, et en fait mon premier projet, conçu et construit par moi avec du pur JavaScript vanille !",
      domReact:"Ce projet est le même que Dom MGF mais en utilisant React!",
      popcorn:`Imaginez avoir tout le monde du cinéma à portée de main. C'est précisément ce que propose mon application de recherche de films React Native. Avec une connexion transparente à l'API The Movie DB, il devient votre portail vers l'univers cinématographique.      `,
      soulMusic:`Ce projet est inspiré de Spotify, mais avec notre propre style. Construit et conçu avec React JS, Javascript, Node JS, Bootstrap, Postgres + Sequelize et des bibliothèques. Il compte avec la connexion Google, les notifications utilisant NodeMailer et JsonWebToken, le paiement PayPal, Admin Dashboard et plus encore ! Pour apporter les chansons, nous utilisons l'API Spotify, qui nous apporte des listes de lecture, des albums et des chansons, mais uniquement avec l'audio de prévisualisation. Nous avons créé notre propre API avec le lien, comme dit précédemment généré avec AWS Buckets, avec la piste complète de chaque chanson. Afin d'écouter la chanson complète, vous devrez payer l'adhésion. Prenez note que tous les paiements sont effectués avec Sandbox. Si vous aimez vraiment la musique et les vinyles, vous pouvez acheter n'importe quelle Playlist, même la vôtre, oui, vous pouvez créer votre propre Playlist, et vous la recevrez au format Vinyle. Ainsi que les Albums. Si vous souhaitez en savoir plus sur notre site Web, rendez-nous visite et découvrez toutes nos fonctionnalités !`,
      mih:"Découvrez le summum de la haute couture chez Made In Heaven. Plongez dans notre collection de plus de 500 produits de luxe de marques renommées. Gérée de manière transparente via notre tableau de bord d'administration, notre plateforme intègre des technologies telles que JavaScript, React, Redux Toolkit, JWT, Bcrypt, Google Login, GitHub Login, Bootstrap, CSS, Nodemailer, AWS et plus encore. Élevez votre garde-robe, élevez votre style avec Made In Heaven.",
      alien:`N'ayez pas peur, c'est juste un ami qui protège mes projets des vaches ! <br/> Il est venu du monde CSS et n'est jamais revenu.`,
      q1:"Où ai-je appris la programmation?",
      q2:"Quels cours as-tu suivis?",
      q3:"Quelles bases de données dois-je utiliser?",
      extras:"Vous trouverez ci-dessous une liste des différentes bibliothèques, technologies, frameworks, etc. que j'ai utilisé dans mes projets.",
      syllabus:"Vous pouvez voir l'ordre du jour complet ici",
      a1:`<p>Ici, je veux faire une mention spéciale à l'un des plus grands professeurs que j'aie jamais rencontrés, <b>Jon Mircha</b>.</p>
      <p>Ce voyage a été difficile, mais grâce à Jon, j'ai appris beaucoup de choses plus rapidement que je ne l'aurais jamais imaginé.</p>
      <p>Mais en répondant à la question, j'ai appris ce que je sais avec <b>Jon Mircha</b>, <b>Henry Full Stack Developer Bootcamp</b> et le meilleur professeur... <b>Google!</b></p>`,
      p1:"Ce cours vous apprend tout ce que vous devez savoir pour avoir une base exceptionnelle en JavaScript et être capable d'apprendre en lisant la documentation et en faisant des recherches par vous-même.",
      p2:"Ce cours comporte 165 chapitres, regroupant exactement 70 heures.",
      p3:"Nous apprenons",
      p4:"et de plus",
      p5:"Ici, nous apprenons à programmer dans la bibliothèque frontale la plus populaire et la plus utilisée de l'industrie!",
      p6:"Ce cours comporte 109 chapitres, regroupant 100 heures. Certainement le meilleur cours React là-bas!",
      p8:"Ici, nous apprenons à créer des applications fullstack avec JavaScript et son environnement de développement backend: Node.js, MySQL y MongoDB.",
      p9:"Ce cours comporte 68 chapitres, regroupant 60 heures.",
      p10:"Ici, nous apprenons à configurer Webpack, le conteneur de fichiers le plus populaire et le plus utilisé pour les applications JavaScript modernes.",
      p11:"Ce cours comprend 2 heures 50 minutes de WebPack!",
      p12:"Ici, nous apprenons à transformer un site Web en PWA ! Vous pouvez vérifier le mien en allant sur",
      p13:"Ce cours comporte 68 chapitres, regroupant 60 heures.",
      p14:"Ce Bootcamp comporte plus de 800 heures au total, 4 modules et 2 projets finaux où vous devez mettre en œuvre ce que vous avez appris dans les modules. Ci-dessous, vous pouvez voir le programme complet et mes projets Henry!",
      comingSoon:"À venir",
      comingSoonD:"Ceci est une application comme Uber. Nos robots y travaillent, il sera prêt très bientôt."
    }
  }

  const data = {
    tr,
    lS,
    setLS,
    theme,
    setTheme
  };

  return <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
}