const button = document.getElementById("refreshButton")
const links = [
    {
        url: "https://wttr.in/Kiew",
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
            lang: "en",
        },
    },
    {
        url: "https://wttr.in/Berlin",
        params: {
            2: "",
            m: "",
            lang: "de",
        },
    },
]
function fetchData() {
    for (const link of links) { // объявление переменной,
        // которая будет хранить текущий элемент массива links  на каждой итерации цикла
        const { url, params } = link; // извлекается url и params
        const queryString = new URLSearchParams(params).toString() // params  преобразуются в строку запроса
        // с помощью метода URLSearchParams и преобразуются в строку с помощью метода toString()
        fetch(`${url}?${queryString}`)
            .then((response) => response.text())
            .then((pageText) => {
                const result = document.getElementById("content");
                result.innerHTML = pageText;
            })
            .catch((error) => {
                console.error("Ошибка при выполнении запроса", error);
            });
    }
}
button.addEventListener("click", fetchData);
