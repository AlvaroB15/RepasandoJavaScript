/* 
    Para poder acceder a los elementos del html, uno deberia usar js, como por ejemplo:
        
*/

function cambio() {
    var text = document.getElementById("parr1");
    text.innerHTML = "Cambiado el Parrafo";
}

/* Tipos de Alertas:
        alert:      alerta
        prompt:     ventana de solicitud    
        confirm:    ventana de confirmacion
*/

function tiposAlerta() {
    // La alerta alert, solo mostrara el texto designado y un boton de ok, solo podra continuar si le da click

    alert("Mensaje de alerta \nAlerta tipo ´alert´");

    // La alerta prompt es usada para que el usuario ingrese datos antes de ingresar a la pagina, al dar click en ok, lo que escriba se retorna , si le da en cancel, nom no tendra ningun valor
    var nom = prompt("Introduzca su nombre por favor", "Prueb tipo PlaceHolder");

    var text1 = document.getElementById("parr1");
    text1.innerHTML = nom;

    // La alerta de confirmacion, la variable que se le asigna el confirm, sera true o false, dependa de lo que el usuario digite, pero si o si regresa un valor, a diferencia que el prompt
    var resultado = confirm("Acepta los terminos de esta pagina, al declarar que es mayor de edad? xd");

    var text2 = document.getElementById("parr2");
    text2.innerHTML = resultado;
    // text2.append(" me agreggue");
}

function objetos1() {

    var person = {
        name: "Alvaro Martin Begazo Carhuayo",
        age: 23
    }; // MUY IMPORTANTE, poner el ; al final de la declaracion de la variable que sera una lista de varios atributos, con lo cual esta variable se convierte en un objeto

    var text1 = document.getElementById("parr1");
    text1.innerHTML = "<strong>Name: </strong>" + person.name;

    var text2 = document.getElementById("parr2");
    text2.innerHTML = "<strong>Edad: </strong>" + person.age;

    var text3 = document.getElementById("parr3");
    text3.innerHTML = "<strong>Cantidad de atributos: </strong>" + person.name.length;

}

function objetos2() {
    // como crear un constructor por medio de una funcrion y con el nombre de la "clase", al querer instanciar el objeto de la clase, se hace de la misma forma POO de java

    // "constructor de la clase"
    function person(nombre, edad, colorFav) {
        this.nombre = nombre;
        this.edad = edad;
        this.colorFav = colorFav;
        // debo poner a la funcion como un atributo
        this.listar = toString;
    }

    // agregando metodos
    function toString() {
        return "NOMBRE: " + this.nombre + " EDAD: " + this.edad;
    }

    // "instanciar objetos de la clase"
    var p1 = new person("Alvaro", 23, "rojo");
    var p2 = new person("Paolo", 24, "negro");

    var text1 = document.getElementById("parr1");
    text1.innerText = p1.colorFav;

    var text2 = document.getElementById("parr2");
    text2.innerText = p2.colorFav;

    var text3 = document.getElementById("parr3");
    text3.innerText = p1.listar();
}

function objetos3() {
    // PRIMERA forma de inicializar un Arreglo en JS
    // var nombre = new Array("Alvaro","Paolo","Antony");


    // SEGUNDA forma de inicializar un Arreglo en JS
    // var nombre = new Array(2);

    // TERCERA forma de inicializar un Arreglo en JS
    // var nombre = new Array();

    // CUARTA forma de inicializar un Arreglo en JS
    // esta es la forma mas recomendad para declarar
    var nombre = ["Alvaro", "Paolo", "Anthony"]

    nombre[0] = "Alvaro";
    nombre[1] = "Paolo";
    nombre[2] = "Anthony";

    //

    var text1 = document.getElementById("parr1");
    text1.innerText = nombre[0];

    // Funciones de arreglos (length, concat)
    var text2 = document.getElementById("parr2");
    text2.innerText = nombre.length; // no poner el () al length, osea no se debe poner lngth()

    var colores = ["rojo", "verde", "azul"];

    var mixto = nombre.concat(colores);
    var text3 = document.getElementById("parr3");
    text3.innerText = mixto[4];

    // en JS no existe matrices asociativas, pero algo parecido que se puede usar es: (hay que recordar que una matriz asociativa, es cuando se puede usar indices con nombres en vez de numeros )
    var animales = [];
    animales["nombre"] = "gringa";
    animales["edad"] = 10;
    var text4 = document.getElementById("parr4");
    // si ponemos un indice como numero, me sale que el arreglo esta vacio osea undefined
    text4.innerText = animales["nombre"];

}

