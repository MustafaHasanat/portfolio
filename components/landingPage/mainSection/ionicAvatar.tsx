import { Avatar, Box, useMediaQuery } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import {
    avatarStyles,
    ionicContainerStyles,
    orbitalObjectStyles,
    orbitalPathStyles,
} from "./styles";
import { AvatarIcon } from "@/types/avatarIcon";

const IonicAvatar = ({ avatarIcons }: { avatarIcons: AvatarIcon[] }) => {
    const [scaleValue, setScaleValue] = useState(1);
    const smScreen = useMediaQuery("(min-width:425px)");
    const mdScreen = useMediaQuery("(min-width:768px)");
    const lgScreen = useMediaQuery("(min-width:1440px)");
    const fourKScreen = useMediaQuery("(min-width:2560px)");

    useEffect(() => {
        if (fourKScreen) {
            setScaleValue(1.5);
        } else if (lgScreen) {
            setScaleValue(1);
        } else if (mdScreen) {
            setScaleValue(0.8);
        } else if (smScreen) {
            setScaleValue(0.7);
        } else {
            setScaleValue(0.6);
        }
    }, [smScreen, mdScreen, lgScreen, fourKScreen]);

    return (
        <Box sx={ionicContainerStyles(scaleValue)}>
            <Avatar
                src="images/avatar.jpg"
                alt="avatar"
                sx={avatarStyles(scaleValue)}
            />

            {avatarIcons.map((ion) => {
                return (
                    <Fragment key={ion.title}>
                        <Box
                            sx={orbitalPathStyles(
                                ion.position.rotateZ,
                                ion.position.rotateY,
                                ion.position.delay,
                                scaleValue
                            )}
                        >
                            <Fragment key={`${ion._id} icon`}>
                                <Avatar
                                    src={ion.logo.asset.url}
                                    alt="ion-image"
                                    sx={orbitalObjectStyles(
                                        ion.position.delay,
                                        ion.color,
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
