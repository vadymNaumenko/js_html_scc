function getStudent(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve ({ name: "Anri", age:32});
            },4000)
        });
    };
 let x ;

 getStudent().then((student)=>{
    console.log(student.name); // Anri
    x = student.name;
    console.log("внутри колбека", x); // выведется вторым Anri
 });
 console.log("снаружи колбека", x) // выведется первым  undefined


 // Второе задание 

 function getDriveLicense(succes, failure){
    if (Math.random()>0.1){
        succes("УСПЕХ");
    } else {
        failure("Неудача");}
 }
 function succes(result){
    console.log(`Успешно завершено с результатом ${result}`);
 }

 function failure(error){
    console.log(`Завершено с ошибкой ${error}`)
 }
 getDriveLicense(succes, failure);