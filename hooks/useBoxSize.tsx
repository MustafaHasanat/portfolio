import { RefObject, useEffect, useRef, useState } from "react";

interface useBoxSizeReturns {
    ref: RefObject<HTMLDivElement>;
    width: number;
    height: number;
}

/**
 * This hook is used to get an up-to-date values for the width and height
 * of a targeted componet
 *
 * example:
 * 
 * const { ref, width, height } = useBoxSize();
 * 
 * <MyComponent ref={ref}>
 *      this is my width: {width}
 *      this is my height: {height}
 * </MyComponent>
 *
 * @returns {RefObject<HTMLDivElement>} ref     a reference object to be given to the targeted component
 * @returns {number}                    width   the width of the targeted component
 * @returns {number}                    height  the height of the targeted component
 */
const useBoxSize = (): useBoxSizeReturns => {
    const boxRef = useRef<HTMLDivElement>(null);
    const [boxSize, setBoxSize] = useState([0, 0]);

    useEffect(() => {
        const handleResize = () => {
            if (boxRef.current) {
                setBoxSize([
                    boxRef.current.offsetWidth,
                    boxRef.current.offsetHeight,
                ]);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [boxRef]);

    return { ref: boxRef, width: boxSize[0], height: boxSize[1] };
};

export default useBoxSize;
