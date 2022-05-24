



let url = "https://pokeapi.co/api/v2/"
$.get(url, function(respuesta) {

    /*console.log(respuesta)*/

    let API = respuesta

    $("#API").text(API.nombre)


}, "json")
    /*respuesta.forEach(function(item) {
        console.log(item)*/

   /* let = respuesta
    $get*/
 



/*const url = "https://pokeapi.co/api/v2/pokemon/ditto"

fetch(url)
.then(response => response.jason)
.then(data => {
    console.log(data)
})
.catch(err=> console.log(err))*/




