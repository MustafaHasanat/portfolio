import IconicButton from "@/components/shared/iconicButton";
import AutoStoriesSharpIcon from "@mui/icons-material/AutoStoriesSharp";
import { Stack, Typography, useTheme } from "@mui/material";
import Link from "next/link";

const ButtonSet = () => {
    const theme = useTheme();

    return (
        <Stack
            spacing={2}
            ml={3}
            sx={{
                float: "right",
            }}
        >
            <Link href="/about/story" title="Go to my resume page">
                <IconicButton
                    icon={
                        <AutoStoriesSharpIcon
                            sx={{
                                color: theme.palette.primary.main,
                                height: "100%",
                            }}
                        />
                    }
                    color={theme.palette.text.primary}
                    hoverColor={theme.palette.primary.main}
                    onClick={() => {}}
                    extraSX={{
                        width: "18vw",
                        height: "8vh",
                        zIndex: 3,
                    }}
                >
                    <Typography
                        fontSize="1.3vw"
                        textTransform="uppercase"
                        letterSpacing={2}
                    >
                        read full story
                    </Typography>
                </IconicButton>
            </Link>
        </Stack>
    );
};

export default ButtonSet;
