/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";

const useGetRoute = () => {
    const router = useRouter();

    switch (router.asPath) {
        case "/":
            return { path: "/", number: 0 };
        case "/about":
            return { path: "/about", number: 1 };
        case "/projects":
            return { path: "/projects", number: 2 };
        case "/services":
            return { path: "/services", number: 3 };
        case "/docs":
            return { path: "/docs", number: 4 };
        default:
            return { path: "/404", number: -1 };
    }
};

export default useGetRoute;
