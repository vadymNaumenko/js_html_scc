import React from 'react';
interface FlowerCard{
name:string,
color:string
price:number
}



function FlowerShop(props:FlowerCard): JSX.Element {

    const Rose:FlowerCard = {
        name: 'Rose',
        color: 'Read',
        price: 5
    };

    return(
        
        <div>

        </div>
    )

    const {name,color} = props;
    console.log();
}

