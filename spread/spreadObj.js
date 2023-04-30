// МЫ МОЖЕМ СКОПИРОВАТЬ ПОЛЯ-ЗНАЧЕНИЯ ИЗ ОДНОГО ОБЪЕКТА В ДРУГОЙ
// SPREAD объекта
const user = {name: "Igor"};

const userWithEmail = {...user, email: "igor@gmail.com"};
console.log(userWithEmail); // { name: 'Igor', email: 'igor@gmail.com' }

