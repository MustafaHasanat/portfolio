const navbarItems = [
    {
        id: 0,
        title: "home",
        link: String.raw`/`,
    },
    {
        id: 1,
        title: "about me",
        link: String.raw`/about`,
    },
    {
        id: 2,
        title: "contact me",
        link: String.raw`/contact`,
    },
    {
        id: 3,
        title: "projects",
        link: String.raw`/projects`,
    },
    {
        id: 4,
        title: "technical documents",
        link: String.raw`/docs`,
    },
];

const avatarIons = [
    {
        id: "react-orbital-icon",
        src: String.raw`\icons\reactIcon.png`,
        rotateZ: 60,
        rotateY: 80,
        delay: 0,
        shadow: "cyan",
    },
    {
        id: "angular-orbital-icon",
        src: String.raw`icons\angularIcon.png`,
        rotateZ: 60,
        rotateY: 80,
        delay: 0.8,
        shadow: "red",
    },
    {
        id: "flutter-orbital-icon",
        src: String.raw`icons\flutterIcon.png`,
        rotateZ: 60,
        rotateY: 80,
        delay: 1.6,
        shadow: "cyan",
    },
    {
        id: "github-orbital-icon",
        src: String.raw`icons\githubIcon.png`,
        rotateZ: 60,
        rotateY: 80,
        delay: 2.4,
        shadow: "white",
    },
    {
        id: "node-orbital-icon",
        src: String.raw`icons\nodeIcon.png`,
        rotateZ: -60,
        rotateY: 80,
        delay: 0.3,
        shadow: "green",
    },
    {
        id: "fastAPI-orbital-icon",
        src: String.raw`icons\fastAPIIcon.png`,
        rotateZ: -60,
        rotateY: 80,
        delay: 1.1,
        shadow: "cyan",
    },
    {
        id: "docker-orbital-icon",
        src: String.raw`icons\dockerIcon.png`,
        rotateZ: -60,
        rotateY: 80,
        delay: 1.9,
        shadow: "white",
    },
    {
        id: "django-orbital-icon",
        src: String.raw`icons\djangoIcon.png`,
        rotateZ: -60,
        rotateY: 80,
        delay: 2.7,
        shadow: "white",
    },
    {
        id: "html-orbital-icon",
        src: String.raw`icons\htmlIcon.png`,
        rotateZ: 0,
        rotateY: 80,
        delay: 0.6,
        shadow: "orange",
    },
    {
        id: "css-orbital-icon",
        src: String.raw`icons\cssIcon.png`,
        rotateZ: 0,
        rotateY: 80,
        delay: 1.4,
        shadow: "lightblue",
    },
    {
        id: "js-orbital-icon",
        src: String.raw`icons\jsIcon.png`,
        rotateZ: 0,
        rotateY: 80,
        delay: 2.2,
        shadow: "yellow",
    },
    {
        id: "python-orbital-icon",
        src: String.raw`icons\pythonIcon.png`,
        rotateZ: 0,
        rotateY: 80,
        delay: 3,
        shadow: "blue",
    },
];

