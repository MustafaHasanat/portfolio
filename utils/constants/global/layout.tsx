import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import PortraitIcon from "@mui/icons-material/Portrait";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import { urls } from "./global";

const LayoutConstants = {
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
            title: "products",
            link: String.raw`/products`,
            navigationBars: [],
        },
    ],

    footerFormFields: [
        {
            label: "subject",
            type: "text",
            isRequired: true,
            helperText: "Title of your message",
            icon: (error: boolean, color: string) => (
                <GpsFixedIcon
                    color={error ? "error" : undefined}
                    sx={{
                        color: error ? undefined : color,
                        width: "100%",
                        height: "100%",
                    }}
                />
            ),
        },
        {
            label: "email",
            type: "email",
            isRequired: true,
            helperText: "Type your email here",
            icon: (error: boolean, color: string) => (
                <AlternateEmailIcon
                    color={error ? "error" : undefined}
                    sx={{
                        color: error ? undefined : color,
                        width: "100%",
                        height: "100%",
                    }}
                />
            ),
        },
        {
            label: "name",
            type: "text",
            isRequired: false,
            helperText: "Enter your name (optional)",
            icon: (error: boolean, color: string) => (
                <PortraitIcon
                    color={error ? "error" : undefined}
                    sx={{
                        color: error ? undefined : color,
                        width: "100%",
                        height: "100%",
                    }}
                />
            ),
        },
        {
            label: "phone",
            type: "tel",
            isRequired: false,
            helperText: "Enter your phone number (optional)",
            icon: (error: boolean, color: string) => (
                <AddIcCallIcon
                    color={error ? "error" : undefined}
                    sx={{
                        color: error ? undefined : color,
                        width: "100%",
                        height: "100%",
                    }}
                />
            ),
        },
    ],

    footerSocials: [
        {
            link: urls.myCalendlyURL,
            bgcolor: "#fff",
            text: "Book a Calendly meeting",
            src: "/icons/websites/calendlyIcon.png",
            transform: "translateX(120%) translateY(-150%)",
        },
        {
            link: urls.myFacebookURL,
            bgcolor: "#1877f2",
            text: "Check my Facebook page",
            src: "/icons/websites/facebookIcon.png",
            transform: "translateX(35%) translateY(-200%)",
        },
        {
            link: urls.myLeetCodeURL,
            bgcolor: "#fff",
            text: "Check my LeetCode progress",
            src: "/icons/websites/leetCodeIcon.png",
            transform: "translateX(35%) translateY(-100%)",
        },
        {
            link: urls.myLinkedInURL,
            bgcolor: "#007ab9",
            text: "Connect with me on LinkedIn",
            src: "/icons/websites/linkedInIcon.png",
            transform: "translateX(-50%) translateY(-50%)",
        },
        {
            link: urls.myUdemyURL,
            bgcolor: "#fff",
            text: "Get my courses on Udemy",
            src: "/icons/websites/udemyIcon.png",
            transform: "translateX(-50%) translateY(50%)",
        },
        {
            link: urls.myGitHubURL,
            bgcolor: "#fff",
            text: "Check my GitHub repos",
            src: "/icons/tools/githubIcon.png",
            transform: "translateX(-135%) translateY(-100%)",
        },
        {
            link: urls.myDribbbleURL,
            bgcolor: "#e84c88",
            text: "Check my Dribbble shots",
            src: "/icons/tools/dribbbleIcon.svg",
            transform: "translateX(-135%) translateY(100%)",
        },
        {
            link: urls.myCourseraURL,
            bgcolor: "#0056d2",
            text: "Skills earned by Coursera",
            src: "/icons/tools/courseraIcon.png",
            transform: "translateX(35%) translateY(100%)",
        },
    ],
};

export default LayoutConstants;
