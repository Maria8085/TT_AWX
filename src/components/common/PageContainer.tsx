import {PropsWithChildren, useContext} from "react";
import {Button} from "../ui/Button.tsx";
import {PAGES} from "../../types.ts";
import {ScreenContext} from "../../helpers/screenProvider/ScreenContext.tsx";

export type PageContainerProps = {
    title: string,
    className?: string,
    backPage?: PAGES;
}

export function PageContainer({children, title, backPage, className}: PropsWithChildren<PageContainerProps>) {
    const { setPage } = useContext(ScreenContext);
    return <section className={'pb-4 h-full flex flex-col'}>
        <div className={'w-full p-2 border-b flex justify-between items-center'}>
            <h1 className={'text-lg font-bold uppercase'}>{title}</h1>
            {backPage && <Button onClick={() => setPage(backPage)}>Назад</Button>}
        </div>
        <div className={`p-2 ${className}`}>{children}</div>
    </section>
}