const techSkills = [
    {
        id: crypto.randomUUID(),
        name: "react",
        src: String.raw`\icons\reactIcon.png`,
    },
    {
        id: crypto.randomUUID(),
        name: "angular",
        src: String.raw`icons\angularIcon.png`,
    },
    {
        id: crypto.randomUUID(),
        name: "flutter",
        src: String.raw`icons\flutterIcon.png`,
    },
    {
        id: crypto.randomUUID(),
        name: "github",
        src: String.raw`icons\githubIcon.png`,
    },
    {
        id: crypto.randomUUID(),
        name: "node",
        src: String.raw`icons\nodeIcon.png`,
    },
    {
        id: crypto.randomUUID(),
        name: "fastAPI",
        src: String.raw`icons\fastAPIIcon.png`,
    },
    {
        id: crypto.randomUUID(),
        name: "docker",
        src: String.raw`icons\dockerIcon.png`,
    },
    {
        id: crypto.randomUUID(),
        name: "django",
        src: String.raw`icons\djangoIcon.png`,
    },
    {
        id: crypto.randomUUID(),
        name: "html",
        src: String.raw`icons\htmlIcon.png`,
    },
    {
        id: crypto.randomUUID(),
        name: "css",
        src: String.raw`icons\cssIcon.png`,
    },
    {
        id: crypto.randomUUID(),
        name: "js",
        src: String.raw`icons\jsIcon.png`,
    },
    {
        id: crypto.randomUUID(),
        name: "python",
        src: String.raw`icons\pythonIcon.png`,
    },
    {
        id: crypto.randomUUID(),
        name: "dart",
        src: String.raw`\icons\dartIcon.png`,
    },
    {
        id: crypto.randomUUID(),
        name: "git",
        src: String.raw`\icons\gitIcon.png`,
    },
    {
        id: crypto.randomUUID(),
        name: "bash",
        src: String.raw`\icons\bashIcon.png`,
    },
    {
        id: crypto.randomUUID(),
        name: "vscode",
        src: String.raw`\icons\vscodeIcon.png`,
    },
    {
        id: crypto.randomUUID(),
        name: "sequelize",
        src: String.raw`\icons\sequelizeIcon.png`,
    },
    {
        id: crypto.randomUUID(),
        name: "postgres",
        src: String.raw`\icons\postgresqlIcon.png`,
    },
    {
        id: crypto.randomUUID(),
        name: "sql",
        src: String.raw`\icons\sqlIcon.jpg`,
    },
    {
        id: crypto.randomUUID(),
        name: "sqllight",
        src: String.raw`\icons\sqlLightIcon.png`,
    },
    {
        id: crypto.randomUUID(),
        name: "mysql",
        src: String.raw`\icons\mysqlIcon.png`,
    },
    {
        id: crypto.randomUUID(),
        name: "flask",
        src: String.raw`\icons\flaskIcon.png`,
    },
    {
        id: crypto.randomUUID(),
        name: "alembic",
        src: String.raw`\icons\alembicIcon.png`,
    },
    //   {
    //     name: "express",
    //     // src: String.raw`\icons\reactIcon.png`,
    //   },
    //   {
    //     name: "apolo",
    //     // src: String.raw`\icons\reactIcon.png`,
    //   },
    //   {
    //     name: "graphql",
    //     // src: String.raw`\icons\reactIcon.png`,
    //   },
    //   {
    //     name: "jest",
    //     // src: String.raw`\icons\reactIcon.png`,
    //   },
    //   {
    //     name: "redux",
    //     // src: String.raw`\icons\reactIcon.png`,
    //   },
    //   {
    //     name: "bootstrap",
    //     // src: String.raw`\icons\reactIcon.png`,
    //   },
    //   {
    //     name: "tailwind",
    //     // src: String.raw`\icons\reactIcon.png`,
    //   },
    //   {
    //     name: "swagger",
    //     // src: String.raw`\icons\reactIcon.png`,
    //   },
    //   {
    //     name: "axios",
    //     // src: String.raw`\icons\reactIcon.png`,
    //   },
    //   {
    //     name: "typescript",
    //     // src: String.raw`\icons\reactIcon.png`,
    //   },
    //   {
    //     name: "sass",
    //     // src: String.raw`\icons\reactIcon.png`,
    //   },
    //   {
    //     name: "pandas",
    //     // src: String.raw`\icons\reactIcon.png`,
    //   },
    //   {
    //     name: "numpy",
    //     // src: String.raw`\icons\reactIcon.png`,
    //   },
    //   {
    //     name: "arduino",
    //     // src: String.raw`\icons\reactIcon.png`,
    //   },
    //   {
    //     name: "seaborn",
    //     // src: String.raw`\icons\reactIcon.png`,
    //   },
    //   {
    //     name: "matplotlib",
    //     // src: String.raw`\icons\reactIcon.png`,
    //   },
    //   {
    //     name: "firebase",
    //     // src: String.raw`\icons\reactIcon.png`,
    //   },
    //   {
    //     name: "excel",
    //     // src: String.raw`\icons\reactIcon.png`,
    //   },
    //   {
    //     name: "powerpoint",
    //     // src: String.raw`\icons\reactIcon.png`,
    //   },
    //   {
    //     name: "word",
    //     // src: String.raw`\icons\reactIcon.png`,
    //   },
    //   {
    //     name: "leetcode",
    //     // src: String.raw`\icons\reactIcon.png`,
    //   },
    //   {
    //     name: "iot",
    //     // src: String.raw`\icons\reactIcon.png`,
    //   },
    //   {
    //     name: "mongodb",
    //     // src: String.raw`\icons\reactIcon.png`,
    //   },
    //   {
    //     name: "heroku",
    //     // src: String.raw`\icons\reactIcon.png`,
    //   },
];

const contacts = {
    contactMethods: [
        {
            name: "phone",
            src: String.raw`\icons\phoneIcon.png`,
        },
        {
            name: "gmail",
            src: String.raw`\icons\gmailIcon.svg`,
        },
        {
            name: "whatsapp",
            src: String.raw`\icons\whatsappIcon.png`,
        },
        {
            name: "messenger",
            src: String.raw`\icons\messengerIcon.png`,
        },
    ],
    accounts: [
        {
            name: "facebook",
            src: String.raw`\icons\facebookIcon.png`,
        },
        {
            name: "github",
            src: String.raw`\icons\githubIcon.png`,
        },
        {
            name: "leetcode",
            src: String.raw`\icons\leetcodeIcon.png`,
        },
        {
            name: "linkedin",
            src: String.raw`\icons\linkedinIcon.png`,
        },
        {
            name: "calendly",
            src: String.raw`\icons\calendlyIcon.png`,
        },
    ],
};

const constants = {
    navbarItems,
    avatarIons,
    techSkills,
    contacts,
};

export default constants;
