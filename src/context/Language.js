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
      <p class="ab-b">You will find the specific information about this question in the <b>Skills</b> section. But I have approximately 710 hours of just courses I've made.</p>
      <p>Now that we know eachother a little more, let me tell you more about my knowledge!<a href="/#/skills"><i class="fa-solid fa-circle-info ms-2"></i></a></p>`,
      shopify:"This project is an E-Commerce designed & built by me with technologies like React, Node JS, Mongo DB, Express, etc.",
      cookers:"This project is an API Rest designed & built by me with technologies like React, Node JS, Express, Postgres, Sequelize, etc.",
      chat:"This project is a basic chat designed & built by me using technologies like Node JS, Express, JQuery, Socket.io, etc.",
      pwa:"This project, designed & built by me with pure Vanilla JavaScript is a basic Progressive Web App, actually my first!",
      wordPress:"This project, designed & built by me, allow us to consume any website made in WordPress by using the WordPress API.",
      pokemon:"This project is basic API Rest (Just GET/READ) about Pokemons, designed & built by me with pure Vanilla JavaScript.",
      spotify:"This project, designed & built by me with pure Vanilla JavaScript, is a basic API REST (Just GET/READ) using Spotify's API.",
      domJS:"This project is a PWA, and actually my first project, designed & built by me with pure Vanilla JavaScript!",
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
      p2:"This course counts with 165 chapters, gathering exactly 70 hours.",
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
      p14:"This Bootcamp counts with 4 Modules, and 2 final projects where you have to implement what you learned in the modules. Below you will be able to see the full syllabus and my Henry projects!",
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
      aboutMe:`<p>Soy Ignacio Gramajo Feijoo -- Full Stack Developer. En esta seccion me conoceras un poco mejor, y si deseas, puedes ir a <b>Habilidades</b> section and know more about the Technologies I handle!</p>
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
      <p class="ab-b">Encontraras informacion mas especifica acerca de esta pregunta en la seccion de <b>Habilidades</b>. Pero entre solo los cursos que realize suman aproximadamente 710 horas.</p>
      <p>Ahora que nos conocemos un poco mas, dejame contarte mas acerca de mis conocimientos!<a href="/#/skills"><i class="fa-solid fa-circle-info ms-2"></i></a></p>`,
      shopify:"Este proyecto es un E-Commerce diseñado y construido por mí con tecnologías como React, Node JS, Mongo DB, Express, etc.",
      cookers:"Este proyecto es una API Rest diseñada y construida por mí con tecnologías como React, Node JS, Express, Postgres, Sequelize, etc.",
      chat:"Este proyecto es un chat básico diseñado y construido por mí utilizando tecnologías como Node JS, Express, JQuery, Socket.io, etc.",
      pwa:"Este proyecto, diseñado y creado por mí con JavaScript puro de Vanilla, es una aplicación web progresiva básica, ¡en realidad la primera!",
      wordPress:"Este proyecto, diseñado y construido por mí, nos permite consumir cualquier sitio web creado en WordPress utilizando la API de WordPress.",
      pokemon:"Este proyecto es API Rest básico (solo OBTENER/LEER) sobre Pokémon, diseñado y construido por mí con puro JavaScript Vanilla.",
      spotify:"Este proyecto, diseñado y construido por mí con JavaScript Vanilla puro, es un API REST básico (solo OBTENER/LEER) que utiliza la API de Spotify.",
      domJS:"¡Este proyecto es un PWA, y en realidad mi primer proyecto, diseñado y construido por mí con puro JavaScript Vanilla!",
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
      p14:"Este Bootcamp cuenta con 4 Módulos y 2 proyectos finales donde tienes que implementar lo aprendido en los módulos. ¡Abajo podrás ver el plan de estudios completo y mis proyectos Henry!",
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
      Vous trouverez des informations plus précises sur cette question dans la section <b>Compétences</b>. Mais entre les seuls cours que je prends, cela fait environ 710 heures.</p>
      <p>
      Maintenant que nous nous connaissons un peu mieux, laissez-moi vous en dire plus sur mes connaissances!<a href="/#/skills"><i class="fa-solid fa-circle-info ms-2"></i></a></p>`,
      shopify:"Ce projet est un E-Commerce conçu et construit par moi avec des technologies comme React, Node JS, Mongo DB, Express, etc.",
      cookers:"Ce projet est un API Rest conçu et construit par moi avec des technologies comme React, Node JS, Express, Postgres, Sequelize, etc.",
      chat:"Ce projet est un chat de base conçu et construit par moi en utilisant des technologies telles que Node JS, Express, JQuery, Socket.io, etc.",
      pwa:"Ce projet, conçu et construit par moi avec du pur JavaScript Vanilla est une application Web progressive de base, en fait ma première !",
      wordPress:"Ce projet, conçu et construit pour moi, ne permet pas de consommer cualquier site web créé en WordPress en utilisant l'API de WordPress.",
      pokemon:"Ce projet est une API Rest de base (Just GET/READ) sur les Pokémons, conçue et construite par moi avec du pur JavaScript Vanilla.",
      spotify:"Ce projet, conçu et construit par moi avec du pur JavaScript Vanilla, est une API REST de base (Just GET/READ) utilisant l'API de Spotify.",
      domJS:"Ce projet est un PWA, et en fait mon premier projet, conçu et construit par moi avec du pur JavaScript vanille !",
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
      p14:"Ce Bootcamp comporte 4 modules et 2 projets finaux où vous devez mettre en œuvre ce que vous avez appris dans les modules. Ci-dessous, vous pouvez voir le programme complet et mes projets Henry!",
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