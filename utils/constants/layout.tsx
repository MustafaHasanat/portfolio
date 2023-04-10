import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import PortraitIcon from '@mui/icons-material/Portrait';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const LayoutConstants = {
    navbarItems: [
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
            title: "documents",
            link: String.raw`/docs`,
        },
    ],

    footerFormFields: (color: string) => [
        {
            label: "subject",
            type: "text",
            defaultValue: "Let's work together!",
            icon: (
                <GpsFixedIcon
                    sx={{
                        color: color,
                        width: "10%",
                        height: "auto",
                    }}
                />
            ),
        },
        {
            label: "name",
            type: "text",
            icon: (
                <PortraitIcon
                    sx={{
                        color: color,
                        width: "10%",
                        height: "auto",
                    }}
                />
            ),
        },
        {
            label: "email",
            type: "email",
            icon: (
                <AlternateEmailIcon
                    sx={{
                        color: color,
                        width: "10%",
                        height: "auto",
                    }}
                />
            ),
        },
        {
            label: "phone",
            type: "tel",
            icon: (
                <AddIcCallIcon
                    sx={{
                        color: color,
                        width: "10%",
                        height: "auto",
                    }}
                />
            ),
        },
    ],
};

export default LayoutConstants;
