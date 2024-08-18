import {useApi} from "./useApi.ts";
import {useAuth} from "../authProvider/authContext.tsx";
import {useEffect} from "react";
import {CardType} from "../../components/common/Card.tsx";

export function useCardsList() {
    const {data, reFetch, isPending} = useApi<{ list: CardType[] }>('/plasticcard/mylist')
    const {credentials} = useAuth()

    useEffect(() => {
        reFetch().then()
    }, [credentials, reFetch]);

    return {data: data?.list || [], isPending, reFetch}
}