interface ToCaseProps {
    sentence: string;
    target: "camel" | "normal";
}

const toCase = ({ sentence, target }: ToCaseProps): string => {
    if (target === "camel") {
        return sentence
            .toLowerCase()
            .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
    } else if (target === "normal") {
        const result = sentence.replace(/([A-Z])/g, " $1");
        return result.charAt(0).toUpperCase() + result.slice(1);
    } else {
        return "";
    }
};

export default toCase;
