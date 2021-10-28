let main=document.querySelector("main")
let input=document.querySelector("input")
let button=document.querySelector("button[name=search]")

let baseURL= 'https://newsapi.org/v2/everything?q=';
let publishedAt= '2021-09-28T14:31:24Z';
let apiKey = '67894c4e782d40c0b271c7c27a97aca4';

button.addEventListener("click",function () {

    let urlAddress =`${baseURL}${input.value}&apiKey=${apiKey}&sortBy=popularity&publishedAt=${publishedAt}`;
    
    fetch(urlAddress)
    .then(response => response.json())
    .then(data => {console.log(data)
        
        let search=data.articles
        let result=search.map(function (results) {
            return `<p>${results.title}</p>
            <p>${results.author}</p>
            <p>${results.description}</p>
            <img src=${results.urlToImage}>`
            
        }).join("");
    main.innerHTML=result
    })
})
