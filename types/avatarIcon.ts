export type AvatarIcon = {
    _id: string;
    title: string;
    color: string;
    position: {
        rotateZ: number;
        rotateY: number;
        delay: number;
    };
    logo: {
        asset: {
            url: string;
        };
    };
};
