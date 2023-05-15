import { Box, Stack, Typography, useTheme } from "@mui/material";
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

    return (
        <Stack
            component={motion.div}
            initial={{ x: 0 }}
            whileHover={{ x: 110 }}
            sx={ChartControllerStyles(extraSX)}
        >
            {values.map((constantChartType, index) => {
                return (
                    <Fragment key={`chart type number: ${index}`}>
                        <Box
                            component={motion.button}
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
                                bgcolor: "transparent",
                                border: 0,
                                cursor: "pointer",
                                padding: 1,
                            }}
                        >
                            <Typography textTransform="capitalize">
                                {constantChartType}
                            </Typography>
                        </Box>
                    </Fragment>
                );
            })}
        </Stack>
    );
};

export default ChartController;
