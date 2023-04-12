import {createContext, useContext, useEffect, useMemo, useState} from "react";

const ViewContext = createContext({
    isMobile: false,
    setIsMobile: () => {},
    showNavbar: false,
    setShowNavbar: () => {},
});

const ViewContextProvider = ({children}) => {
    const [isMobile, setIsMobile] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            window?.screen && setIsMobile(window?.screen?.width <= 760);
            window?.screen && setShowNavbar(window?.screen?.width > 760);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
    }, []);

    const context = useMemo(
        () => ({
            isMobile,
            setIsMobile,
            showNavbar,
            setShowNavbar,
        }),
        [isMobile, showNavbar],
    );
    return (
        <ViewContext.Provider value={context}>{children}</ViewContext.Provider>
    );
};

export default ViewContextProvider;
export const useViewContext = () => useContext(ViewContext);
