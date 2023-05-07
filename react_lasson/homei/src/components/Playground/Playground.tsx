import React, { useEffect, useState } from 'react';

export default function Playground():JSX.Element {

    const [numberOfDogs,setNumberOfDogs] = useState<number>(0);
    function handleAddDog():void{
        setNumberOfDogs(numberOfDogs + 1 );
    }

    const [numberOfBirds,setNumberOfBirds] = useState<number>(5);

    function handleAddBird():void{
        setNumberOfBirds(numberOfBirds + 1);
    }

    useEffect(()=>{
        console.log("Use Efect 1");
    },[]);

    useEffect(()=>{
        console.log("use Efect 2");
    })
    useEffect(() => {
        console.log('UseEffect 3 ');
      }, [numberOfDogs]);

  return (
    <div>
      <h1>Playground</h1>
      <p>Number of dogs: {numberOfDogs}</p>
      <p>Number of Birds: {numberOfBirds}</p>
      <button type="button" onClick={handleAddDog}>Let the dog in</button>
      <button type="button" onClick={handleAddBird}>New bird</button>
    </div>
  );
}