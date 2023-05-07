import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';



export default function Dog2(): JSX.Element {

    const [url, setUrl] = useState<string>("");

    async function getFetch():Promise<void> {

        const res = await fetch("https://dog.ceo/api/breeds/image/random");
        const obj = await res.json();
        console.log(obj);
        const {message} = obj;
        setUrl(message);


    }
    useEffect(() => {
        getFetch();
    }, [])


    console.log();


    return (

        <>
            <img src={url} alt="g" />
        </>
    )


}

