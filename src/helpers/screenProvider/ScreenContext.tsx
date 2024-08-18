import {createContext, PropsWithChildren, useState} from "react";
import {PAGES} from "../../types.ts";
import {CardType} from "../../components/common/Card.tsx";


export type ScreenContextProviderProps = {
    page: PAGES,
    card: CardType,
    setPage: (page: PAGES, card?: CardType) => void
}
export const ScreenContext = createContext<ScreenContextProviderProps>({
    page: PAGES.AUTH,
    card: {},
    setPage: () => {
    }
})

export function ScreenContextProvider({children}: PropsWithChildren) {
    const [page, setPageConst] = useState(PAGES.AUTH);
    const [card, setCard] = useState<CardType>({});

    function setPage(page: PAGES, card?: CardType) {
        setPageConst(page)
        setCard(card)
    }

    return (
        <ScreenContext.Provider value={{page, card, setPage}}>
            {children}
        </ScreenContext.Provider>
    )
};