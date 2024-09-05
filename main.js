let divData = document.getElementById("divData");


function getData(){
    const promesa = fetch ("https://freetestapi.com/api/v1/products", {method: "GET"});
    promesa.then( (response) => {
        response.json().then(
            (data)=>{
                console.log(data);
                createCards(data);
            }
        )
         .catch((error)=> console.log("Problema con el json", error));
    }
    )
    .catch((err)=>console.log("Existió un problema con la solicitud", err));
}//getData

function createCards (products){
    console.log(products.lenght);
    console.log(products[0].name);
    //Crear tarjeta de producto con datos
}//createCards


getData();

const createCards = 
