import {useCardsList} from "../../helpers/hooks/useCardsList.ts";
import {PageContainer} from "./PageContainer.tsx";
import {Card} from "./Card.tsx";
import {Button} from "../ui/Button.tsx";
import {useScreenContext} from "../../helpers/screenProvider/useScreenContext.ts";
import {PAGES} from "../../types.ts";

export function CardsScreen() {
    const { data: cards, isPending: cardsLoading, reFetch: reFetchCardsList } = useCardsList();
    const {setPage} = useScreenContext()
    function addCardHandler() {
        setPage(PAGES.ADD_CARDS)
    }

    function handleCardDeleted() {
        reFetchCardsList();
    }

    return <PageContainer title={'Ваши карты'} className={'flex flex-col flex-grow'}>
        <ul className={'flex flex-col gap-2 items-start'}>
            {cardsLoading ? '...loading' : cards?.length > 0 ? (
                cards.map(card => <Card card={card} key={card.id} onCardDeleted={handleCardDeleted}/>)
            ) : (
                <li>Список карт пуст</li>
            )}
        </ul>

        <Button className={'w-full mt-auto'} onClick={addCardHandler}>Добавить карту</Button>
    </PageContainer>
}