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
    "Minha jornada em desenvolvimento de software começou em 2023. Desde então, venho aprofundando meus conhecimentos em backend, construindo aplicações com Java e Spring Boot e explorando APIs REST, bancos de dados, testes e boas práticas de desenvolvimento.",
        projectsKicker: "MEUS PROJETOS ✨",

        projectsTitle: "Projetos",

        projectsDescription:
            "Projetos que desenvolvi para colocar meus estudos em prática e evoluir minhas habilidades em desenvolvimento backend.",

        featuredProject: "Projeto em destaque",


        /* PAYMENT API */

        paymentDescription:
            "API REST desenvolvida com Java e Spring Boot para simular o fluxo de pagamentos de uma aplicação real. O projeto permite criar e gerenciar pagamentos, gerar QR Codes e controlar diferentes estados, como <em>PENDING</em>, <em>PAID</em>, <em>CANCELED</em> e <em>EXPIRED</em>. Além das operações da API, implementei regras de negócio para validar as transições entre estados, tratamento de erros, DTOs, validações e testes, explorando cenários além de um CRUD tradicional.",

        paymentFeatureLifecycle:
            "Ciclo de pagamento",

        paymentFeatureRules:
            "Regras de negócio",

        paymentFeatureQrCode:
            "Geração de QR Code",

        paymentFeatureRest:
            "API REST",


        /* TRANSACTION API */

        transactionDescription:
            "API REST desenvolvida com Java, Spring Boot e PostgreSQL para gerenciamento de transações financeiras. O projeto permite cadastrar, consultar, atualizar e remover transações utilizando uma arquitetura organizada em Controller, Service e Repository. Durante o desenvolvimento, implementei DTOs, validação de dados, tratamento global de exceções, testes unitários com JUnit e Mockito e documentação da API com Swagger.",

        projectFeatureCrud:
            "CRUD completo",

        projectFeatureDto:
            "DTOs e validação",

        projectFeatureExceptions:
            "Tratamento de exceções",

        projectFeatureTests:
            "Testes unitários",

        projectFeatureDocs:
            "Documentação com Swagger",


        /* LINKS */

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
            "código & café ☕️✨",

        footerText:
            "Feito com 💗 e código ☕️"
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
    "My journey in software development began in 2023. Since then, I have been deepening my backend development skills, building applications with Java and Spring Boot and exploring REST APIs, databases, testing, and software development best practices.",
        projectsKicker: "MY PROJECTS ✨",

        projectsTitle: "Projects",

        projectsDescription:
            "Projects I've built to put my studies into practice and improve my backend development skills.",

        featuredProject: "Featured project",


        /* PAYMENT API */

        paymentDescription:
            "REST API developed with Java and Spring Boot to simulate a real-world payment flow. The project allows payments to be created and managed, generates QR Codes, and controls different payment states such as <em>PENDING</em>, <em>PAID</em>, <em>CANCELED</em>, and <em>EXPIRED</em>. In addition to the API operations, I implemented business rules to validate state transitions, error handling, DTOs, validations, and tests, exploring scenarios beyond a traditional CRUD application.",

        paymentFeatureLifecycle:
            "Payment lifecycle",

        paymentFeatureRules:
            "Business rules",

        paymentFeatureQrCode:
            "QR Code generation",

        paymentFeatureRest:
            "REST API",


        /* TRANSACTION API */

        transactionDescription:
            "REST API developed with Java, Spring Boot, and PostgreSQL for managing financial transactions. The project allows transactions to be created, retrieved, updated, and deleted using an architecture organized into Controller, Service, and Repository layers. During development, I implemented DTOs, data validation, global exception handling, unit tests with JUnit and Mockito, and API documentation with Swagger.",

        projectFeatureCrud:
            "Complete CRUD",

        projectFeatureDto:
            "DTOs and validation",

        projectFeatureExceptions:
            "Exception handling",

        projectFeatureTests:
            "Unit tests",

        projectFeatureDocs:
            "Swagger documentation",


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


/* ANO ATUAL */

const currentYear =
    document.getElementById("current-year");

currentYear.textContent =
    new Date().getFullYear();


/* TRADUÇÃO */

const languageButtons =
    document.querySelectorAll(".language-option");

let currentLanguage = "pt";


languageButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        currentLanguage =
            button.getAttribute("data-lang");

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
            button.classList.remove("active");
        });


        button.classList.add("active");


        document.documentElement.lang =
            currentLanguage === "pt"
                ? "pt-BR"
                : "en";

    });

});


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