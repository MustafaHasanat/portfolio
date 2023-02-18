import en from "../public/locales/en";
import ar from "../public/locales/ar";
import { useCallback } from "react";

const languages = { en, ar };

const resolvePath = (object, path, defaultValue) =>
    path.split(".").reduce((o, p) => (o ? o[p] : defaultValue), object);

export default function useTranslation(router) {
    const { locale } = router;

    const t = useCallback(
        (keyString) => {
            return resolvePath(languages[locale], keyString);
        },
        [locale]
    );

    return { t };
}
