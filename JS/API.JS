

/*$(document).ready(function(){
    $("#enviar").click(function(){
        $.get("https://api.covidtracking.com/v1/us/daily.json",
            function(data){
                $.each(data.date, function (i, item) {
                    $("#API").append("<tr><td>" +item.states+ "<tr><td>" + item.negative);
                });

            });
    });

})*/




/*let url = "https://pokeapi.co/api/v2/ability/"
$.get(url, function(respuesta) {

    /*console.log(respuesta)

    let API = respuesta

    $("#API").text(API.nombre)


}, "json")*/
/*respuesta.forEach(function(item) {
    console.log(item)*/

/* let = respuesta
 $get*/




const url = "https://pokeapi.co/api/v2/pokemon/4"

fetch(url)
.then(response => response.json () )
.then(data => {

    let element = document.getElementById('nombrepokemon')
    element.innerHTML = "<tr><td>"+data.name+"</td><td>"
    "</td><td><img src='"+ data.sprites.front_default+"'></td></tr>"

    
           

    console.log(data)
})
.catch(err=> console.log(err))




