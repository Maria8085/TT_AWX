import {Button} from "../ui/Button.tsx";
import {useApi} from "../../helpers/hooks/useApi.ts";
import {useScreenContext} from "../../helpers/screenProvider/useScreenContext.ts";
import {PAGES} from "../../types.ts";

export type CardType = {
    id: null | number,
    label: string,
    cardNumber: string,
    attach: null,
    bankId: number,
    bankName: string,
    status: string,
    isNewForm: boolean
}
export type CardProps = { card: CardType, onCardDeleted: () => void }

export function Card({card, onCardDeleted}: CardProps) {
    const {reFetch} = useApi(`/plasticcard/remove/${card.id}`)
    const {setPage} = useScreenContext()

    function handleDelete() {
        reFetch().then(() => {
            onCardDeleted();
            setPage(PAGES.MY_CARDS)
        })
    }

    function handleEdit() {
        setPage(PAGES.ADD_CARDS, card); // Передаем карту на страницу редактирования
    }

    return <div className={'flex gap-2 py-1 w-full'}>
        <Button
            className={`rounded-xl items-center px-2 grow flex-grow ${card.status !== "APPROVED" ? "bg-red-300" : ""}`}
            onClick={handleEdit}>{card?.cardNumber}({card?.label})</Button>
        <Button onClick={handleDelete}>Удалить</Button>
    </div>
}