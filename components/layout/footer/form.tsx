/* eslint-disable react-hooks/rules-of-hooks */
import GlassBox from "@/components/shared/glassBox";
import LayoutConstants from "@/utils/constants/global/layout";
import { Stack } from "@mui/material";
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
            extraSX={{ width: "60%", position: "relative" }}
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
                {LayoutConstants.footerFormFields.map((field, index) => {
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

                <MessageBox isReset={isReset} handleChange={handleChange} />
                <ButtonsSet clearForm={clearForm} />
            </Stack>
        </GlassBox>
    );
};

export default Form;
