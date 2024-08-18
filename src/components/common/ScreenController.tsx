import {AuthScreen} from "./AuthScreen.tsx";
import {CardsScreen} from "./CardsScreen.tsx"
import {useMemo} from "react";
import {useScreenContext} from "../../helpers/screenProvider/useScreenContext.ts";
import {PAGES} from "../../types.ts";
import {AddCardScreen} from "./AddCardScreen.tsx";


export function ScreenController() {
    const {page} = useScreenContext();
    return useMemo(() => {
        switch (page) {
            case PAGES.AUTH:
                return <AuthScreen/>;
            case PAGES.MY_CARDS:
                return <CardsScreen/>;
            case PAGES.ADD_CARDS:
                return <AddCardScreen/>
            default:
                return <div>Select a page</div>;
        }
    }, [page])
}