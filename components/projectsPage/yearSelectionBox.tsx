import { Box, Stack, Typography, useTheme } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { motion } from "framer-motion";

interface YearSelectionBoxProps {
    yearsList: number[];
    yearSelect: number;
    setYearSelect: Dispatch<SetStateAction<number>>;
}

const YearSelectionBox = ({
    yearsList,
    yearSelect,
    setYearSelect,
}: YearSelectionBoxProps) => {
    const theme = useTheme();
    const [selectListIsOpened, setSelectListIsOpened] = useState(false);

    const customMenuItem = ({ value, key }: { key: string; value: number }) => {
        return (
            <Box
                component={motion.div}
                initial={{ height: "0vh" }}
                animate={{ height: selectListIsOpened ? "6vh" : "0vh" }}
                whileHover={{
                    color: theme.palette.primary.main,
                    opacity: 0.8,
                }}
                key={key}
                sx={{
                    color: theme.palette.secondary.main,
                    bgcolor: theme.palette.text.primary,
                    width: "100%",
                    cursor: "pointer",
                    borderRadius: 1,
                    display: "flex",
                    alignItems: "center",
                    overflow: "hidden",
                }}
                onClick={() => {
                    setYearSelect(value);
                    setSelectListIsOpened(false);
                }}
            >
                <Typography p={1} width="100%" textAlign="center">
                    {value === 0 ? "clear" : value}
                </Typography>
            </Box>
        );
    };

    return (
        <Stack direction="row" spacing={2} px={2} width="100%">
            <Typography width="50%">Launching year</Typography>

            <Stack
                sx={{
                    position: "relative",
                    width: "50%",
                    height: "100%",
                    bgcolor: theme.palette.text.primary,
                    borderRadius: 1,
                }}
            >
                <Stack direction="row" px={1}>
                    <Typography
                        component="div"
                        p={1}
                        color={theme.palette.secondary.main}
                        width="70%"
                        textAlign="center"
                    >
                        {yearSelect === 0 ? "cleared" : yearSelect}
                    </Typography>

                    <Box
                        component="div"
                        sx={{
                            width: "30%",
                            height: "auto",
                            cursor: "pointer",
                            transform: selectListIsOpened
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                            transition: "0.3s ease",
                        }}
                        onClick={() => {
                            setSelectListIsOpened((prev) => !prev);
                        }}
                    >
                        <ArrowDropDownIcon
                            sx={{
                                width: "100%",
                                height: "100%",
                                color: theme.palette.secondary.main,
                            }}
                        />
                    </Box>
                </Stack>

                <Stack
                    spacing={1}
                    sx={{
                        position: "absolute",
                        top: "calc(100% + 10px)",
                        width: "100%",
                        zIndex: 10,
                    }}
                >
                    {yearsList.map((year, index) => {
                        return customMenuItem({
                            key: `year ${year} number ${index}`,
                            value: year,
                        });
                    })}

                    {customMenuItem({
                        key: `year 0 number 00`,
                        value: 0,
                    })}
                </Stack>
            </Stack>
        </Stack>
    );
};

export default YearSelectionBox;
