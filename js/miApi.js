/*
fetch('datos.txt') // Ubicacion de la informacion
.then(function(response){
    return response.text(); // Devolver en formato texto
}) // Que clase de informacion estoy pidiendo
.then(function(data){
    console.log(data); // Imprimir todos los datos
}) // Extrae los datos de consumo
.catch(function(error){
    console.log(`HEMOS TENIDO UN ERROR: ${error}`); // Sirve para errores
})
*/

/*
fetch('datos.txt')
.then((response) => response.text())
.then((data) => console.log(data))
.catch((error) => console.log(`Hemos tenido un error: ${error}`))
*/

/*
let url = 'datos.txt';
fetch(url)
.then(response => response.text())
.then(data => {
    let informacion = document.getElementById('datos');
    informacion.innerHTML = data;
})
.catch(error => console.log(`Hemos tenido un error: ${error.message()}`))
*/

let url2 = 'js/datos.json';

fetch(url2)
.then(responsive => responsive.json())
.then(data => {
    let impri = document.getElementById('datos');
    let mensaje = ""; 
    /*for (let index = 0; index < data.length; index++) {
        mensaje = mensaje + data[index].nombre + ' ' + data[index].apellido + '<br>';
        
}*/
    /*
    data.forEach(element => {
        mensaje += element.nombre + "<br>"
    })
    impri.innerHTML = mensaje;// impri.innerHTML = data[0].nombre+ "<br>" + data[0].apellido + "<br>" + data[0].telefono + "<br>" + data[0].cedula + "<br>" + data[1].nombre+ "<br>" + data[1].apellido + "<br>" + data[1].telefono + "<br>" + data[1].cedula;
    */
    
    data.map((valor,index,vector) => {
        mensaje += valor.nombre + "<br>"
    })
    impri.innerHTML = mensaje;
})

.catch(error => console.log(`Hemos tenido un error: ${error.message()}`))