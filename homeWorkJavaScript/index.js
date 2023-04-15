/*
Задание 1
Создайте массив из следующих элементов: "Семен", "Иван", "Петр", "Татьяна". Создайте еще один массив с возрастами: 18, 27, 74, 34; Создайте и заполните при помощи цикла этот новый массив новыми элементами по образу: "Семен 18 лет/годов"

*/

const names = ["Семен", "Иван", "Петр", "Татьяна", "Иван", "Петр"];
let ages = [18, 27, 74, 34, 1, 3];

let persons = [];

for (let i = 0; i < names.length; i++) {

    persons[i] = (names[i] += ' ' + ages[i])

    switch (ages[i] % 10) {
        case 2:
            persons[i] += ' года';
            break;
        case 3:
            persons[i] += ' года';
            break;
        case 4:
            persons[i] += ' года';
            break;
        case 1:
            persons[i] += ' год';
            break;
        default:
            persons[i] += ' лет';

    }
}


persons.forEach(perr => {
    console.log(perr);
})


/*
Задание 2
Используя пройденные на занятии методы массива получите из этого массива новый массив, в котором элементы идут в обратной последовательности.
*/

let personsRevers  = [];

for(let i = 0 ; i< persons.length; i++){
personsRevers[i] = persons.pop();

}

console.log(persons);
console.log(personsRevers);




