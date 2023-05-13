const getDateInfo = (date: string) => {
    const dateArray = date.split("-").map((segment) => Number(segment)); // date: YYYY-MM-DD
    const dateObj = new Date(date);
    const longMonth = dateObj.toLocaleString("default", { month: "long" });

    const [year, month, day] = dateArray;

    const daySuffix = (day: number) => {
        let suffix = day;

        if (day.toString().length == 2) {
            suffix = Number(day.toString().charAt(1));
        }

        switch (suffix) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    };

    const readableForm = `${longMonth} ${day}${daySuffix(day)} ${year}`;

    return {
        year,
        month,
        day,
        readableForm,
    };
};

export default getDateInfo;
