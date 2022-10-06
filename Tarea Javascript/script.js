// creamos una funcion y le asignamos un nombre
function EjercicioArea() {
    //a continuacion creamos 3 variables, 2 de ellas fueron dadas en el ejercicio
    //las cuales serian variables constantes con valor de 4 y 7
    //la tercera variable es una variable auxiliar que ocuparemos
    // para guardar el resultado de nuestra operacion
    const ancho = 4;
    const alto = 7;
    let area = ancho* alto;
    // a continuacion imprimimos con console.log, escribimos una linea 
    //y con el signo + concatenamos nuestra variable auxiliar
    console.log("El area del circulo multiplicacion el ancho por alto es: "+area);
}
//Creamos otra funcion a la cual le asignaremos el nombre de conversor
function Conversor(){
    // declaramos nuestras varibles una constante llamada euros con valor de 7
    //y una variable let llamada dolares en la cual almacenaremos el resultado de la conversion de
    //euros a dolares
    const euros=7;
    let dolares=euros*2;
    //en este caso ocupamos return el cual al momento de llamar a la funcion nos devolvera la linea
    //con una breve oracion mas el resultado de la conversion
    console.log("La conversion de "+euros+" euros a dolares es igual a $"+dolares);

    //¿para que ocupamos return?
    //ocupamos return en una funcion cuando queremos que nos devuelva algo al momento de llamarla
    //otra propiedad de return es que termina la funcion
    //no podemos agregar mas lineas de codigo despues de un return ya que seran ignoradas
}
//nuevamanete creamos una funcion la cual llamares IVA
function IVA() {
    //en esta funcion creamos 3 variables dos variables constantes las cuales nos fueron dadas
    //en el ejercicio, la tercera variable sera una variable auxiliar
    //en esta variable auxiliar almacenaremos el resultado de
    //sumar el precio al resultado del precio multiplicado por el IVA
    const IVA= 0.21;
    const precio = 100;
    let precioIva = precio+(precio *IVA);
    //nuevamente ocuparemos return para que nos de una linea de codigo
    //con una variable llamada "precioIva" la cual definimos antes
    //esta variable esta concatenada a una breve oracion
    console.log("Al culcular el iva de 21% en ciertos articulos da: $"+precioIva);
}
//creamos una nueva funcion llamada funcionesmatematicas
function funcionesmatematicas() {
    //en este apartado creamos 4 variables las cuales 2 seran variables auxiliares
    //las otras dos variables seran nuestros 2 numeros para hacer las operaciones
    let num1 = 54;
    let num2 = 69;
    //estas dos funciones axuliares seran suma y resta
    //en las cuales almacenaremos el resultado de dos operaciones como su 
    //nombre lo indica
    let suma = num1 + num2;
    let resta = num1-num2;

    //en esta parte del codigo imprimiremos varias lineas de codigo
    //imprimiremos las 4 operaciones pero iran separadas por una linea de guiones
    //en las dos primeras funciones imprimidas ocuparemos nuestras variables
    //auxiliares que definimos anteriormente
    //para las dos restantes haremos la operacion matematica en la misma linea
    //sin ocupar ninguna variable auxiliar solamente nuestras variables
    //numericas definidas anteriormente
    console.log("-----------------------");
    console.log("Suma resultado: "+suma);
    console.log("-----------------------");
    console.log("Resta resultado: "+resta);
    console.log("-----------------------");
    console.log("Division resultado: "+num1/num2);
    console.log("-----------------------");
    console.log("Multipliacion resultado: "+num1*num2);
    console.log("-----------------------");
}
//en el penultimo ejercicio haremos algo diferente
//crearemos nuestra funcion pero en los parentesis escribiremos radio
//el cual sera nuestri parametro para calcular el area de un circulo
function areacirculo(radio) {
    //en esta funciones crearemos solo una variable auxiliar la cual
    //sera llamada area
    //para poder calcular el area de un circulo necesitamos
    //multiplicar PI por radio al cuadrado
    //en javascript para elevar un numero ocupamos
    //la funcion Math.pow()
    let area=3.14*Math.pow(radio,2);
    //Esta funcion necesita dos parametros los cuales estan deben ir
    //separados por una coma, el primer parametro sera nuestro
    //numero base y el segundo sera nuestro exponente
    //en este caso nuestro numero base sera radio 
    //y el exponente sera 2 para elevar radio al cuadrado
    console.log("El area del circulo dad a su radio de "+radio+" es igual a "+area);
    //para finalizar la funcion ocuparemos return con una oracion y el 
    //resultado de nuestra operacion
}
//En este ultimo ejercicio crearemos una funcion llamada formulario
function formulario() {
    //definiremos 4 variables las cuales 3 seran constantes
    //y solo una sera de valor no constante
    const nombre="Samuel";
    const apellido="Calero";
    let años = 22;
    const curso = "Full Stack Junior 16";
    //al momento de imprimir concatenaremos nuestras variables a 
    //3 lineas de con oraciones breves
    console.log("Mi nombres es "+nombre+" "+apellido);
    console.log("Tengo "+años+" años");
    console.log("Me encuentro en el curso de "+curso);
}

//Para llamar a todos los ejercicios y que se muestren en la consola
//deben de sustituir los return por console.log y ademas
//llamar a las funciones como veran a continuacion
console.log("***********************Ejercicio 1***********************");
EjercicioArea();
console.log("***********************Ejercicio 2***********************");
Conversor();
console.log("***********************Ejercicio 3***********************");
IVA();
console.log("***********************Ejercicio 4***********************");
funcionesmatematicas();
console.log("***********************Ejercicio 5***********************");
areacirculo(4);
console.log("***********************Ejercicio 6***********************");
formulario();
