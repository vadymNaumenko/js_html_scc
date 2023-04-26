function sum(n){
for(let i = 0; i<n;i++){
console.log("timeout",i);
}
}

// setTimeout(sum,5000,10);

new Promise((resolve,reject)=>{
    sum(10);
})

for(let j = 0;j<10;j++){
    console.log("sinchron");
}