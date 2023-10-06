const mq = {
    XS: 0,
    SM: 400,
    MD: 700,
    LG: 1400,
    XL: 2500,
};

const mqHook = {
    XS: `(min-width:${mq.XS}px)`,
    SM: `(min-width:${mq.SM}px)`,
    MD: `(min-width:${mq.MD}px)`,
    LG: `(min-width:${mq.LG}px)`,
    XL: `(min-width:${mq.XL}px)`,
};

export { mq, mqHook };
