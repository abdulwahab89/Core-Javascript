// // API --? Application Programming Interface


//  const URL="https://jsonplaceholder.typicode.com/todos";
// // fetch api -- uses request and response objects

// const todoPara=document.querySelector("#todo");
// const btn=document.querySelector("#btn")
// // const getFacts= async()=>{ 
// //     let response=await fetch(URL);
// // let data= await response.json();

// // console.log(data[0].title);
// // todoPara.innerText=data[1].title;
// // }


// function getFacts(){
//     fetch(URL).then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         console.log(data); 
//         todoPara.innerText=data[1].title;
//     })
// }

// btn.addEventListener("click",getFacts)


// // AJAX is asynchronous JS and XML

// // JSON is Javascript Object Notation --> AJAJ, asynchronous JS and JSON




// // REQUEST AND RESPONSE.

// //HTTP verbs
// //Response status code : declares the health status of the request

// // 200 --> good 
// // 400 --> bad request 
// //404 ---> client error messsge , page not found
// //500 > server error responses 

// //headers:: Extra information 
// // content type , status code etc

 const BASE_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"

 const dropdowns=document.querySelector(".dropdown select")

 for(let select of dropdowns){
    for(currCode in countryList){
       let newOptions=document.createElement("option")
        newOptions.innerText=currCode;
        newOptions.value=currCode;
    select.append(newOptions);
    }

 }