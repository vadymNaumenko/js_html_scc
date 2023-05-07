import {useState} from "react"


function Sendwich():JSX.Element{
const breat = "breat";
const wurst = "";
const [sendwich,setSendwich] = useState<string>("Сендвич сделан из:");
   

    function hendlerBrot(){
    setSendwich(sendwich + ` breat 🍞,`);
    
}
const hendlerWurst=()=>{
    setSendwich(sendwich + ` wurst,`);
 
}

 

    return(
        <>
        <button onClick={hendlerWurst}>wurst</button>
        <button onClick={hendlerBrot}>brot</button>
        <div >{sendwich}</div>
        </>
    );
}
export default Sendwich;