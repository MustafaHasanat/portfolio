import { Chip, Stack, Typography, useTheme } from "@mui/material";
import { Fragment } from "react";

interface LowerSectionProps {
    cert: {
        skills: string[];
    };
}

const LowerSection = ({ cert }: LowerSectionProps) => {
    const theme = useTheme();

    return (
        <Stack mt={3} width="100%" alignItems="center">
            <Typography
                fontWeight="bold"
                color={theme.palette.text.primary}
                textTransform="uppercase"
                variant="h6"
                letterSpacing={1}
            >
                skills
            </Typography>

            <Stack
                direction="row"
                flexWrap="wrap"
                justifyContent="center"
                gap={2}
                width="100%"
                py={5}
            >
                {cert.skills.map((skill, index) => {
                    return (
                        <Fragment key={`certificate number: ${index}`}>
                            <Chip
                                label={skill}
                                sx={{
                                    fontSize: { xs: "1rem", lg: "1.2rem" },
                                    color: theme.palette.secondary.main,
                                    bgcolor: theme.palette.primary.main,
                                }}
                            />
                        </Fragment>
                    );
                })}
            </Stack>
        </Stack>
    );
};

export default LowerSection;
