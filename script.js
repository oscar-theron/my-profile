// Objets de traduction
const translations = {
    fr: {
        welcomeMessage: "Bonjour, je suis Oscar Theron et bienvenue sur mon site personnel où vous pouvez apprendre à me connaître !",
        learnMore: "En savoir plus sur moi",
        aboutMeHeader: "À propos de moi",
        aboutMeDescription: "Je suis actuellement en première année à l'IESEG School of Management et je vais obtenir mon diplôme en 2029. Je suis passionné par le sport, notamment la course à pied, le tennis et la natation, et j'aime apprendre de nouvelles technologies comme le codage.",
        hobbiesHeader: "Mes Hobbies",
        hobbiesDescription: "J'aime faire du sport, surtout de la course à pieds, de la natation et du tennis. J'aime explorer la nature, lire des livres et visiter de nouveaux pays pour découvrir de nouvelles cultures et apprendre des langues.",
        projectsHeader: "Mes Projets",
        projectsDescription: "Je cherche à monter une start-up et devenir auto-entrepreneur et je travaille sur divers porjets pour me faire une idée concrète et commencer l'aventure de l'auto-entreprenariat.",
        passionsHeader: "Mes Passions",
        passionsDescription: "Je suis passionné par le sport, la technologie et l'innovation.",
        socialHeader: "Mes Réseaux Sociaux",
        backToLanguages: "Retour aux langues"
    },
    en: {
        welcomeMessage: "Hello, I'm Oscar Theron, and welcome to my personal website where you can get to know me!",
        learnMore: "Learn more about me",
        aboutMeHeader: "About Me",
        aboutMeDescription: "I am currently in my first year at IESEG School of Management and will graduate in 2029. I'm passionate about sports, especially running, tennis, and swimming, and I enjoy learning new technologies like coding.",
        hobbiesHeader: "My Hobbies",
        hobbiesDescription: "I enjoy doing sports, especially running, swimming and tennis. I love exploring nature, reading books and visiting new countries to experience new cultures and learn languages.",
        projectsHeader: "My Projects",
        projectsDescription: "I am looking to set up a start-up and become self-employed and I am working on various projects to get a concrete idea and begin the adventure of self-entrepreneurship.",
        passionsHeader: "My Passions",
        passionsDescription: "I am passionate about sport, technology and innovation.",
        socialHeader: "My Social Networks",
        backToLanguages: "Back to languages"
    },
    es: {
        welcomeMessage: "Hola, soy Oscar Theron y bienvenido a mi sitio personal donde puedes conocerme!",
        learnMore: "Más sobre mí",
        aboutMeHeader: "Sobre mí",
        aboutMeDescription: "Actualmente estoy en mi primer año en la IESEG School of Management y me graduaré en 2029. Me apasionan los deportes, especialmente correr, el tenis y la natación, y disfruto aprender nuevas tecnologías como la programación.",
        hobbiesHeader: "Mis Pasatiempos",
        hobbiesDescription: "Me gusta hacer deportes, especialmente correr, nadar y tenis. Me encanta explorar la naturaleza, leer libros y visitar nuevos países para experimentar nuevas culturas y aprender idiomas.",
        projectsHeader: "Mis Proyectos",
        projectsDescription: "TEstoy buscando montar una start-up y trabajar por cuenta propia y estoy trabajando en varios proyectos para tener una idea concreta y comenzar la aventura del autoemprendimiento.",
        passionsHeader: "Mis Pasiones",
        passionsDescription: "Me apasiona el deporte, la tecnología y la innovación.",
        socialHeader: "Mis Redes Sociales",
        backToLanguages: "Volver a idiomas"
    },
    de: {
        welcomeMessage: "Hallo, ich bin Oscar Theron, und willkommen auf meiner persönlichen Website, wo Sie mich kennenlernen können!",
        learnMore: "Mehr über mich",
        aboutMeHeader: "Über mich",
        aboutMeDescription: "Ich bin derzeit im ersten Jahr an der IESEG School of Management und werde 2029 meinen Abschluss machen. Ich bin begeistert von Sport, insbesondere Laufen, Tennis und Schwimmen, und ich lerne gerne neue Technologien wie das Programmieren.",
        hobbiesHeader: "Meine Hobbys",
        hobbiesDescription: "Ich treibe gerne Sport, besonders Laufen, Schwimmen und Tennis. Ich liebe es, die Natur zu erkunden, Bücher zu lesen und neue Länder zu bereisen, um neue Kulturen kennenzulernen und Sprachen zu lernen.",
        projectsHeader: "Meine Projekte",
        projectsDescription: "Ich möchte ein Start-up gründen und mich selbstständig machen. Ich arbeite an verschiedenen Projekten, um eine konkrete Idee zu bekommen und das Abenteuer des Selbstunternehmertums zu beginnen.",
        passionsHeader: "Meine Leidenschaften",
        passionsDescription: "Ich interessiere mich für Sport, Technologie und Innovation.",
        socialHeader: "Meine sozialen Netzwerke",
        backToLanguages: "Zurück zu Sprachen"
    }
};

// Fonction pour définir la langue et afficher le contenu d'introduction
function setLanguage(lang) {
    const content = translations[lang];

    document.getElementById("welcome-message").textContent = content.welcomeMessage;
    document.getElementById("learn-more-btn").textContent = content.learnMore;
    document.getElementById("back-to-languages-btn").textContent = content.backToLanguages;
    document.getElementById("back-to-languages-btn-content").textContent = content.backToLanguages;

    document.getElementById("about-me-header").textContent = content.aboutMeHeader;
    document.getElementById("about-me-description").textContent = content.aboutMeDescription;
    document.getElementById("hobbies-header").textContent = content.hobbiesHeader;
    document.getElementById("hobbies-description").textContent = content.hobbiesDescription;
    document.getElementById("projects-header").textContent = content.projectsHeader;
    document.getElementById("projects-description").textContent = content.projectsDescription;
    document.getElementById("passions-header").textContent = content.passionsHeader;
    document.getElementById("passions-description").textContent = content.passionsDescription;
    document.getElementById("social-header").textContent = content.socialHeader;

    // Masquer la sélection de langue et afficher la section d'intro
    document.getElementById("language-selection").style.display = "none";
    showIntro();
}

// Fonction pour afficher la section d'introduction
function showIntro() {
    document.querySelector(".intro-section").style.display = "flex";
}

// Fonction pour afficher le contenu principal
function showContent() {
    document.querySelector(".intro-section").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    document.getElementById("back-to-languages-btn-content").style.display = "block"; // Affiche le bouton retour
}

// Fonction pour revenir à la sélection de langue
function goBackToLanguageSelection() {
    // Affiche la sélection de langue et masque le contenu principal
    document.getElementById("language-selection").style.display = "block";
    document.querySelector(".intro-section").style.display = "none";
    document.getElementById("main-content").style.display = "none";
    document.getElementById("back-to-languages-btn-content").style.display = "none"; // Cache le bouton retour
}