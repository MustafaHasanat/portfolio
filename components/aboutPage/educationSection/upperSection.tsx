import { Certificate } from "@/types/certificate";
import { Avatar, Stack, Typography, useTheme } from "@mui/material";

interface UpperSectionProps {
    cert: Certificate;
}

const UpperSection = ({ cert }: UpperSectionProps) => {
    const theme = useTheme();

    const textItem = (key: string, value: string) => {
        return (
            <Stack direction="row" spacing={1}>
                <Typography
                    color={theme.palette.text.primary}
                    fontWeight="bold"
                >
                    {key}
                </Typography>
                <Typography
                    color={theme.palette.text.primary}
                    sx={{ opacity: 0.8 }}
                >
                    {value}
                </Typography>
            </Stack>
        );
    };

    return (
        <Stack
            direction={{ xs: "column", lg: "row" }}
            justifyContent="start"
            alignItems="center"
        >
            <Avatar
                variant="square"
                src={cert.logo.asset.url}
                sx={{
                    width: { xs: "50%", lg: "25%" },
                    height: "fit-content",
                    mb: { xs: 3, lg: 0 },
                }}
            />

            <Stack
                ml={3}
                justifyContent="space-between"
                spacing={{ xs: 2, lg: 0 }}
                sx={{
                    width: "fit-content",
                }}
            >
                {textItem("Facility:", cert.facility)}
                {textItem("Degree:", cert.degree)}
                {textItem("Start:", cert.startDate.toString())}
                {textItem("End:", cert.endDate.toString())}
            </Stack>
        </Stack>
    );
};

export default UpperSection;
