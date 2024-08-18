import {useAuth} from "../authProvider/authContext.tsx";
import {useCallback, useMemo, useState} from "react";

const baseURL = '/b2api'

export function useApi<T = object>(url: string, body?: object) {
    const {credentials} = useAuth()
    const [isPending, setIsPending] = useState(false)
    const [data, setData] = useState<T>()

    const headers = useMemo(() => {
        return {
            'Content-Type': 'application/json',
            'Serial': credentials?.serial || '',
            'Token': credentials?.token || ''
        }
    }, [credentials]);


    const reFetch = useCallback(async (newData?: object) => {
        setIsPending(true)
        return fetch(`${baseURL}${url}`, {
            body: JSON.stringify(newData || body || {}),
            method: 'POST',
            headers: headers
        }).then(raw => raw.json()).then(res => {
            setData(res)
        }).finally(() => setIsPending(false))
    }, [body, headers, url])

    return {isPending, data, reFetch}
}