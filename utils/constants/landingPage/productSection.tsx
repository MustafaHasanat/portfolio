import DvrRoundedIcon from "@mui/icons-material/DvrRounded";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import KeyboardRoundedIcon from "@mui/icons-material/KeyboardRounded";

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
                icon: (color: string, size: string) => (
                    <DvrRoundedIcon
                        sx={{ color: color, width: "auto", height: size }}
                    />
                ),
                title: "web",
                description:
                    "I build responsive web applications using modern frameworks",
                tags: ["frontend", "backend", "UI/UX", "unit test"],
            },
            back: {
                cards: [
                    {
                        src: String.raw`\icons\frameworks\reactIcon.png`,
                        name: "React",
                        projects: 0,
                    },
                    {
                        src: String.raw`\icons\frameworks\nextIcon.png`,
                        name: "Next.js",
                        projects: 0,
                    },
                    {
                        src: String.raw`\icons\frameworks\angularIcon.png`,
                        name: "Angular",
                        projects: 0,
                    },
                    {
                        src: String.raw`\icons\frameworks\nodeIcon.png`,
                        name: "Node.js",
                        projects: 0,
                    },
                    {
                        src: String.raw`\icons\frameworks\djangoIcon.png`,
                        name: "Django",
                        projects: 0,
                    },
                    {
                        src: String.raw`\icons\frameworks\fastAPIIcon.png`,
                        name: "FastAPI",
                        projects: 0,
                    },
                    {
                        src: String.raw`\icons\frameworks\flaskIcon.png`,
                        name: "Flask",
                        projects: 0,
                    },
                ],
            },
        },
        {
            front: {
                icon: (color: string, size: string) => (
                    <PhoneIphoneRoundedIcon
                        sx={{ color: color, width: "auto", height: size }}
                    />
                ),
                title: "mobile",
                description:
                    "I build interactive mobile applications using cross-platform frameworks",
                tags: ["frontend", "backend", "cross-platform", "UI/UX"],
            },
            back: {
                cards: [
                    {
                        src: String.raw`\icons\frameworks\reactIcon.png`,
                        name: "React Native",
                        projects: 0,
                    },
                    {
                        src: String.raw`\icons\frameworks\flutterIcon.png`,
                        name: "Flutter",
                        projects: 0,
                    },
                ],
            },
        },
        {
            front: {
                icon: (color: string, size: string) => (
                    <KeyboardRoundedIcon
                        sx={{ color: color, width: "auto", height: size }}
                    />
                ),
                title: "desktop",
                description:
                    "I build modern interactive desktop applications to automate tasks",
                tags: ["frontend", "UI/UX"],
            },
            back: {
                cards: [
                    {
                        src: String.raw`\icons\frameworks\tkinterIcon.png`,
                        name: "TkInter",
                        projects: 0,
                    },
                    {
                        src: String.raw`\icons\frameworks\electronIcon.png`,
                        name: "Electron.js",
                        projects: 0,
                    },
                ],
            },
        }
    ],
};

export default ProductSectionConstants;
