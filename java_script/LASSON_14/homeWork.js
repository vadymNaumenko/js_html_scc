function getStudent() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: "Anri", age: 32 });
        }, 4000);

    });
}

let x;

getStudent().then((student) => {
    console.log(student.name);
    x = student.name;
    console.log("in colback", x);
});


console.log("out method ", x); //undefind


function getDriveLicense(succes,failure){

    if(Math.random()>0.1){
        succes("Уcпех");
    }else{
        failure("не удача");
    }

}

function succes(result){
    console.log(result);
}

function failure(error){
    console.log(error);
}

getDriveLicense(succes,failure);