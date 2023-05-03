
function universalGreeting(name,functionGreeting){
    console.log( functionGreeting(name));
}



const englishGreeting = (name)=> `Hello ${name}`;
const japaneseGreeting = (name)=> `Konishua ${name}`;


universalGreeting('Dima',englishGreeting);
universalGreeting('Dima',japaneseGreeting);
