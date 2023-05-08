const getDateInfo = (date: string) => {
    const dateArray = date.split("-"); // date: YYYY-MM-DD

    return {
        year: Number(dateArray[0]),
        month: Number(dateArray[1]),
        day: Number(dateArray[2]),
    };
};

export default getDateInfo;
