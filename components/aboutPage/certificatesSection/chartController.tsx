import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Fragment } from "react";
import { ChartControllerProps, ChartControllerStyles } from "./styles";

const ChartController = ({
    values,
    value,
    setValue,
    extraSX,
}: ChartControllerProps) => {
    const theme = useTheme();
    const lgScreen = useMediaQuery("(min-width:1440px)");

    return (
        <Stack
            component={motion.div}
            initial={{ x: 0 }}
            whileHover={{ x: lgScreen ? 110 : 0 }}
            sx={ChartControllerStyles(extraSX)}
        >
            {values.map((constantChartType, index) => {
                return (
                    <Fragment key={`chart type number: ${index}`}>
                        <Stack
                            component={motion.div}
                            animate={{
                                color:
                                    constantChartType === value
                                        ? theme.palette.text.primary
                                        : theme.palette.secondary.main,
                            }}
                            whileHover={{
                                color: theme.palette.text.primary,
                            }}
                            onClick={() => {
                                setValue(constantChartType);
                            }}
                            sx={{
                                width: "100%",
                                bgcolor: "transparent",
                                border: 0,
                                cursor: "pointer",
                                padding: 1,
                            }}
                        >
                            <Typography
                                width="auto"
                                textTransform="capitalize"
                                textAlign={{ xs: "center", lg: "right" }}
                            >
                                {constantChartType}
                            </Typography>
                        </Stack>
                    </Fragment>
                );
            })}
        </Stack>
    );
};

export default ChartController;
