const header = {
    navbarItems: [
        {
            title: "home",
            link: String.raw`/`,
            navigationBars: [
                "home-main",
                "home-product",
                "home-skills",
                "home-quotes",
            ],
        },
        {
            title: "about me",
            link: String.raw`/about`,
            navigationBars: [
                "about-bio",
                "about-education",
                "about-experience",
                "about-certificates",
                "about-languages",
            ],
        },
        {
            title: "projects",
            link: String.raw`/projects`,
            navigationBars: [],
        },
        {
            title: "services",
            link: String.raw`/services`,
            navigationBars: [],
        },
        {
            title: "documents",
            link: String.raw`/docs`,
            navigationBars: [],
        },
    ],
};

export default header;
