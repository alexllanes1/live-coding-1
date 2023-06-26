// Escribe tu código aquí.
const array = ["Hola", "Como", "AHAHHAHA","Estas", "Me", "Llamo", "Manuel", "Alejandro", "Mucho", "gusto"];
const parametro = "adios";
const resultado=[];

const lenght = parametro.length; //5
const lengthArray = array.length;

for(var i=0;i<lengthArray;i++){
    if(array[i].length>lenght){
        resultado.push(array[i]);
    }
}

console.log(resultado);

for(var x=0; x<resultado.length;x++){
let datos1 = document.createElement('li');
datos1.innerHTML=resultado[x];
ol.append(datos1);
}

