const translations = {

    pt: {
        navHome: "Início",
        navAbout: "Sobre mim",
        navStack: "Tech Stack",
        navProjects: "Projetos",
        navContact: "Contato",
        paymentTitle: "API de Pagamentos",
        transactionTitle: "API de Transações",

        heroLabel: "BACKEND DEVELOPER ✨",

        heroDescription:
            "Transformo lógica e regras de negócio em APIs backend bem estruturadas com Java e Spring Boot.",

        viewProjects: "Ver projetos →",
        contact: "Entrar em contato 💗",

        aboutTitle: "Sobre mim",

        aboutDescription:
            "Minha jornada em desenvolvimento de software começou em 2023, durante minha formação no Canadá. Desde então, venho aprofundando meus conhecimentos em desenvolvimento backend, com foco em Java e Spring Boot. Agora, de volta ao Brasil, continuo colocando esses conhecimentos em prática por meio de projetos, explorando APIs REST, bancos de dados, testes e boas práticas de desenvolvimento.",

        projectsKicker: "MEUS PROJETOS ✨",

        projectsTitle: "Projetos",

        projectsDescription:
            "Projetos que desenvolvi para colocar meus estudos em prática e evoluir minhas habilidades em desenvolvimento backend.",

        featuredProject: "Projeto em destaque",


        /* PAYMENT API */

        paymentDescription:
            "Simula um fluxo de pagamentos com geração de QR Code e controle de diferentes status. O projeto explora regras de negócio, validações, tratamento de exceções, DTOs e testes.",
        paymentFeatureLifecycle:
            "Fluxo de pagamentos",

        paymentFeatureRules:
            "Regras de negócio e validações",

        paymentFeatureQrCode:
            "Geração de QR Code",

        paymentFeatureRest:
            "Tratamento de erros e exceções",


        /* TRANSACTION API */

        transactionDescription:
"Gerencia transações financeiras por meio de operações CRUD em uma arquitetura organizada em camadas. Inclui DTOs, validações, tratamento de exceções, testes unitários e documentação da API.",
        projectFeatureCrud:
            "Operações CRUD completas",

        projectFeatureDto:
            "DTOs e validação",

        projectFeatureExceptions:
            "Arquitetura em camadas",

        projectFeatureTests:
            "Testes e documentação",

        projectFeatureDocs:
            "Documentação com Swagger",



        viewGithub:
            "Ver no GitHub ↗",


        /* CONTATO */

        contactKicker:
            "CONTATO 💗",

        contactTitle:
            "Vamos conversar?",

        contactDescription:
            "Estou aberta a oportunidades, conexões e novos desafios na área de desenvolvimento de software.",

        sendEmail:
            "Enviar e-mail",

        catMessage:
            "coding & coffee ☕️✨",

        footerText:
            "Feito com 💗 e código ☕️"
    },


    en: {
        navHome: "Home",
        navAbout: "About me",
        navStack: "Tech Stack",
        navProjects: "Projects",
        navContact: "Contact",
        paymentTitle: "Payment API",
        transactionTitle: "Transaction API",

        heroLabel: "BACKEND DEVELOPER ✨",

        heroDescription:
            "I turn logic and business rules into well-structured backend APIs using Java and Spring Boot.",

        viewProjects: "View projects →",
        contact: "Get in touch 💗",

        aboutTitle: "About me",

        aboutDescription:
            "My journey in software development began in 2023, during my studies in Canada. Since then, I have been deepening my knowledge of backend development, with a focus on Java and Spring Boot. Now, back in Brazil, I continue putting these skills into practice through projects, exploring REST APIs, databases, testing, and software development best practices.",

        projectsKicker: "MY PROJECTS ✨",

        projectsTitle: "Projects",

        projectsDescription:
            "Projects I've built to put my studies into practice and improve my backend development skills.",

        featuredProject: "Featured project",


        /* PAYMENT API */

        paymentDescription:
        "Simulates a payment flow with QR Code generation and management of different payment statuses. The project explores business rules, validations, exception handling, DTOs, and testing.",
        paymentFeatureLifecycle:
            "Payment lifecycle",

        paymentFeatureRules:
            "Business rules and validation",

        paymentFeatureQrCode:
            "QR Code generation",

        paymentFeatureRest:
            "Tests and exception handling",


        /* TRANSACTION API */

        transactionDescription:
        "Manages financial transactions through CRUD operations using a well-structured layered architecture. Includes DTOs, validations, exception handling, unit testing, and API documentation.",
        projectFeatureCrud:
            "Complete CRUD operations",

        projectFeatureDto:
            "DTOs and validation",

        projectFeatureExceptions:
            "Layered architecture",

        projectFeatureTests:
            "Testing and documentation",


        /* LINKS */

        viewGithub:
            "View on GitHub ↗",


        /* CONTACT */

        contactKicker:
            "CONTACT 💗",

        contactTitle:
            "Let's talk?",

        contactDescription:
            "I'm open to opportunities, connections and new challenges in software development.",

        sendEmail:
            "Send email",

        catMessage:
            "coding & coffee ☕️✨",

        footerText:
            "Made with 💗 and code ☕️"
    }
};

const currentYear =
    document.getElementById("current-year");

currentYear.textContent =
    new Date().getFullYear();


/* TRADUÇÃO */

const languageButtons =
    document.querySelectorAll(".language-option");

let currentLanguage = "pt";


function changeLanguage(language) {

    currentLanguage = language;

    const elements =
        document.querySelectorAll("[data-i18n]");


    elements.forEach(function (element) {

        const translationKey =
            element.getAttribute("data-i18n");

        const translation =
            translations[currentLanguage][translationKey];


        if (translation) {
            element.innerHTML = translation;
        }

    });


    languageButtons.forEach(function (button) {

        button.classList.toggle(
            "active",
            button.getAttribute("data-lang") === currentLanguage
        );

    });


    document.documentElement.lang =
        currentLanguage === "pt"
            ? "pt-BR"
            : "en";
}


languageButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const language =
            button.getAttribute("data-lang");

        changeLanguage(language);

    });

});



changeLanguage("pt");


/* MENU MOBILE */

const menuToggle =
    document.getElementById("menu-toggle");

const navMenu =
    document.getElementById("nav-menu");


menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("open");

    const menuIsOpen =
        navMenu.classList.contains("open");

    menuToggle.textContent =
        menuIsOpen ? "✕" : "☰";

    menuToggle.setAttribute(
        "aria-expanded",
        menuIsOpen
    );

});


/* FECHAR MENU AO CLICAR EM UM LINK */

const navLinks =
    document.querySelectorAll(".nav-links a");


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