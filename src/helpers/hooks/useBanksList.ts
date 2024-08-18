import {useApi} from "./useApi.ts";
import {useAuth} from "../authProvider/authContext.tsx";
import {useEffect} from "react";

export type BankType = { id: number, name: string }

export function useBankList(): { data?: BankType[], isPending: boolean } {
    const {data, reFetch, isPending} = useApi<{ list: BankType[] }>('/change/sbp/payassist/list')
    const {credentials} = useAuth()

    useEffect(() => {
        reFetch().then()
    }, [credentials, reFetch]);

    return {data: data?.list || [], isPending}
}