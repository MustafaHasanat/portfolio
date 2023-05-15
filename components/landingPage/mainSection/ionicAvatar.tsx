/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, Box, CircularProgress } from "@mui/material";
import { Fragment, useState } from "react";
import {
    avatarStyles,
    ionicContainerStyles,
    orbitalObjectStyles,
    orbitalPathStyles,
} from "./styles";
import { AvatarIcon } from "@/types/avatarIcon";
import { useSelector } from "react-redux";
import { GlobalAssetProps } from "@/utils/store/globalAssetsSlice";

const IonicAvatar = ({ avatarIcons }: { avatarIcons: AvatarIcon[] }) => {
    const [scaleValue, setScaleValue] = useState(1);
    const [imageLoaded, setImageLoaded] = useState(false);

    const globalAssets = useSelector(
        (state: { globalAssetsReducer: { globalAssets: GlobalAssetProps } }) =>
            state.globalAssetsReducer.globalAssets
    );

    return (
        <Box sx={ionicContainerStyles(scaleValue)}>
            <Avatar
                src={globalAssets?.myMainAvatar?.src}
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
