// Интервалы
const tick = setInterval(() => {
    console.log("tick");
 }, 2000);

 setTimeout(() => {
    clearInterval(tick);
 },5000)