import { Course } from "@/types/course";
import {
    Avatar,
    Divider,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

interface CourseCardProps {
    course: Course;
    index: number;
    toggleCard: (currentIndex: number) => void;
    isCardOpened: (index: number) => boolean;
}

const CourseCard = ({
    course,
    index,
    toggleCard,
    isCardOpened,
}: CourseCardProps) => {
    const theme = useTheme();
    const isVisible = isCardOpened(index);

    const detailsBox = (key: string, value: string | Date) => {
        return (
            <Stack direction="row" spacing={1}>
                <Typography fontWeight="bold" textTransform="capitalize">
                    {key}
                </Typography>
                <Typography textTransform="capitalize">
                    {value.toString()}
                </Typography>
            </Stack>
        );
    };

    return (
        <Stack
            component={motion.div}
            borderRadius={2}
            overflow="hidden"
            initial={{ minHeight: "10vh" }}
            animate={{
                minHeight: isVisible ? "30vh" : "10vh",
            }}
            width="100%"
            bgcolor={theme.palette.text.primary}
            alignItems="center"
        >
            <Stack
                justifyContent="space-between"
                alignItems="center"
                direction="row"
                width="100%"
                bgcolor={theme.palette.text.primary}
                onClick={() => {
                    toggleCard(index);
                }}
                sx={{
                    cursor: "pointer",
                    transition: "opacity 0.3s ease",
                    minHeight: "10vh",
                    maxHeight: "10vh",

                    ":hover": {
                        opacity: 0.5,
                    },
                }}
            >
                <Stack justifyContent="center" height="100%" width="85%">
                    <Typography
                        padding={2}
                        textTransform="capitalize"
                        fontWeight="bold"
                        width="90%"
                    >
                        {course.title}
                    </Typography>
                </Stack>

                <Avatar
                    variant="square"
                    src={course.issuer.image.asset.url}
                    sx={{
                        height: "100%",
                        width: "15%",
                    }}
                />
            </Stack>

            <Divider
                sx={{
                    bgcolor: theme.palette.text.primary,
                    width: "80%",
                    marginY: 1.5,
                }}
            />

            <Stack
                direction="row"
                width="100%"
                height="15vh"
                p={1}
                justifyContent="space-evenly"
            >
                <Stack width="50%" justifyContent="space-evenly">
                    {detailsBox("category:", course.category)}
                    {detailsBox("issuer:", course.issuer.issuer)}
                    {detailsBox("date:", course.date)}
                </Stack>

                <Avatar
                    variant="square"
                    src={course.image.asset.url}
                    sx={{ width: "auto", height: "auto" }}
                />
            </Stack>
        </Stack>
    );
};

export default CourseCard;
