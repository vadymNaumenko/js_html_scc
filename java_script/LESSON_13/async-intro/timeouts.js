// // Асинхронный код vs синхронный 
// console.log("hello");

// // код сработал с задержкой
// setTimeout(() => {
//     console.log("world");
// }, 5000)

// function print(){
//     console.log("Print is done")
// }
// setTimeout(print, 3000);

// Создать функцию clapHands()
// которая выводит в консоль фразу "Clap-clap " через 2 секунды
// и фразу "Bravo" через 7 секунд
// вызовите эту функцию

function clapHands(){
    setTimeout(() => {
        console.log("Clap-clap");
    },2000)

    setTimeout(() => {
        console.log("Bravo");
    },7000)
}

clapHands();