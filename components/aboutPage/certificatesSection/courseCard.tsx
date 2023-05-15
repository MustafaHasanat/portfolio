import { modalActions } from "@/utils/store/store";
import {
    Avatar,
    Box,
    Divider,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import {
    CourseCardImageStyles,
    CourseCardProps,
    CourseCardStyles,
    CourseCardUpperBoxStyles,
} from "./styles";

const CourseCard = ({
    course,
    index,
    toggleCard,
    isCardOpened,
    setModalPhoto,
}: CourseCardProps) => {
    const theme = useTheme();
    const isVisible = isCardOpened(index);

    const dispatch = useDispatch();
    const toggleModalVisibility = (state: boolean) => {
        dispatch(modalActions.setActive(state));
    };

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
            initial={{ minHeight: "10vh", height: "10vh" }}
            animate={{
                minHeight: isVisible ? "30vh" : "10vh",
                height: isVisible ? "30vh" : "10vh",
            }}
            sx={CourseCardStyles(theme.palette.text.primary)}
        >
            <Stack
                direction="row"
                onClick={() => {
                    toggleCard(index);
                }}
                sx={CourseCardUpperBoxStyles(theme.palette.text.primary)}
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
                    variant="rounded"
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

                <Box
                    component="div"
                    sx={CourseCardImageStyles}
                    onClick={() => {
                        setModalPhoto(course.image.asset.url);
                        toggleModalVisibility(true);
                    }}
                >
                    <Avatar
                        variant="rounded"
                        src={course.image.asset.url}
                        sx={{ width: "100%", height: "100%" }}
                    />
                </Box>
            </Stack>
        </Stack>
    );
};

export default CourseCard;
