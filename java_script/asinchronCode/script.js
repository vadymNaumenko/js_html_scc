
function f(index, ms) {
    const startTime = Date.now();


    setTimeout(() => {
        const endTime = Date.now();

        console.log(index, (endTime - startTime) + "ms");
    }, ms)
}

function sumElements(n){
    let sum = 0;
    for(let i = 0;i<n;i++){
        sum+=i;
    }
    
}

for (let i = 0; i < 10; i++) {
    f(i, 10);
    sumElements(9999999);
}


// setTimeout() and clearTimeout()

const id = setTimeout(()=>console.log("I have present for you"),5000);
clearTimeout(id);

let i = 0;
const idSetInterval = setInterval(()=>{

    console.log(++i);
    if(i===3){
        clearInterval(idSetInterval);
    }
})

//setTimeout and setInterval have parametrs exemple "" setTimeout(fun,ms,arg1,arg2,arg3.....) "

const sum =(a,b)=>console.log(a+b);

setTimeout(sum,1000,10,20);
