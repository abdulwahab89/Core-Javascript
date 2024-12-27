// API --? Application Programming Interface


 const URL="https://jsonplaceholder.typicode.com/todos";
// fetch api -- uses request and response objects

const todoPara=document.querySelector("#todo");
const btn=document.querySelector("#btn")
// const getFacts= async()=>{ 
//     let response=await fetch(URL);
// let data= await response.json();

// console.log(data[0].title);
// todoPara.innerText=data[1].title;
// }


function getFacts(){
    fetch(URL).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data); 
        todoPara.innerText=data[1].title;
    })
}

btn.addEventListener("click",getFacts)


// AJAX is asynchronous JS and XML

// JSON is Javascript Object Notation --> AJAJ, asynchronous JS and JSON



