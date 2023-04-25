// Promise -  обещание
function getSix(){
    setTimeout(() => {
        return 6
    }, 4000);
}

let x = getSix();
console.log(x); // undefined  синхронный код
// не ждал пока выполнится асинхронный

function getSeven(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(6);
        }, 4000);
    });
}
const promise = getSeven();
console.log(promise)
// pending - статус ожидания
// resolved-  статус успешного выполнения
// rejected - статус ошибки


// Нам нужно дождаться значения, чтобы его получить
 promise.then((data)=>{
    console.log(data);
 });
 // с помощью метода промиса then
 //  мы порлучаем из промиса значение(данные)

  function getSevenRej(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Ошибка сервера"));
        }, 4000);
    })
  }
  const promise2 = getSevenRej();
  promise2.then((data)=>{
      
  })
  .catch((e)=>{
    console.log(e);
  })