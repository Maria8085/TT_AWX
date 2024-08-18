import {ChangeEvent, useMemo, useState} from "react";
import {useFormContext} from "../../helpers/formProvider/useFormContext.ts";

type Option = { id: string | number, name: string }

export type SelectFieldProps<T extends Record<string, string | number>> = {
    name: keyof T
    label?: string
    placeholder?: string
    options: Option[],
}

export function SelectField<T>({options, name, label}: SelectFieldProps<T>) {
    const {data, setData} = useFormContext<T>(name)
    const [search, setSearch] = useState('')
    const filtered: Option[] = useMemo(() => {
        if (!search) {
            return [...options, {id: 9999, name: 'Моего банка нет в списке'}];
        }

        const filteredOptions = options.filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase())
        );

        return [...filteredOptions, {id: 9999, name: 'Моего банка нет в списке'}];
    }, [search, options]);


    function handleChange(e) {
        setData(prevState => ({
            ...prevState,
            [name]: +e.target.value
        }))
    }

    return (
        <label className={'flex flex-col gap-2 items-start'}>
            <div>{label && <span className={'text-gray-700'}>{label}</span>}
                <input type="text" onChange={(e) => {
                    setSearch(e.target.value)
                }} placeholder={'Поиск'}
                       className={'bg-black/[0.02] shadow-[inset_0_2px_6px_0_rgb(0_0_0_/_0.1);] p-2 rounded-xl w-full'}/>
            </div>
            <select value={[data[name]]} onChange={handleChange} onBlur={handleChange} onClick={handleChange}
                    className={'bg-black/[0.02] shadow-[inset_0_2px_6px_0_rgb(0_0_0_/_0.1);] p-2 rounded-xl w-full'}>
                {filtered?.map((option) =>
                    <option value={String(option.id)}>{option.name}</option>
                )}
            </select>
        </label>
    );
}

