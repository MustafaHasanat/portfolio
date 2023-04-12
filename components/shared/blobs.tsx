import { Fragment } from "react";
import { motion } from "framer-motion";
import React from "react";
import { Avatar } from "@mui/material";

interface BlobsProps {
 blobs: {
    src: string;
    size: string;
    inset: string;
    delay: number;
}[]
}

const Blobs = ({blobs}: BlobsProps) => {
    return (
        <Fragment>
            {blobs.map((blob, index) => {
                return (
                    <Fragment key={`blob number: ${index}`}>
                        <Avatar
                            component={motion.div}
                            animate={{ y: [0, 30, 0] }}
                            transition={{
                                duration: 5,
                                delay: blob.delay,
                                ease: "easeInOut",
                                repeat: Infinity,
                            }}
                            src={blob.src}
                            alt="blob"
                            sx={{
                                position: "absolute",
                                inset: blob.inset,
                                width: blob.size,
                                height: blob.size,
                                zIndex: 1,
                            }}
                        />
                    </Fragment>
                );
            })}
        </Fragment>
    );
};

export default Blobs;
