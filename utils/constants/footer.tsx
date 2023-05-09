import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import PortraitIcon from "@mui/icons-material/Portrait";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";

const footer = {
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
};

export default footer;
