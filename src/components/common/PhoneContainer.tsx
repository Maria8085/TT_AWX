import {PropsWithChildren, useEffect, useState} from "react";


export function PhoneContainer({children}: PropsWithChildren) {
    const [time, setTime] = useState('');
    useEffect(() => {
        // Функция для обновления времени
        const updateClock = () => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            setTime(`${hours}:${minutes}`);
        };

        // Обновляем время сразу при монтировании компонента
        updateClock();

        // Запускаем интервал, который будет обновлять время каждую секунду
        const intervalId = setInterval(updateClock, 1000);

        // Очищаем интервал при размонтировании компонента
        return () => clearInterval(intervalId);
    }, []);

    return <div className="relative aspect-[260/540] w-96 border-[0.7rem] border-black rounded-[2rem] overflow-hidden bg-amber-50 flex flex-col shadow-2xl">
        <div className="box-border w-full h-8 px-4 flex flex-row items-center gap-2 mt-2">
            <div className="text-center text-xl">{time}</div>
        </div>

        <div className="absolute top-2 left-1/2 w-20 aspect-[300/90] -translate-x-1/2 rounded-[2rem] bg-black">
        </div>

        <div
            className="absolute bottom-0 left-1/2 w-28 aspect-[300/15] -translate-x-1/2 mb-1 rounded-[2rem] bg-black">
        </div>
        <div className={'bg-white mt-auto rounded-t-[20px] shadow-2xl shadow-black h-full'}>
            {children}
        </div>
    </div>
}