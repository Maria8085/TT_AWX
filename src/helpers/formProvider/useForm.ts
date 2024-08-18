import {useMemo, useState} from "react";

export function useForm<T extends Record<string, any>>() {
    const [data, setData] = useState<T>({})
    const control = useMemo(() => {
        return {data, setData}
    }, []);
    return {data, control}
}