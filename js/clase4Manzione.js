let precioProducto = 0;
let cantidadProductos = 0;
let continuar ="SI";
let ultimoImporte = 0;
let importeTotal = 0;

function modificaCantidad (cantidad){
    cantidadProductos = cantidadProductos + cantidad;
}

function actualizarUltimoImporte (importe){
    ultimoImporte = importe;
}

function actualizarTotal (importe){
    importeTotal = importeTotal + importe;
}

console.log("Bienvenido a la caja de autoservicio del supermercado");
console.log("Ingrese el importe de los productos en orden para contabilizar, escriba la palabra DESHACER para eliminar el último producto ingresado, TOTAL para calcular el total o ingrese SALIR para cancelar el proceso");

while (precioProducto != "SALIR" && continuar == "SI" ){

    cantidadProductos = 0;
    ultimoImporte = 0;
    importeTotal = 0;
    precioProducto = 0;
    
    while (precioProducto != "SALIR" && precioProducto != "TOTAL" ){

        if (cantidadProductos == 0 || ultimoImporte == 0){
            while (precioProducto <= 0 || isNaN(parseInt(precioProducto))){
                precioProducto = prompt("Ingrese un importe o SALIR para cancelar.");
                if(precioProducto == "SALIR" || (precioProducto == "TOTAL" && cantidadProductos != 0)){
                    break;
                }else if (precioProducto <= 0 || isNaN(parseInt(precioProducto))){
                    alert("Se debe informar un importe mayor a 0");
                }
            }

            if(precioProducto == "SALIR" || precioProducto == "TOTAL" ){
                break;
            }
            modificaCantidad(1);
            actualizarUltimoImporte(parseInt(precioProducto));               
            actualizarTotal(parseInt(precioProducto));
            precioProducto = 0;

        } else {

            while (precioProducto <= 0 || isNaN(parseInt(precioProducto))){
                precioProducto = prompt("Ingrese un importe, la palabra DESHACER para eliminar el último ingresado, TOTAL para totalizar o SALIR para cancelar.");
                if(precioProducto == "SALIR" || (precioProducto == "TOTAL" && cantidadProductos != 0)){
                    break;
                }else if ( precioProducto == "DESHACER" ){

                    modificaCantidad(-1);
                    actualizarTotal((ultimoImporte*(-1)));
                    actualizarUltimoImporte(0);  
                    break;

                }else if (precioProducto <= 0 || isNaN(parseInt(precioProducto))){
                    alert("Se debe informar un importe mayor a 0");
                }
            }
            
            if(precioProducto == "SALIR" || precioProducto == "TOTAL"){
                break;
            }

            if ( precioProducto != "DESHACER" ){
                modificaCantidad(1);
                actualizarUltimoImporte(parseInt(precioProducto));
                actualizarTotal(parseInt(precioProducto));
                precioProducto = 0;
            }
        }   

    }
    
    if (precioProducto == "TOTAL") {
        if (cantidadProductos == 0){
            console.log("Ha eliminado el único producto que ingreso. El total es ingresado es 0.");
        }else {
            console.log("Ha ingresado "+ cantidadProductos + " producto/s con un total de "+ importeTotal+ " Pesos.");
        }

        continuar = prompt("Si quiere hacer otro ingreso de productos escriba SI caso contrario escriba NO");
        while (continuar != "SI" && continuar != "NO" ){
            continuar = prompt("Solo puede ingresar SI o NO, ¿Quiere hacer un nuevo ingreso de productos?");
        }
    }  

}

if (precioProducto ==  "SALIR"){
    console.log("Ha ingresado SALIR, por lo tanto se da por finalizado el proceso.");
} else {
    console.log("Gracias por utilizar la caja de autoservicio del supermercado. Que tenga un buen día.");
}
