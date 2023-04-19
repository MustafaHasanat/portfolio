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
                color={theme.palette.base.light}
                textTransform="uppercase"
                fontSize="1.5vw"
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
                                    fontSize: "1.2vw",
                                    color: theme.palette.base.light,
                                    bgcolor: theme.palette.blue.main,
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
