
// Создайте стрелочную функцию, которая бы принимала массив и цифру, возвращала бы элемент массива под этим индексом.
const numbers = [1, 3, 4];

let showElementFromArray = (array, index) => array[index];

console.log(showElementFromArray(numbers, 1));
console.log(showElementFromArray(numbers, 5)); //undefined

//////////////////////////////////////end/////////////////////////////////////////////////////////////
// Задание 2 *
// Создайте функцию, которая бы принимала бы следующие параметры:

// код погоды
// функция decode, которая дает расшифровку погоды по коду.
// Функция должна возвращать строку, описывающую погоду.

// Таблица соответствия код-описание:
// SQ – шквал
// PO – пыльный вихрь
// FC - торнадо
// BR – дымка (видимость от 1 до 9 км)
// HZ – мгла (видимость менее 10 км)
// FU – дым (видимость менее 10 км)
// DS - пыльная буря (видимость менее 10 км)
// SS - песчаная буря (видимость менее 10 км)
// Подсказка: удобно использовать в одном из методов switch-case:

function decoder(code) {
    switch (code) {
        case 'SQ': return 'шквал';
        case 'PO': return 'пыльный вихрь';
        case 'FC': return 'торнадо';
        case 'BR': return 'дымка (видимость от 1 до 9 км)';
        case 'HZ': return 'мгла (видимость менее 10 км)';
        case 'FU': return 'дым (видимость менее 10 км)';
        case 'DS': return 'пыльная буря (видимость менее 10 км)';
        case 'SS': return 'песчаная буря (видимость менее 10 км)';
        default  : return 'код не найден';
    }
}

const weather = (decoder,code)=>{
return decoder(code);
}

console.log(weather(decoder,"SS"));

console.log(decoder('SQ'));
console.log(decoder('jhhj'));