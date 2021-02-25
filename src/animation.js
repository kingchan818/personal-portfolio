export const fadeIn = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.75,
        },

        exit: {
            opacity: 0,
            transition: { duration: 0.75 },
        },
    },
};

export const popUp = {
    hidden: {
        opacity: 0,
        scale: 0.5,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.75,
        },

        exit: {
            opacity: 0,
            transition: { duration: 0.5 },
        },
    },
};

export const scrollUp = {
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
        },
    },
};

export const scrollLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
        },
    },
};

export const scrollRight = {
    hidden: { x: 50, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
        },
    },
};
