import { useState } from "react";

const useMultiControl = () => {
    const [globalIndex, setGlobalIndex] = useState(0); // 0 means that no other element is selected currently
    const onState = "opened";
    const offState = "closed";

    const isActive = (index: number) => {
        return index + 1 === globalIndex;
    };

    const updateState = (currentIndex: number) => {
        const currentState = isActive(currentIndex) ? onState : offState;

        if (currentIndex + 1 !== globalIndex) {
            if (currentState === offState) {
                setGlobalIndex(currentIndex + 1);
            } else {
                setGlobalIndex(0);
            }
        } else if (currentState === offState) {
            setGlobalIndex(currentIndex + 1);
        } else if (currentState === onState) {
            setGlobalIndex(0);
        }
    };

    return {
        globalIndex,
        updateState,
        isActive,
        setGlobalIndex,
    };
};

export default useMultiControl;
