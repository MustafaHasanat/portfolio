import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import PortraitIcon from "@mui/icons-material/Portrait";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import { contacts } from "./global";

const LayoutConstants = {
    navbarItems: [
        {
            title: "home",
            link: String.raw`/`,
        },
        {
            title: "about me",
            link: String.raw`/about`,
        },
        {
            title: "projects",
            link: String.raw`/projects`,
        },
        {
            title: "documents",
            link: String.raw`/docs`,
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
            link: contacts.myCalendlyURL,
            bgcolor: "#fff",
            src: "/icons/websites/calendlyIcon.png",
            transform: "translateX(120%) translateY(-150%)",
        },
        {
            link: contacts.myFacebookURL,
            bgcolor: "#1877f2",
            src: "/icons/websites/facebookIcon.png",
            transform: "translateX(35%) translateY(-200%)",
        },
        {
            link: contacts.myLeetCodeURL,
            bgcolor: "#fff",
            src: "/icons/websites/leetCodeIcon.png",
            transform: "translateX(35%) translateY(-100%)",
        },
        {
            link: contacts.myLinkedInURL,
            bgcolor: "#007ab9",
            src: "/icons/websites/linkedInIcon.png",
            transform: "translateX(-50%) translateY(-50%)",
        },
        {
            link: contacts.myUdemyURL,
            bgcolor: "#fff",
            src: "/icons/websites/udemyIcon.png",
            transform: "translateX(-50%) translateY(50%)",
        },
        {
            link: contacts.myGitHubURL,
            bgcolor: "#fff",
            src: "/icons/tools/githubIcon.png",
            transform: "translateX(-135%) translateY(-100%)",
        },
    ],
};

export default LayoutConstants;
