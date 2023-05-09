/* eslint-disable react-hooks/rules-of-hooks */
import GlassBox from "@/components/shared/glassBox";
import constants from "@/utils/constants";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import React, {
    Dispatch,
    Fragment,
    MutableRefObject,
    SetStateAction,
    useState,
} from "react";
import InputField from "./inputField";
import MessageBox from "./messageBox";
import ButtonsSet from "./buttonsSet";

interface FormProps {
    formRef: MutableRefObject<undefined>;
    handleSubmit: (e: any) => void;
}

const Form = ({ formRef, handleSubmit }: FormProps) => {
    const [isReset, setIsReset] = useState(false);
    const theme = useTheme();

    const handleChange = (
        length: number,
        isRequired: boolean,
        setError: Dispatch<SetStateAction<boolean>>
    ) => {
        if (length === 0 && isRequired) {
            setError(true);
        } else {
            setError(false);
        }
    };

    const clearForm = () => {
        setIsReset(true);
        setTimeout(() => {
            setIsReset(false);
        }, 1000);
    };

    return (
        <GlassBox
            id={"footer-form-box"}
            extraSX={{
                width: "60%",
                height: "80%",
                position: "relative",
                borderRadius: 3,
            }}
        >
            <Stack
                ref={formRef}
                component="form"
                p={5}
                onSubmit={handleSubmit}
                sx={{
                    height: "100%",
                    display: "grid",
                    gridTemplateRows: "repeat(5, 1ft)",
                    gridTemplateColumns: "repeat(2, 1ft)",
                    gap: 3,
                }}
            >
                <Box
                    sx={{
                        gridRow: "1 / 3",
                        gridColumn: "2 / 3",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        textAlign="center"
                        color={theme.palette.text.primary}
                        fontSize="2vw"
                        width="70%"
                    >
                        Send me a quick message:
                    </Typography>
                </Box>

                <MessageBox isReset={isReset} handleChange={handleChange} />

                {constants.footer.footerFormFields.map((field, index) => {
                    return (
                        <Fragment key={`footer form field number: ${index}`}>
                            <InputField
                                type={field.type}
                                label={field.label}
                                icon={field.icon}
                                isRequired={field.isRequired}
                                helperText={field.helperText}
                                isReset={isReset}
                                handleChange={handleChange}
                            />
                        </Fragment>
                    );
                })}

                <ButtonsSet clearForm={clearForm} />
            </Stack>
        </GlassBox>
    );
};

export default Form;
