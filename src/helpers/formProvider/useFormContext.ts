import {useContext} from "react";
import {FormContext} from "./FormContext.tsx";

export function useFormContext<T extends Record<string, string | number>>(name?: keyof T) {
    const {data, setData} = useContext(FormContext)
    return {data, setData}
}