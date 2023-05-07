import { useEffect, useState } from "react";

export default function (): JSX.Element {
    const [reskey,setResKey] = useState<number>(0);
    const [resPrice,setResPrise] = useState<number>(0);
    useEffect(() => {
        fetch("https://www.boredapi.com/api/activity")
            .then((res) => res.json())
            .then((obj) => {
                const {key,price} = obj;
                console.log(key);
                setResKey( key);
                console.log(reskey);
                setResPrise( price);
            });
    },[]);

    return (
        <>
        <div className="">key {reskey}, {resPrice}</div>
        </>
    );
}

/*
accessibility

activity
key
link
participants
price
type

Задание 1
Воспользоваться любой сторонней Api из списка(https://iamsajan.com/free-api-without-an-api-key/).
(https://www.boredapi.com/api/activity) - Воспользуйтесь этой, если не найдете подходящей. Она предлагает случайное занятие, чтобы скоротать время.
Получить объект или массив с данными(в общем, то, что возвращает ваша Api) при помощи fetch в хуке useEffect.
Хук должен срабатывать только при mount компонента.
Полученные данные используйте в разметке (после return


    rfc

    */
