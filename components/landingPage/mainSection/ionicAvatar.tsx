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
    const scaleValue = 0.9

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
