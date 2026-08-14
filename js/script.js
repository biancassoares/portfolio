const translations = {
    pt: {
        navHome: "Início",
        navAbout: "Sobre mim",
        navStack: "Tech Stack",
        navProjects: "Projetos",
        navContact: "Contato",

        heroLabel: "JAVA BACKEND DEVELOPER ✨",

        heroDescription:
            "Desenvolvo projetos backend com Java e Spring Boot, explorando APIs REST, bancos de dados, testes e boas práticas.",

        viewProjects: "Ver projetos →",
        contact: "Entrar em contato 💗",

        aboutTitle: "Sobre mim",

        aboutDescription:
            "Sou desenvolvedora em formação com foco em backend, construindo projetos com Java e Spring Boot para praticar APIs REST, bancos de dados, testes e boas práticas de desenvolvimento.",

        projectsKicker: "MEUS PROJETOS ✨",

        projectsTitle: "Projetos",

        projectsDescription:
            "Projetos que desenvolvi para colocar meus estudos em prática e evoluir minhas habilidades em desenvolvimento backend.",

        featuredProject: "Projeto em destaque",

        transactionDescription:
            "API REST desenvolvida para gerenciamento de transações, aplicando conceitos de arquitetura em camadas, validação, tratamento de exceções, testes e documentação.",

        projectFeatureCrud: "CRUD completo",

        projectFeatureDto: "DTOs e validação",

        projectFeatureExceptions: "Tratamento de exceções",

        projectFeatureTests: "Testes unitários",

        projectFeatureDocs: "Documentação com Swagger",

        viewGithub: "Ver no GitHub ↗",

        contactKicker: "CONTATO 💗",

        contactTitle: "Vamos conversar?",

        contactDescription:
            "Estou aberta a oportunidades, conexões e novos desafios na área de desenvolvimento de software.",

        sendEmail: "Enviar e-mail",

        catMessage: "código & café ☕️✨",

        footerText: "Feito com 💗 e código ☕️"
    },

    en: {
        navHome: "Home",
        navAbout: "About me",
        navStack: "Tech Stack",
        navProjects: "Projects",
        navContact: "Contact",

        heroLabel: "JAVA BACKEND DEVELOPER ✨",

        heroDescription:
            "I build backend projects with Java and Spring Boot, exploring REST APIs, databases, testing and best practices.",

        viewProjects: "View projects →",
        contact: "Get in touch 💗",

        aboutTitle: "About me",

        aboutDescription:
            "I'm a developer in training focused on backend development, building projects with Java and Spring Boot to practice REST APIs, databases, testing and software development best practices.",

        projectsKicker: "MY PROJECTS ✨",

        projectsTitle: "Projects",

        projectsDescription:
            "Projects I've built to put my studies into practice and improve my backend development skills.",

        featuredProject: "Featured project",

        transactionDescription:
            "REST API developed for transaction management, applying layered architecture, validation, exception handling, testing and documentation.",

        projectFeatureCrud: "Complete CRUD",

        projectFeatureDto: "DTOs and validation",

        projectFeatureExceptions: "Exception handling",

        projectFeatureTests: "Unit tests",

        projectFeatureDocs: "Swagger documentation",

        viewGithub: "View on GitHub ↗",

        contactKicker: "CONTACT 💗",

        contactTitle: "Let's talk?",

        contactDescription:
            "I'm open to opportunities, connections and new challenges in software development.",

        sendEmail: "Send email",

        catMessage: "coding & coffee ☕️✨",

        footerText: "Made with 💗 and code ☕️"
    }
};


const currentYear = document.getElementById("current-year");

currentYear.textContent = new Date().getFullYear();


const languageButtons = document.querySelectorAll(".language-option");

let currentLanguage = "pt";


languageButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        currentLanguage = button.getAttribute("data-lang");

        const elements = document.querySelectorAll("[data-i18n]");

        elements.forEach(function (element) {

            const translationKey = element.getAttribute("data-i18n");

            element.textContent =
                translations[currentLanguage][translationKey];

        });


        languageButtons.forEach(function (button) {
            button.classList.remove("active");
        });


        button.classList.add("active");


        document.documentElement.lang =
            currentLanguage === "pt" ? "pt-BR" : "en";

    });


});
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("open");

    const menuIsOpen = navMenu.classList.contains("open");

    menuToggle.textContent = menuIsOpen ? "✕" : "☰";

    menuToggle.setAttribute(
        "aria-expanded",
        menuIsOpen
    );

});
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("open");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});