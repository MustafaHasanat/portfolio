/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, Box } from "@mui/material";
import WelcomeSectionConstants from "@/utils/constants/landingPage/welcomeSection";
import { Fragment, useState } from "react";
import {
    avatarStyles,
    ionicContainerStyles,
    orbitalObjectStyles,
    orbitalPathStyles,
} from "./styles";

const IonicAvatar = () => {
    const [scaleValue, setScaleValue] = useState(1);

    return (
        <Box sx={ionicContainerStyles(scaleValue)}>
            <Avatar src="images/avatar.jpg" alt="avatar" sx={avatarStyles(scaleValue)} />

            {WelcomeSectionConstants.avatarIons.map((ion) => {
                return (
                    <Fragment key={ion.id}>
                        <Box
                            id="ellipse-path"
                            sx={orbitalPathStyles(
                                ion.rotateZ,
                                ion.rotateY,
                                ion.delay,
                                scaleValue
                            )}
                        >
                            <Fragment key={`${ion.id} icon`}>
                                <Avatar
                                    src={ion.src}
                                    alt="ion-image"
                                    sx={orbitalObjectStyles(
                                        ion.delay,
                                        ion.shadow,
                                        scaleValue
                                    )}
                                />
                            </Fragment>
                        </Box>
                    </Fragment>
                );
            })}
        </Box>
    );
};

export default IonicAvatar;
