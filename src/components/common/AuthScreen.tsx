import {Form} from "../ui/Form.tsx";
import {useForm} from "../../helpers/formProvider/useForm.ts";
import {Credentials, useAuth} from "../../helpers/authProvider/authContext.tsx";
import {InputField} from "../ui/InputField.tsx";
import {Button} from "../ui/Button.tsx";
import {PageContainer} from "./PageContainer.tsx";
import {useScreenContext} from "../../helpers/screenProvider/useScreenContext.ts";
import {PAGES} from "../../types.ts";
import {useEffect} from "react";


export function AuthScreen() {
    const {control, data} = useForm<Credentials>()
    const {setPage} = useScreenContext()
    const {setCredentials} = useAuth()
    useEffect(() => {
        const serial = window.sessionStorage.getItem('serial')
        const token = window.sessionStorage.getItem('token')
        control.setData({token, serial})
    }, [])

    function handleSubmit() {
        window.sessionStorage.setItem('serial', data.serial)
        window.sessionStorage.setItem('token', data.token)
        if (data) {
            setCredentials?.(data)
            setPage(PAGES.MY_CARDS)
        }
    }

    return <PageContainer className={'flex justify-center'} title={'Авторизация'}>
        <Form<Credentials> control={control} initialState={{
            serial: window.sessionStorage.getItem('serial'),
            token: window.sessionStorage.getItem('token')
        }}>
            <InputField<Credentials> label={'serial'} name={"serial"}/>
            <InputField<Credentials> label={'token'} name={"token"}/>
            <Button onClick={handleSubmit}>Авторизоваться</Button>
        </Form>
    </PageContainer>
}