const ProductSectionConstants = {
    blobs: [
        // inset: top, right, bottom, left
        {
            src: String.raw`\blobs\blob1.svg`,
            size: "20vw",
            inset: "0px 0px 0px 0px",
            delay: 0,
        },
        {
            src: String.raw`\blobs\blob2.svg`,
            size: "20vw",
            inset: "200px 0px auto auto",
            delay: 2,
        },
    ],

    products: [
        {
            front: {
                src: "",
                title: "web",
                description:
                    "I build high performance web applications using modern frameworks",
                tags: ["frontend", "backend"],
            },
            back: {
                cards: [
                    {
                        src: String.raw`\icons\frameworks\reactIcon.png`,
                        title: "React",
                        projects: 3,
                    },
                    {
                        src: String.raw`\icons\frameworks\angularIcon.png`,
                        title: "Angular",
                        projects: 0,
                    },
                ],
            },
        },
    ],
};

export default ProductSectionConstants;
