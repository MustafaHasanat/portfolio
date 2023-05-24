import { Fragment, MutableRefObject, useRef } from "react";
import { Box, Stack, useTheme } from "@mui/material";
import AnimatedTitle from "@/components/shared/animatedTitle";
import { Language } from "@/types/language";
import FlagBox from "./flagBox";

interface LanguagesSectionProps {
    inViewRef: MutableRefObject<null>;
    languages: Language[];
}

const LanguagesSection = ({ inViewRef, languages }: LanguagesSectionProps) => {
    const theme = useTheme();

    return (
        <Stack
            id="about-languages"
            px={{ xs: 5, md: 12 }}
            position="relative"
            alignItems="center"
            bgcolor={theme.palette.secondary.main}
            py={10}
        >
            <Box
                ref={inViewRef}
                sx={{
                    position: "absolute",
                    top: "50%",
                    width: " 100%",
                }}
            />

            <Box
                sx={{
                    width: { xs: "100%", md: "80%", lg: "40%", xl: "30%" },
                    height: { xs: "11rem", lg: "13rem" },
                }}
            >
                <AnimatedTitle
                    text="languages"
                    shadowColor={theme.palette.primary.main}
                    fontSize={{
                        xs: "0.8rem",
                        sm: "1rem",
                        md: "1.2rem",
                        lg: "1.7rem",
                    }}
                />
            </Box>

            <Stack
                justifyContent="center"
                gap={{ xs: 5, md: 15 }}
                my={5}
                flexWrap="wrap"
                direction={{ xs: "column", md: "row" }}
            >
                {languages.map((language, index) => {
                    return (
                        <Fragment key={`language card number${index}`}>
                            <FlagBox language={language} />
                        </Fragment>
                    );
                })}
            </Stack>
        </Stack>
    );
};

export default LanguagesSection;
