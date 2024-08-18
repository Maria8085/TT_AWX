import {Dispatch, FormEvent, PropsWithChildren, SetStateAction, useEffect, useState} from "react";
import {FormContext} from "../../helpers/formProvider/FormContext.tsx";

export type FormProps = {
    initialState?: object
    control: {
        data: object,
        setData: Dispatch<SetStateAction<object>>
    }
}

export function Form({children, initialState, control}: PropsWithChildren<FormProps>) {
    const [data, setData] = useState(initialState || {})

    useEffect(() => {
        control.setData(data)
    }, [data]);

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
    }

    return <FormContext.Provider value={{data: data, setData: setData}}>
        <form className={'flex flex-col gap-4 items-start p-4'} onSubmit={handleSubmit}>{children}</form>
    </FormContext.Provider>
}