function objetos4() {
    /* los objetos con variable globales o constantes (mas), tenemos por ejemplo nombraremos a algunos:
        E       => constante de Euler
        LN2     => Logaritmo Natural 
        LN10    => 
        LOG2E   => 
        LOG10E  => 
        PI      => 
    */

    /* Algunas de las funciones "estaticas" ,algunos :
            abs(x)
            acos(x)
            max(x,y,z,...)
            min(x,y,z,...)
            pow(x,y)
            sqrt(x,y)
            random()

        La forma de usar es:
            Math.sqrt(16);
    */

    var num = prompt("Ingrese numero para potencia: ");
    alert("La potencia de " + num + " es: " + Math.pow(num, 2));


}

function objetos5() {
    // alert("Holi xddd");

    /* Los metodos del objeto Date:
        getFullYear()       => 
        getMonth()          => 
        getDate()           => 
        getHours()          => 
        getMinutes()        => 
        getSeconds()        => 
        getMilliseconds()   => 
    */
    var fecha = new Date();

    var text1 = document.getElementById("parr1");
    text1.innerText = fecha.getHours();

    // Funciones de arreglos (length, concat)
    var text2 = document.getElementById("parr2");
    text2.innerText = fecha.getMinutes(); // no poner el () al length, osea no se debe poner lngth()

    var text3 = document.getElementById("parr3");
    text3.innerText = fecha.getSeconds();
}

function dom1() {
    // se peude usar JS para manipular el DOM de una pagina de forma dinamica para añadir, borrar y modificar elementos

    /* En el DOM, los elementos del html, etiquetas, se convierten en nodos, que se interrelacionan en un arbol
    
    EL objeto "document" es un objeto predefinido que puede ser utilizado para acceder a todos los elementos del DOM

    */

    // esto remplazara todo lo que estaba en el body
    // document.body.innerText = "simple texto";

    /*  Seleccionamiento de elementos, pueden ser por:
            Id          => te devuelve el 1er encontrado
            ClasName    => te devuelve un array de todos
            TagName     => te devuelve un array de todos
    
    */

    // pidiendo por medio del Id
    var tex1 = document.getElementById("parr3");
    tex1.innerText = "Cambiado por getElementById";

    // pidiendo por medio del ClassName
    var tex2 = document.getElementsByClassName("primerT");
    tex2[2].innerText = "Cambiado por getElementsByClassName"

    // pidiendo por medio del nombre de la etiqueta
    var tex3 = document.getElementsByTagName("p");
    tex3[4].innerText = "Cambiado por getElementsByTagName";
}

function dom2() {
    /* Cada elemento del DOM tiene una serie de propiedades y metodos
                element es el nodo que estamos evaluando
        element.childNodes => arreglo de hijos del nodo element
        element.firstChild => primer nodo hijo del element
        element.lastChild => ultimo hijo del nodo element
        element.hasChildNodes => si element al menos tiene un hijo nodo
        element.nextSibling => retorna al nodo hermano mas cercano
        element.previousSibling => amterior nodo cercadno de element
        element.parentNode => retorna el nodo padre de element

    */
    
                            /* DUDAAAAAAAAAA  */

    var ti = document.getElementsByClassName("primerT");

    var el = document.getElementById("elementDiv1");
    var hij = el.childNodes;
    ti[2].innerText = hij[2].innerText;

    // var h = el.childNodes;
    // el[1].innerHTML = h[4];
    
}

function modificandoElementos(){
    // Modificando Atributos 
    var imagen = document.getElementById("imagen");
    imagen.src = "/Imagen/dbz.jpg";
    imagen.alt = "Imagen de DBZ";

    // hay que aclarar que las propieadades de css que se usan para modificar por medio de JS y llevaban el "-", se debera cambiar por mayuscula, como border-radius => borderRadius
    imagen.style.height = "350px";
    imagen.style.border = "2px solid blue";
    imagen.style.borderRadius = "40px";

}

function creandoElementos(){
    
}

/* ----------------------------------------------------------------- */
/* ----------------------------------------------------------------- */


// Hace que se cargue la funcion que llamemos, al solo recargar o entrar por primera vez a la web

// window.onload = cambio;
// window.onload = tiposAlerta;
// window.onload = objetos4;

/* El setInterval, dice q a cada cierto tiempo se vuelve
   a repetir la misma funcion */
// window.onload = setInterval(objetos5,3000);

// window.onload = objetos5;
// window.onload = dom2;
// window.onload = modificandoElementos;
window.onload = creandoElementos;