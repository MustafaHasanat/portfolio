import IconicButton from "@/components/shared/iconicButton";
import AutoStoriesSharpIcon from "@mui/icons-material/AutoStoriesSharp";
import { Stack, Typography, useTheme } from "@mui/material";
import Link from "next/link";

const ButtonSet = () => {
    const theme = useTheme();

    return (
        <Stack
            spacing={2}
            ml={{ xs: 0, md: 3 }}
            mt={3}
            sx={{
                float: { xs: "right", md: "right", lg: "left" },
            }}
        >
            <Link href="/about/story" title="Read more about me ...">
                <IconicButton
                    icon={
                        <AutoStoriesSharpIcon
                            sx={{
                                color: theme.palette.primary.main,
                                height: "100%",
                            }}
                        />
                    }
                    buttonHeight="4rem"
                    color={theme.palette.text.primary}
                    hoverColor={theme.palette.primary.main}
                    onClick={() => {}}
                    extraSX={{
                        width: { xs: "15rem", md: "18rem" },
                        zIndex: 3,
                    }}
                >
                    <Typography
                        fontSize={{ xs: "1.2rem", md: "1.3rem" }}
                        textTransform="uppercase"
                        letterSpacing={2}
                    >
                        read more
                    </Typography>
                </IconicButton>
            </Link>
        </Stack>
    );
};

export default ButtonSet;
