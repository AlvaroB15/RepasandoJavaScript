/* 
    Para poder acceder a los elementos del html, uno deberia usar js, como por ejemplo:
        
*/

function cambio(){
    var text = document.getElementById("parr1");
    text.innerHTML = "Cambiado el Parrafo";
}

/* Tipos de Alertas:
        alert:      alerta
        prompt:     ventana de solicitud    
        confirm:    ventana de confirmacion
*/

function tiposAlerta(){
    // La alerta alert, solo mostrara el texto designado y un boton de ok, solo podra continuar si le da click

    alert("Mensaje de alerta \nAlerta tipo ´alert´");

    // La alerta prompt es usada para que el usuario ingrese datos antes de ingresar a la pagina, al dar click en ok, lo que escriba se retorna , si le da en cancel, nom no tendra ningun valor
    var nom = prompt("Introduzca su nombre por favor","Prueb tipo PlaceHolder");
    
    var text1 = document.getElementById("parr1");
    text1.innerHTML = nom;

    // La alerta de confirmacion, la variable que se le asigna el confirm, sera true o false, dependa de lo que el usuario digite, pero si o si regresa un valor, a diferencia que el prompt
    var resultado = confirm("Acepta los terminos de esta pagina, al declarar que es mayor de edad? xd");
    
    var text2 = document.getElementById("parr2");
    text2.innerHTML = resultado;
    // text2.append(" me agreggue");
}

function objetos1(){

    var person = {
        name: "Alvaro Martin Begazo Carhuayo",
        age: 23
    }; // MUY IMPORTANTE, poner el ; al final de la declaracion de la variable que sera una lista de varios atributos, con lo cual esta variable se convierte en un objeto

    var text1 = document.getElementById("parr1");
    text1.innerHTML = "<strong>Name: </strong>"+person.name;

    var text2 = document.getElementById("parr2");
    text2.innerHTML = "<strong>Edad: </strong>"+person.age;

    var text3 = document.getElementById("parr3");
    text3.innerHTML = "<strong>Cantidad de atributos: </strong>"+person.name.length;

}

function objetos2(){
    // como crear un constructor por medio de una funcrion y con el nombre de la "clase", al querer instanciar el objeto de la clase, se hace de la misma forma POO de java

    // "constructor de la clase"
    function person(nombre, edad, colorFav){
        this.nombre = nombre;
        this.edad = edad;
        this.colorFav = colorFav;
        // debo poner a la funcion como un atributo
        this.listar = toString;
    }

    // agregando metodos
    function toString(){
        return "NOMBRE: "+this.nombre+" EDAD: "+this.edad;
    }

    // "instanciar objetos de la clase"
    var p1 = new person("Alvaro",23,"rojo");
    var p2 = new person("Paolo", 24, "negro");

    var text1 = document.getElementById("parr1");
    text1.innerText = p1.colorFav;

    var text2 = document.getElementById("parr2");
    text2.innerText = p2.colorFav;

    var text3 = document.getElementById("parr3");
    text3.innerText = p1.listar();
}

/* function objetos3{
    
    // "instanciar objetos de la clase"
    // sintaxis literal

    var p1 = {name}


    var text1 = document.getElementById("parr1");
    text1.innerText = p1.colorFav;

    var text2 = document.getElementById("parr2");
    text2.innerText = p2.colorFav;
} */

// Hace que se cargue la funcion que llamemos, al solo recargar o entrar por primera vez a la web

// window.onload = cambio;
// window.onload = tiposAlerta;
window.onload = objetos2;
