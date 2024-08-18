import {createContext, Dispatch, SetStateAction} from "react";

export const FormContext = createContext<{
    data: Record<string, any>,
    setData: Dispatch<SetStateAction<Record<string, any>>>
}>({
    data: {}, setData: () => {
    }
})
