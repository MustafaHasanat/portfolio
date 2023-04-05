import DvrRoundedIcon from '@mui/icons-material/DvrRounded';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import KeyboardRoundedIcon from '@mui/icons-material/KeyboardRounded';
import BugReportRoundedIcon from '@mui/icons-material/BugReportRounded';

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
                tags: ["frontend", "backend", "UI/UX"],
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
                cards: [],
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
                cards: [],
            },
        },
        {
            front: {
                icon: (color: string, size: string) => (
                    <BugReportRoundedIcon
                        sx={{ color: color, width: "auto", height: size }}
                    />
                ),
                title: "qa testing",
                description:
                    "I perform unit tests to ensure working functionalities and coverage",
                tags: ["unit tests", "lighthouse"],
            },
            back: {
                cards: [],
            },
        },
    ],
};

export default ProductSectionConstants;
