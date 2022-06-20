/*
function saludar () {
    console.log("hola gente");
}
saludar()



function solicitarNombre() {
let nombreIngresado = prompt("Ingresar nombre");
alert ("El nombre ingresado es " + nombreIngresado)
}
solicitarNombre()

*/

let suma

let colchoneta = 800

let almohadilla = 700

function productos (a,x) {

let preguntarAlUser = prompt ("Que producto desea comprar? Tenemos colchoneta y almohadilla!!")

if (preguntarAlUser == "colchoneta"){
    
suma = a  

alert ("compraste un producto que vale" +" "+ suma)
}

else if (preguntarAlUser == "almohadilla"){

suma = x 

alert ("compraste un producto que vale" +" " + suma)
}

else if (preguntarAlUser == "colchoneta y almohadilla"){

suma = a+x   
 
alert ("compraste dos productos que valen" +" " + suma)
    
}
return suma
}

productos (colchoneta,almohadilla)