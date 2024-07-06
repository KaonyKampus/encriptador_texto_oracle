//definí la variable que contiene la caja del input 
const userText = document.querySelector("#textBox");

//definí un objeto que contiene los valores a intercambiar
const encryptConditions = { 
    "e":"enter",
    "i":"items",
    "a":"ai",
    "o":"ober",
    "u":"ufat"
 }

const decryptConditions = {
    "enter":"e",
    "items":"i",
    "ai":"a",
    "ober":"o",
    "ufat":"u"
}

 //definir una funcion que mapee el objeto y lo divida para retornar el valor contrario
function encriptadorT(textoIngresado){
     return textoIngresado.split('').map(mapeo=>{
        return encryptConditions[mapeo] || mapeo;
     }).join("");
}

function desencriptadorT(textoIngresado) {
    let textoDesencriptado = textoIngresado;
    for (const [key, value] of Object.entries(decryptConditions)) {
        textoDesencriptado = textoDesencriptado.split(key).join(value);
    }
    return textoDesencriptado;
}

/*Esta funcion tiene una variable  que guarda el valor del input de 
const a, esto es para que tome el valor literal con .value
tenemos otra variable que es resultado que es la que contiene el valor de la 
funcion encriptadorT y le ponemos como parametro el valor imput que 
es el texto que el ususario ingresa para encriptar */

function clickFunction(){ 

    const valorInput = userText.value;

    if(/[A-Z]/.test(valorInput)){
        alert("Por favor ingrese un valor valido sin mayúsculas")
    }else{
        const resultado = encriptadorT(valorInput);
        console.log(resultado);
        const generateText = document.querySelector("#convertido")
        generateText.innerHTML = resultado

        const element1 = document.querySelector("#parag-copied");
        element1.innerHTML = "¡Texto encriptado con éxito!"
    }

}


function clickFunction2(){ 

    const valorInput2 = userText.value;

    if(/[A-Z]/.test(valorInput2)){
        alert("Por favor ingrese un valor valido sin mayúsculas")
    }else{
        const resultado2 = desencriptadorT(valorInput2);
        console.log(resultado2);
        const generateText = document.querySelector("#convertido")
        generateText.innerHTML = resultado2

        const element2 = document.querySelector("#parag-copied");
        element2.innerHTML = "¡Texto desencriptado con éxito!"
    }
}


function resetTextBox (){
    const resetBox = document.querySelector("#textBox");
    const resetText = document.querySelector("#convertido");
        resetBox.value = " ";
        resetText.innerHTML = " ";
}


function copyText (){
    const copiedText = document.querySelector("#convertido");
           copiedAll = copiedText.textContent ;
           navigator.clipboard.writeText(copiedAll);

    const copyMessage = document.querySelector("#parag-copied");
    copyMessage.innerHTML = "¡Párrafo copiado con éxito!"
}






















