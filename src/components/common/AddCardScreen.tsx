import {Form} from "../ui/Form.tsx";
import {InputField} from "../ui/InputField.tsx";
import {useForm} from "../../helpers/formProvider/useForm.ts";
import {useApi} from "../../helpers/hooks/useApi.ts";
import {Button} from "../ui/Button.tsx";
import {PageContainer} from "./PageContainer.tsx";
import {SelectField} from "../ui/SelectField.tsx";
import {useBankList} from "../../helpers/hooks/useBanksList.ts";
import {useScreenContext} from "../../helpers/screenProvider/useScreenContext.ts";
import {PAGES} from "../../types.ts";
import {CardType} from "./Card.tsx";

export function AddCardScreen() {
    const {data, control} = useForm<CardType>()
    const {isPending, reFetch} = useApi('/plasticcard/save')
    const {data: banks} = useBankList()
    const {setPage, card} = useScreenContext()

    function handleSubmit() {
        let newData = {...data}
        if (data?.bankId !== 9999) {
            const bank = banks?.find((item) => item?.id === data?.bankId)
            newData = {...newData, bankName: bank?.name || ''}
        }
        reFetch(newData).then(() => {
            setPage(PAGES.MY_CARDS, undefined)
        })
    }

    return <PageContainer title={card ? 'Редактировать' : 'Добавить карту'} backPage={PAGES.MY_CARDS}>
        <Form control={control} initialState={card || {}}>
            <InputField<CardType> label={'Номер карты'} placeholder={'0000 0000 0000 0000'} name={'cardNumber'}/>
            <InputField<CardType> label={'Название карты'} placeholder={'Тестовая карта'} name={'label'}/>
            <SelectField<CardType> label={'Банк'} name={'bankId'} options={banks || []}/>
            {data.bankId === 9999 &&
                <InputField<CardType> label={'Укажите название вашего банка'} placeholder={'Мой банк'}
                                      name={'bankName'}/>}
            <Button loading={isPending} onClick={handleSubmit}>Добавить</Button>
        </Form>
    </PageContainer>
}