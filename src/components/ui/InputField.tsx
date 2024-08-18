import {ChangeEvent} from "react";
import {useFormContext} from "../../helpers/formProvider/useFormContext.ts";

export type InputFieldProps<T extends Record<string, string | number>> = {
    name: keyof T
    label?: string
    placeholder?: string
}

export function InputField<T>({name, label,placeholder}: InputFieldProps<T>) {
    const {data, setData} = useFormContext<T>(name)

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setData(prevState => ({
            ...prevState,
            [name]: e.target.value
        }))
    }

    return (
        <label className={'flex flex-col gap-2 items-start'}>
            {label && <span className={'text-gray-700'}>{label}</span>}
            <input className={'bg-black/[0.02] shadow-[inset_0_2px_6px_0_rgb(0_0_0_/_0.1);] p-2 rounded-xl'} name={name} value={data[name]} onChange={handleChange} placeholder={placeholder}/>
        </label>
    );
}

