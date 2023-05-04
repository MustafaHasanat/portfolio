import DvrRoundedIcon from "@mui/icons-material/DvrRounded";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import KeyboardRoundedIcon from "@mui/icons-material/KeyboardRounded";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";

const ProductSectionConstants = {
    productsIcons: [],
    
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
                        src: String.raw`\icons\frameworks\frontend\reactIcon.png`,
                        name: "React",
                        projects: 0,
                    },
                    {
                        src: String.raw`\icons\frameworks\frontend\nextIcon.png`,
                        name: "Next.js",
                        projects: 0,
                    },
                    {
                        src: String.raw`\icons\frameworks\frontend\angularIcon.png`,
                        name: "Angular",
                        projects: 0,
                    },
                    {
                        src: String.raw`\icons\frameworks\backend\nodeIcon.png`,
                        name: "Node.js",
                        projects: 0,
                    },
                    {
                        src: String.raw`\icons\frameworks\backend\djangoIcon.png`,
                        name: "Django",
                        projects: 0,
                    },
                    {
                        src: String.raw`\icons\frameworks\backend\fastAPIIcon.png`,
                        name: "FastAPI",
                        projects: 0,
                    },
                    {
                        src: String.raw`\icons\frameworks\backend\flaskIcon.png`,
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
                        src: String.raw`\icons\frameworks\frontend\reactIcon.png`,
                        name: "React Native",
                        projects: 0,
                    },
                    {
                        src: String.raw`\icons\frameworks\frontend\flutterIcon.png`,
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
                        src: String.raw`\icons\frameworks\frontend\tkinterIcon.png`,
                        name: "TkInter",
                        projects: 0,
                    },
                    {
                        src: String.raw`\icons\frameworks\frontend\electronIcon.png`,
                        name: "Electron.js",
                        projects: 0,
                    },
                ],
            },
        },
        {
            front: {
                icon: (color: string, size: string) => (
                    <PrecisionManufacturingIcon
                        sx={{ color: color, width: "auto", height: size }}
                    />
                ),
                title: "robots",
                description:
                    "I design and build robots and IoT projects with various communication systems",
                tags: ["robots", "IoT", "CNC"],
            },
            back: {
                cards: [
                    {
                        src: String.raw`\icons\electronics\arduinoIcon.png`,
                        name: "Arduino",
                        projects: 0,
                    },
                    {
                        src: String.raw`\icons\electronics\nodeMCUIcon.png`,
                        name: "ESP",
                        projects: 0,
                    },
                ],
            },
        },
    ],
};

export default ProductSectionConstants;
