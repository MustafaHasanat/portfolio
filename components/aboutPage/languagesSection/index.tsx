import { Fragment, MutableRefObject, ReactNode, useRef } from "react";
import { Avatar, Box, Stack, Typography, useTheme } from "@mui/material";
import AnimatedTitle from "@/components/shared/animatedTitle";
import { Language } from "@/types/language";
import { motion, useInView } from "framer-motion";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

interface LanguagesSectionProps {
    inViewRef: MutableRefObject<null>;
    languages: Language[];
}

const LanguagesSection = ({ inViewRef, languages }: LanguagesSectionProps) => {
    const theme = useTheme();
    const cardRef = useRef(null);
    const cardInView = useInView(cardRef);

    const textItem = (key: string, value: string | ReactNode) => {
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
            id="about-languages"
            px={12}
            position="relative"
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

            <AnimatedTitle buttonWidth="40%" text="languages" />

            <Stack
                justifyContent="center"
                gap={15}
                my={5}
                flexWrap="wrap"
                direction="row"
            >
                {languages.map((language, index) => {
                    return (
                        <Stack
                            key={`language card number${index}`}
                            component={motion.div}
                            ref={cardRef}
                            initial={{ scale: 0.9 }}
                            animate={{
                                scale: cardInView ? 1 : 0.9,
                            }}
                            sx={{
                                width: "30vw",
                                height: "30vh",
                                position: "relative",
                                padding: 3,
                                justifyContent: "space-evenly",
                                alignItems: "center",
                                borderRadius: 3,
                                background: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.7)), url("${language.flag.asset.url}")`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                            }}
                        >
                            <Avatar
                                variant="square"
                                src={language.flag.asset.url}
                                sx={{
                                    width: "5vw",
                                    borderRadius: 1,
                                }}
                            />

                            <Stack
                                justifyContent="space-between"
                                spacing={1}
                                ml={3}
                                sx={{
                                    width: "fit-content",
                                }}
                            >
                                {textItem("Language:", language.name)}
                                {textItem("Proficiency:", language.proficiency)}

                                <Stack direction="row" spacing={0.5}>
                                    <Typography
                                        color={theme.palette.text.primary}
                                        fontWeight="bold"
                                    >
                                        Level:
                                    </Typography>

                                    {Array(language.level)
                                        .fill(0)
                                        .map((_, i) => {
                                            return (
                                                <Fragment
                                                    key={`${language.name} start number: ${i}`}
                                                >
                                                    <StarRoundedIcon
                                                        sx={{ color: "gold", opacity: 0.8 }}
                                                    />
                                                </Fragment>
                                            );
                                        })}
                                </Stack>
                            </Stack>
                        </Stack>
                    );
                })}
            </Stack>
        </Stack>
    );
};

export default LanguagesSection;
