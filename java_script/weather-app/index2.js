//  let a = 66;
//  console.log(a)
//  let b = new Promise(function(resolve,reject){
//   setTimeout(() => {
//     resolve(a = 666)
//   }, 2000);
//  });
//  b.then(function(){
//   console.log(a)
//  });
 
​
​
​
​
// // -------------------Метод Fetch api-------------------------------------------------
  // fetch('https://jsonplaceholder.typicode.com/users')
  // .then(data => {
  // console.log(data)// получаем response
  // console.log(data.text()) //после преобразования в текст получаем промис 
  
  // });
​
// -----------------Конструкция THEN/CATCH---------------------
​
        // const button = document.getElementById("refreshButton");
        // const result = document.getElementById("content");
​
        // function fetchData() {
        //   fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(resp => {
        //       if (resp.status !== 200) {
        //         throw new Error('Ошибка получения данных');
        //       }
        //       return resp.json();
        //     })
        //     .then(json => {
        //       const userList = document.createElement("ul");
​
        //       json.forEach(user => {
        //         const listItem = document.createElement("li");
        //         listItem.textContent = user.name;
        //         userList.appendChild(listItem);
        //       });
​
              
        //       while (result.firstChild) {
        //         result.removeChild(result.firstChild);
        //       }
​
        //       result.appendChild(userList);
        //     })
        //     .catch(error => {
        //       console.error(error);
        //     });
        // }
​
        // button.addEventListener("click", fetchData);
​
​
        // -------------------Конструкция async/await----------------------------------------
        // const button = document.getElementById("refreshButton");
        // const result = document.getElementById("content");
        
        // async function fetchData() {
        //   try {
        //     const resp = await fetch('https://jsonplaceholder.typicode.com/users');
        //     if (resp.status !== 200) {
        //       throw new Error('Ошибка получения данных');
        //     }
        //     const json = await resp.json();
            
        //     const userList = document.createElement("ul");
        //     json.forEach(user => {
        //       const listItem = document.createElement("li");
        //       listItem.textContent = user.name;
        //       userList.appendChild(listItem);
        //     });
            
        //     // Удаляем предыдущий список перед добавлением новых данных
        //     while (result.firstChild) {
        //       result.removeChild(result.firstChild);
        //     }
        
        //     result.appendChild(userList);
        //   } catch (error) {
        //     console.error(error);
        //   }
        // }
        
        // button.addEventListener("click", fetchData);
        
              
        
​
​
​
​
        
​
​
​
​
​
// ------------fetch api weather------------------------------------------------
  const button = document.getElementById("refreshButton");
  const links = [
    {
      url: "https://wttr.in/Moscow",
      params: {
        2: "",
        m: "",
        lang: "ru",
      },
    },
    {
      url: "https://wttr.in/Amsterdam",
      params: {
        2: "",
        m: "",
        lang: "ru",
      },
    },
    
    {
      url: "https://wttr.in/London",
      params: {
        2: "",
        m: "",
        lang: "ru",
      },
    },
    {
      url: "https://wttr.in/Berlin",
      params: {
        2: "",
        m: "",
        lang: "ru",
      },
    },
  ];
  
  function fetchData() {
    for (const link of links) { // const link - это объявление переменной, которая будет хранить текущий элемент массива links на каждой итерации цикла.
      const { url, params } = link; // Извлекается url и params из объекта link.
      const queryString = new URLSearchParams(params).toString(); // params преобразуется в строку запроса с помощью URLSearchParams.
      fetch(`${url}?${queryString}`)
        .then((response) => response.text())
        .then((pageText) => {
          const result = document.getElementById("content");
          result.innerHTML = pageText;
        })
        .catch((error) => {
          console.error("Ошибка при выполнении запроса:", error);
        });
    }
  }
  button.addEventListener("click", fetchData);