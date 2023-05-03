
{
    class BMW {
    }
    const bmw1 = new BMW();
    const bmw2 = new BMW();

}

{
    const obj = {};
    obj.title = "Я - обычный объект!";
    obj.age = 12;
    obj.lastName = "Dima";
    obj.showTitle = function () {
        console.log(this.title);
    };
    class SuperObject { }
    const superObj = new SuperObject();
    // аналогично
    superObj.title = "Супер";
    superObj.showTitle = function () {
        console.log(this.title);
    };

    
    console.log(obj);

}

{
    class Male {

        constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
        this.gender = "male";
        this.type = "human";
        }
       }
        
       const oleg = new Male("Олег", "Иванов");
       const ivan = new Male("Иван", "Широков");
       const nikita = new Male("Никита", "Огурцов");
       nikita.firstName = 'hunter';
       console.log(nikita);
}