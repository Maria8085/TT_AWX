import {useContext} from "react";
import {ScreenContext} from "./ScreenContext.tsx";


export function useScreenContext() {
    const context = useContext(ScreenContext);

    if (!context) {
        throw new Error("useScreenContext must be used within a ScreenContextProvider");
    }

    return context;
}