import { Box, Stack, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Dispatch, Fragment, SetStateAction } from "react";

interface ChartControllerProps {
    values: string[];
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    extraSX: any;
}

const ChartController = ({ values, value, setValue, extraSX }: ChartControllerProps) => {
    const theme = useTheme();

    return (
        <Stack
            component={motion.div}
            initial={{ x: 0 }}
            whileHover={{ x: 110 }}
            alignItems="flex-end"
            position="absolute"
            right={-20}
            borderRadius={2}
            py={1}
            pr={2}
            spacing={1}
            width={200}
            zIndex={1}
            sx={extraSX}
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
