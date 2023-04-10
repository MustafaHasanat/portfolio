/* eslint-disable react-hooks/rules-of-hooks */
import GlassBox from "@/components/shared/glassBox";
import LayoutConstants from "@/utils/constants/layout";
import { Stack, useTheme } from "@mui/material";
import React, { Fragment, MutableRefObject } from "react";
import InputField from "./inputField";
import MessageBox from "./messageBox";
import SendButton from "./sendButton";

interface FormProps {
    formRef: MutableRefObject<undefined>;
    handleSubmit: (e: any) => void;
}

const Form = ({ formRef, handleSubmit }: FormProps) => {
    const theme = useTheme();

    return (
        <GlassBox
            id={"footer-form-box"}
            extraSX={{ width: "50%", position: "relative" }}
        >
            <Stack
                component="form"
                p={5}
                ref={formRef}
                onSubmit={handleSubmit}
                sx={{
                    height: "100%",
                    display: "grid",
                    gridTemplateRows: "repeat(5, 1ft)",
                    gridTemplateColumns: "repeat(2, 1ft)",
                    gap: 3,
                }}
            >
                {LayoutConstants.footerFormFields(theme.palette.base.light).map(
                    (field, index) => {
                        return (
                            <Fragment
                                key={`footer form field number: ${index}`}
                            >
                                {InputField(
                                    field.type,
                                    field.label,
                                    field.icon,
                                    field.defaultValue
                                )}
                            </Fragment>
                        );
                    }
                )}

                <MessageBox />
                <SendButton />
            </Stack>
        </GlassBox>
    );
};

export default Form;
