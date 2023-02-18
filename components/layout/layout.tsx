import { useState, useEffect } from "react";
import Footer from "./footer";
import Header from "./header";
import HeadTag from "./headTag";
import Main from "./main";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [headerTransform, setHeaderTransform] = useState("none");

    useEffect(() => {
        var lastScroll = 0;

        window.addEventListener("scroll", () => {
            const currentScroll = window.scrollY;

            // down
            if (currentScroll > lastScroll) {
                setHeaderTransform("translate(0px, -100%)");
                // up
            } else if (currentScroll < lastScroll) {
                setHeaderTransform("none");
            }

            lastScroll = currentScroll;
        });
    }, []);

    return (
        <div>
            <HeadTag />
            <Header />
            <Main>{children}</Main>
            <Footer />
        </div>
    );
};

export default Layout;
