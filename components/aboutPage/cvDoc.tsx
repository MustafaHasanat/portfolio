import { urls } from "@/utils/constants/global/global";

const CDDoc = () => {
    return <iframe src={`${urls.myCVURL}?embedded=true`}></iframe>;
};

export default CDDoc;
